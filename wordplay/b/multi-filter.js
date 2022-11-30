/*
Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words containing an X and a Y and a Z?
Date Completed: 10/12/22

*/

const fs = require('fs')

let matches = []
let reg = /UU/
let filename = '../sowpods.txt'

// Read file into an array of words

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

const filtered = words.filter(
  word =>
    word.match(/X/) &&
    word.match(/Y/) &&
    word.match(/Z/)
)

console.log(filtered)
console.log(`Total matches: ${filtered.length}`)

// Filter array with multiple conditions:
// https://sabe.io/blog/javascript-filter-array-multiple-conditions