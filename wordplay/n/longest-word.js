/* 

Filename: longest-word.js

Programmer: Eric Hepperle
Assignment: Wordplay: What is the longest word that contains no vowels?
Date Completed: 10/13/22

Demonstrates: Longest word with no vowels, handle multiple matches

N

*/

const fs = require('fs')

let matches = []
let reg = /GHTLY/
let filename = '../sowpods.txt'
let filtered = []
let needle = 'TYPE'

// Read file into an array of words

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

// Sample array for testing with smaller word set
// Result with sample array: 'SPY', 'CYST', 'THY', 'HYMN', 'GYMS', 'TRYST'

const sampleArr = [
  'BRANCH', 'DIPLOMATIC', 'HAIRCUT', 'SPY', 'CYST', 'THY',
  'HYMN', 'MOSQUITO', 'POWER'
]

// Find all words without vowels
let wordsWithoutVowels = words.filter(
  word => word.match(/\b([^AEIOU\s]+)\b/g)
)

console.log(`\nWORDS WITHOUT VOWELS\n`)
console.log(wordsWithoutVowels)
console.log(`\nTotal words without vowels: ${wordsWithoutVowels.length}`)

// Find the length of the the longest word
let longest_length = wordsWithoutVowels.reduce(
  (a, b) => a.length >= b.length ? a.length : b.length
)

console.log(`The longest word length is: ${longest_length}`)

// Find the longest word(s)
let longest = wordsWithoutVowels.filter(
  word => word.length == longest_length
)

if (longest.length > 1) {
  console.log(`The longest words with NO vowels are:`)
  console.log(longest)
} else {
  console.log(`The longest word with NO vowels is: ${longest[0]}`)
}

/* NOTES:

  - (?i)[^aeiou]+ regex works in PCRE (Perl/PHP), but not in JavaScript.
    This is the regex to find words without vowels: /\b([^AEIOU\s]+)\b/g

  - This code accounts for if there are more than one word matching the
    longest length
*/


