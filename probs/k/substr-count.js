/* 

Filename: substr-count.js

Programmer: Eric Hepperle
Assignment: Wordplay: How many words contain the substring "TYPE”?
Date Completed: 10/13/22

Demonstrates: Substrings

K

*/

const fs = require('fs')

let matches = []
let reg = /UU/
let filename = '../sowpods.txt'
let filtered = []
let needle = 'TYPE'

// Read file into an array of words

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

console.log('\nSOLUTION:\n')
console.log(`\nneedle: ${needle}`)

filtered = words.filter(
  word =>
    word.includes(needle) || word.indexOf(needle) > -1
)

console.log(filtered)
console.log(`\nTotal matches: ${filtered.length}`)

/* NOTE: I ran into issue because I mistakenly thought I needed to split
    each word into an array string to use the includes() method.
    Removing the ".split('')" call caused all to work perfectly
*/