/* 

Filename: ends-with.js

Programmer: Eric Hepperle
Assignment: Wordplay: Create and print an array containing all of the words that end in "GHTLY"
Date Completed: 10/13/22

Demonstrates: Substrings

L

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

console.log('\nSOLUTION:\n')

filtered = words.filter(
  word =>
    word.match(reg)
)

console.log(filtered)
console.log(`\nTotal matches: ${filtered.length}`)