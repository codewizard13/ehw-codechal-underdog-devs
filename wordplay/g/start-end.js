/* 

Filename: start-end.js

Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words that both start and end with a Y?
Date Completed: 10/12/22

Demonstrates: Start with and End with markers

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
    word.match(/^Y.*Y$/)
)

console.log(filtered)
console.log(`Total matches: ${filtered.length}`)