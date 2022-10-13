/* 

Filename: shortest-word.js

Programmer: Eric Hepperle
Assignment: Wordplay: What is the shortest word that contains all 5 vowels?
Date Completed: 10/13/22

Demonstrates: Shortest word

M

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

/**
 * 
 * Loop through word list and return strings containing
 *  all 5 vowels in any order
 */
function has5Vowels(arr) {
  return filtered = arr.filter(
    word =>
      word.match(/^(?=.*A)(?=.*E)(?=.*I)(?=.*O)(?=.*U).*/)
  )
}

const sampleArr = ['BRANCH', 'DIPLOMATIC', 'HAIRCUT', 'MOSQUITO', 'POWER', 'QUADRIPOLE', 'SUBCATEGORIZING', 'TELEPHONE', 'VITUPERATION']

console.log(has5Vowels(words))

let shortest = has5Vowels(words).reduce(
  (a, b) => a.length <= b.length ? a : b
)

console.log(`The shortest word containing all 5 vowels is: ${shortest}`)
// console.log(`\nTotal matches: ${filtered.length}`)

/* NOTE: Approach was to use array.reduce(). Looks like this
    might be a bubble sort */