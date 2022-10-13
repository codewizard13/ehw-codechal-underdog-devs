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

// /**
//  *
//  * Loop through word list and return strings containing
//  *  all 5 vowels in any order
//  */
// function has5Vowels(arr) {
//   return filtered = arr.filter(
//     word =>
//       word.match(/^(?=.*A)(?=.*E)(?=.*I)(?=.*O)(?=.*U).*/)
//   )
// }

/* */

console.log('\nSOLUTION:\n')

filtered = words.filter(
  word =>
    word.split('').includes(needle)
)

console.log(filtered)
console.log(`Total matches: ${filtered.length}`)