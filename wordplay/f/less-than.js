/* 

Filename: less-than.js

Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words that have a B and an X and are less than 5 letters long?
Date Completed: 10/12/22

Demonstrates: Less than and positive lookahead

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
    word.match(/^(?=.*B)(?=.*X).*/)
    && word.length < 5
)

console.log(filtered)
console.log(`Total matches: ${filtered.length}`)