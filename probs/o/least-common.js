/* 

Filename: least-common.js

Programmer: Eric Hepperle
Assignment: Wordplay: Which of the letters Q, X, and Z is the least common?
Date Completed: 10/13/22

Demonstrates: Frequency counter, array keys, dictionary

O

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

const sampleArr = [
  'BRANCH', 'DIPLOMATIC', 'HAIRCUT',
  'SPY', 'CYST', 'THY',
  'HYMN', 'MOSQUITO', 'POWER'
]

const dict = {}

/* ALGORITHM:

  If char doesn't exist, add it and set val to 1
  Else, increment char by 1

*/

// kvp = key-value pair, another term for dictionary
function updateDict(kvp, str) {

  if (kvp[str] === undefined) { kvp[str] = 1 }
  else { kvp[str]++ }

}

console.log(`RESULTS:`)

sampleArr.join('').split('').forEach(word => updateDict(dict, word))

console.log(`sampleArr: ${sampleArr}`)
console.log(`joinedArrayEls: ${sampleArr.join('')}`)

console.log(dict)