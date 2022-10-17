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
  "BORROW", "BRANCH", "CYST", "DEIFIED", "DIPLOMATIC",
  "GEESE", "HAIRCUT", "HYMN", "LEVEL", "MOSQUITO",
  "MURDRUM", "NON", "POP", "POWER", "GOD", "THY", "COCCOON"
];

// assignment so we only have to change word list source in one place
wordlist = sampleArr

let joinedWordList = wordlist.join('')
let pattern = /([A-Z])\1+/g // regex to match consecutive letter instances

// Join words on space to avoid false matches where end of word and beginning
//  of next word are same letter
let consecLetters = wordlist.join(' ').match(pattern).sort()

console.log(consecLetters)



const allwords = sampleArr.join(" ").toUpperCase();
const paired = new Set(allwords.match(/([A-Z])(?=\1)/g));
const result = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  .filter(ch => !paired.has(ch));

console.log(...result);