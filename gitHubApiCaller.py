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

'''
def printJsonGetResponse(url, headers):

    answer = requests.get(url, headers=headers)

    if answer.status_code != 200:
        print("Error !!!")

    jsonAnswer = json.loads(answer.text)
    #print(json.dumps(jsonAnswer, indent=4))
    print(json.dumps(jsonAnswer[0], indent=4))#DBG
    print(len(jsonAnswer))#DBG'''

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
            main(inputFile, outputFile)