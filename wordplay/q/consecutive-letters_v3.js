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

// Sample array for quick testing
const sampleArr = [
  "BORROW", "BRANCH", "CYST", "DEIFIED", "DIPLOMATIC",
  "GEESE", "HAIRCUT", "HYMN", "LEVEL", "MOSQUITO",
  "MURDRUM", "NON", "POP", "POWER", "GOD", "THY"
];

// Add more words to sampleArray on the fly
sampleArr.push("COCCOON", "MISSISSIPPI", "NAADDAA", "HAWAII",
  "SWEETTOOTHED", "SUPERROOMMATE"
)

// assignment so we only have to change word list source in one place
wordlist = words

// Join words on space to avoid false matches where end of word and beginning
//  of next word are same letter
let joinedWordList = wordlist.join(' ')

// regex to match consecutive letter instances
let pattern = /([A-Z])\1+/g

// Use set() method to get unique values
let consecLetters = new Set(joinedWordList.match(pattern).sort())

console.log(`\nConsecutive letter pairs found in the word list:\n`)

console.log(...consecLetters)

// This may be overkill, but it ensures all letters are uppercase
joinedWordList = sampleArr.join(" ").toUpperCase();

// Slightly different version of the regex above, but for the same purpose.
//  This regex was advised in a forum post so I don't want mess with it
//  because it works
const paired = new Set(joinedWordList.match(/([A-Z])(?=\1)/g));
const nonConsecLetters = [...alphabet].filter(ch => !paired.has(ch));

console.log(`\nALL the letters that are NOT FOUND CONSECUTIVELY:\n`)
console.log(...nonConsecLetters);