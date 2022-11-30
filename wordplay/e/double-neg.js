/*
Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words that have no E or A and are at least 15 letters long?
Date Completed: 10/12/22

Demonstrates: Greater than or equal to

*/

const fs = require('fs')

let matches = []
let reg = /UU/
let filename = '../sowpods.txt'

// Read file into an array of words

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

console.log('\nSOLUTION:\n')

const filtered = words.filter(
  word =>
    word.match(/^(?!.*E)(?!.*A).*/)
    && word.length >= 15
)

console.log(filtered)
console.log(`Total matches: ${filtered.length}`)