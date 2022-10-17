/* 

Filename: consecutive-letters_v3.js

Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the letters that never appear consecutively in an English word?
Date Completed: 10/17/22

Details: For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that
“A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

Demonstrates: Consecutive letters

Q

*/

const fs = require('fs')
const { join } = require('path')

let matches = []
let reg = /GHTLY/
let filename = '../sowpods.txt'
let filtered = []
let needle = 'TYPE'
let wordlist = ''

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Read file into an array of words

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

const sampleArr = [
  "BORROW", "BRANCH", "CYST", "DAMMIT",
  "DEIFIED", "DIPLOMATIC", "GEESE", "HAIRCUT",
  "HYMN", "LEVEL", "MOSQUITO", "MURDRUM",
  "NON", "POP", "POWER", "GOD", "THY"
]


/* ALGORITHM:

Join wordlist into string with spaces

FOREACH WORD

  FOREACH letter in alphabet

    If letter is in current word twice

      IF consecutive letter instance for letter already has a value
        increment value
      Else
        add value and initialize as 1

*/



/* FORMAT:

[
  { letter: A; consecutiveLetterInstances: 1 }
  { letter: B; consecutiveLetterInstances: 27 }
  { letter: C; consecutiveLetterInstances: 0 }
]

*/

wordlist = sampleArr

let joinedWordList = wordlist.join('')

console.log(joinedWordList)

let pattern = /([A-Z])\1+/g

doubleLettersFound = joinedWordList.match(pattern)

let singleDoubleLettersFound = doubleLettersFound.filter(el => el.split('')[0]
  // console.log(el)
)

console.log(singleDoubleLettersFound)




var pcNumbers = [1, 2, 3, 4, 5];
var userNumbers = [1, 2, 7, 8, 9];
var commonNumbers = pcNumbers.filter(i => userNumbers.includes(i));
console.log(commonNumbers);

// let singleDoubleLettersFound = 