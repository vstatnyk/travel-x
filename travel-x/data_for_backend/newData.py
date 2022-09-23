import json
from random import randint
import json

people = {}

with open ("firstNames.txt", 'r') as fName:
    global firstN
    firstN = fName.readlines()
with open ("lastNames.txt", 'r') as lName:
    global lastN
    lastN = lName.readlines()

for i in range(0,500):
    name = f'{(firstN[randint(0,19947)])[:-1]} {lastN[randint(0,88798)][:-1]}'
    ssn = f'{randint(0,999)}-{randint(0,99)}-{randint(0,9999)}'
    passportNumber = f'{randint(0,999999999)}'
    passportExp = f'{randint(1,12)}/{randint(1,29)}/{randint(2000,2030)}'
    dob = f'{randint(1,12)}/{randint(1,29)}/{randint(1900,2000)}'
    dlNumber = f'{randint(0,999999999)}'

    while ssn in people:
        ssn = f'{randint(0,999)}-{randint(0,99)}-{randint(0,9999)}'
        while passportNumber in people['ssn']:
            passportNumber = f'{randint(0,999999999)}'
        while dlNumber in people['dlNumber']:
            dlNumber = f'{randint(0,999999999)}'
    people[ssn] = {"DMV":{"name":name,"dlNumber":dlNumber,"dob":dob,},
    "SS":{"name":name,"dob":dob},
    "DOS":{"name":name,"dob":dob,"passportNumber":passportNumber,"passportExp":passportExp}}

with open("rawData.json", "w") as outfile:
    json.dump(people, outfile, indent =2)


print(people)


