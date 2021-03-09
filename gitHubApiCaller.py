#!/usr/bin/python3

import requests
import json
import sys

BASE_URL = "https://api.github.com"
COMMITS_URL = BASE_URL + "/repos/{owner}/{repo}/commits"
BASE_HEADER = {"Accept": "application/vnd.github.v3+json"}


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
    



def main(inputFile, outputFile):

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


if __name__ == "__main__":
    
    with open(sys.argv[1]) as inputFile :
        with open(sys.argv[2], "x") as outputFile:
            #main(inputFile, outputFile)
            pass


    ### DBG

    TMP_AUTH_HEADER = BASE_HEADER.copy()
    TMP_AUTH_HEADER["Authorization"] = "token " + "Token falso por si la lio y lo subo a git"

    ans1 = requests.get("https://api.github.com/search/repositories?q=user:afdezfraga", headers=BASE_HEADER)

    ans2 = requests.get("https://api.github.com/search/repositories?q=user:afdezfraga", headers=TMP_AUTH_HEADER)

    print(json.dumps(json.loads(ans1.text), indent=4))

    for i in range(10):
        print("----------------------")

    print(json.dumps(json.loads(ans2.text), indent=4))

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
