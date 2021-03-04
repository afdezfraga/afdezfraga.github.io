#!/usr/bin/python

import pathlib

print(pathlib.Path().absolute())

file = open("testfile.txt","w") 

file.write("Hello World\n") 
file.write("This is our new text file\n") 
file.write("and this is another line.\n") 
file.write("Why? Because we can.\n") 
 
file.close() 
print(pathlib.Path(__file__).parent.absolute())