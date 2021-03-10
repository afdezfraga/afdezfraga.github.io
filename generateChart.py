#!/usr/bin/env python3

from jinja2 import Environment, FileSystemLoader

def readFromGitHubCSV(filename):
	rows = []
	with open(filename) as inputFile:
		lines = inputFile.readlines()
		for line in lines[1:]:
			#remove end \n on each line
			line = line.strip()
			#read info
			[top, author, name, commits] = line.split(",")[:4]
			rows.append({'top': int(top), 'name': name, 'author': author, 'commits': commits})
		return rows

rows = readFromGitHubCSV('githubWithCommits.csv')		
		
file_loader = FileSystemLoader('templates')
env = Environment(loader=file_loader)

template = env.get_template('showchart.txt')

output = template.render(rows=rows)
print(output)

f = open("javascript.js", "w")
f.write(output)
f.close()