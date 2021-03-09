#!/usr/bin/python3

import requests
import json
import sys
from bs4 import BeautifulSoup

BASE_URL = "https://api.github.com"
COMMITS_URL = BASE_URL + "/repos/{owner}/{repo}/commits"
SECRETS_URL = BASE_URL + "/search/code?q=token+user:{username}"

BASE_HEADER = {"Accept": "application/vnd.github.v3+json"}
TMP_AUTH_HEADER = BASE_HEADER.copy()
TMP_AUTH_HEADER["Authorization"] = "token " + "Token falso por si la lio y lo subo a git"

DEFAULT_SECRETS_FILENAME = "./secrets.csv"


class CommitedRepo():
    
    def __init__(self, csvLine):
        
        self.top = csvLine[0]
        self.author = csvLine[1]
        self.name = csvLine[2]
        self.commits = 0

    def setCommits(self, commits):
        self.commits = commits

    def __repr__(self):
        return str(self.top) + "," + self.author + "," + self.name + "," + str(self.commits)

    def __str__(self):
        return str(self.top) + "," + self.author + "," + self.name + "," + str(self.commits)

def parseHeaders(page1Headers):
        links = page1Headers["Link"]
        lastLink = ' <https://api.github.com/repositories/253601257/commits?per_page=1&page=-1>; rel="last"'
        for link in links.split(","):
            if link.endswith('rel="last"'):
                lastLink = link
        totalCommits = link.split(">;")[0].split("&page=")[-1]
        return totalCommits

def getTotalCommits(user, rep):
    answer = requests.get(COMMITS_URL.format(owner=user, repo=rep)+"?per_page=1", BASE_HEADER)
    if answer.status_code != 200:
        return -1
    return parseHeaders(answer.headers)

def ListToFile(lista, outputFile):
    outputFile.write("Top,Author,Name,Commits\n")
    for i in lista:
        outputFile.write(str(i) + "\n")

def SecretsToFile(secrets, outputFile):
    outputFile.write("Repository,SearchKey,File,Line,Value\n")
    for s in secrets:
        outputFile.write(str(s) + "\n")
    

def findSecrets(user):
    answer = requests.get(SECRETS_URL.format(username=user), BASE_HEADER)
    jsonValue = json.loads(answer.text)
    listJson = jsonValue["items"]
    secretsList = []
    for m in listJson:
        listOfTuples = getInfoFromCode(m['html_url'])
        for t in listOfTuples:
            secretsList.append(m["repository"]["name"] + "," + "Token" + "," + m["path"] + "," + t[0] + "," + t[1])
    #print(secretsList)
    return secretsList

def parseLine(td):
    line = ""
    for x in td:
        if str(type(x)) == "<class 'bs4.element.Tag'>":
            line += x.get_text()
        else:
            line += str(x)
    return line


def getValueFromTd(td):
    line = parseLine(td)
    if "token" in line.lower():
        return line
    return None

def getInfoFromCode(linkUrl):
    page = requests.get(linkUrl)
    soup = BeautifulSoup(page.text, 'html.parser')
    lineList = soup.find_all('tr')
    okLines = []
    for line in lineList:
        numInfo, genInfo = line.find_all('td')
        value = getValueFromTd(genInfo)
        if value is not None:
            okLines.append( (numInfo['data-line-number'], value) )

    return okLines


def main(inputFile, outputFile, secretsFile):

    #lee todas las líneas
    lines = inputFile.readlines()

    #Lista con los repos y su número de commits
    repoList = []
    

    #while puedas leer
    for line in lines[1:]:

        #remove end \n on each line
        line = line.strip()
        
        #Create class
        repo = CommitedRepo(line.split(",")[:3])

        #coge el número de commits
        repo.setCommits( getTotalCommits(repo.author, repo.name) )

        #mete en una lista l.append(repo)
        repoList.append(repo)

    #escribe la lista al archivo de salida
    ListToFile(repoList, outputFile)

    if secretsFile is not None:
        secrets = findSecrets("afdezfraga")
        SecretsToFile(secrets, secretsFile)


if __name__ == "__main__":

    try:
        secretFile = open(sys.argv[3], "x")
    except:
        secretsFile = None


    with open(sys.argv[1]) as inputFile :
        with open(sys.argv[2], "x") as outputFile:
            main(inputFile, outputFile, secretsFile)

    if secretsFile is not None:
        secretFile.close()


    ### DBG
    '''
    ans1 = requests.get("https://api.github.com/search/repositories?q=user:afdezfraga", headers=BASE_HEADER)

    ans2 = requests.get("https://api.github.com/search/repositories?q=user:afdezfraga", headers=TMP_AUTH_HEADER)

    ans3 = requests.get("https://api.github.com/search/code?q=token+user:afdezfraga", headers=BASE_HEADER)

    print(json.dumps(json.loads(ans1.text), indent=4))

    for i in range(10):
        print("----------------------")

    print(json.dumps(json.loads(ans2.text), indent=4))
    '''
    #NOTESE la diferencia en total_count

    #la primera petición me devuelve 
    #{
    #    "total_count": 3,
    #   "incomplete_results": false,
    #    "items": [
    #       ...
    #

    #la segunda petición me devuelve 
    #{
    #    "total_count": 7,
    #   "incomplete_results": false,
    #    "items": [
    #       ...
    #