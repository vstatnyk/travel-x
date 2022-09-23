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
    ssn = f'{str(randint(0,999)).zfill(3)}-{str(randint(0,99)).zfill(2)}-{str(randint(0,9999)).zfill(4)}'
    passportNumber = f'{str(randint(0,999999999)).zfill(9)}'
    passportExp = f'{str(randint(1,12)).zfill(2)}/{str(randint(1,29)).zfill(2)}/{str(randint(2000,2030)).zfill(4)}'
    dob = f'{str(randint(1,12)).zfill(2)}/{str(randint(1,29)).zfill(2)}/{str(randint(1900,2000)).zfill(4)}'
    dlNumber = f'{str(randint(0,999999999)).zfill(9)}'

    while ssn in people:
        ssn = f'{str(randint(0,999)).zfill(3)}-{str(randint(0,99)).zfill(2)}-{str(randint(0,9999).zfill(4))}'
        while passportNumber in people['ssn']:
            passportNumber = f'{str(randint(0,999999999)).zfill(9)}'
        while dlNumber in people['dlNumber']:
            dlNumber = f'{str(randint(0,999999999)).zfill(9)}'
    people[ssn] = {"DMV":{"name":name,"dlNumber":dlNumber,"dob":dob,},
    "SS":{"name":name,"dob":dob},
    "DOS":{"name":name,"dob":dob,"passportNumber":passportNumber,"passportExp":passportExp}}

with open("rawData.json", "w") as outfile:
    json.dump(people, outfile, indent =2)


print(people)


