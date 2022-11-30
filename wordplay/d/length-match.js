/*
Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words that contain the word CAT and are exactly 5 letters long?
Date Completed: 10/12/22

Demonstrates: Filter array containing pattern A, but NOT B

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
    word.match(/CAT/)
    && word.length == 5
)

console.log(filtered)
console.log(`Total matches: ${filtered.length}`)