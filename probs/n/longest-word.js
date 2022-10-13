/* 

Filename: longest-word.js

Programmer: Eric Hepperle
Assignment: Wordplay: What is the longest word that contains no vowels?
Date Completed: 10/13/22

Demonstrates: Shortest word

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

// /**
//  * 
//  * Loop through word list and return strings containing
//  *  all 5 vowels in any order
//  */
// function has5Vowels(arr) {
//   return filtered = arr.filter(
//     word =>
//       // word.match(/^(?=.*A)(?=.*E)(?=.*I)(?=.*O)(?=.*U).*/)

//   )
// }

// Created sample array for testing will smaller word set
const sampleArr = [
  'BRANCH', 'DIPLOMATIC', 'HAIRCUT', 'SPY', 'CYST', 'THY',
  'HYMN', 'GYMS', 'TRYST', 'MOSQUITO', 'POWER'
]

let wordsWithoutVowels = sampleArr.filter(
  word => word.match(/\b([^AEIOU\s]+)\b/g)
)

console.log(wordsWithoutVowels)

// let shortest = has5Vowels(words).reduce(
//   (a, b) => a.length <= b.length ? a : b
// )

// console.log(`The shortest word containing all 5 vowels is: ${shortest}`)

/* NOTE: (?i)[^aeiou]+ regex works in PCRE (Perl/PHP), but not in JavaScript.
    This is the regex to find words without vowels: /\b([^AEIOU\s]+)\b/g
*/

// Result with sample array: 'SPY', 'CYST', 'THY', 'HYMN', 'GYMS', 'TRYST'

