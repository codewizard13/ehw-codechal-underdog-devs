/* 

Filename: least-common.js

Programmer: Eric Hepperle
Assignment: Wordplay: Which of the letters Q, X, and Z is the least common?
Date Completed: 10/13/22

Demonstrates: Frequency counter, array keys, dictionary, sort, compare

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
function countChars(kvp, str) {

  if (kvp[str] === undefined) { kvp[str] = 1 }
  else { kvp[str]++ }

}


words.join('').split('').forEach(char => countChars(dict, char))

console.log(`RESULTS:`)
console.log(`sampleArr: ${sampleArr}`)
console.log(`joinedArrayEls: ${sampleArr.join('')}`)

console.log('Object.keys(dict).sort()')
console.log(Object.keys(dict).sort())

let entries = Object.entries(dict);

// let sorted = entries.sort((a, b) => a[1] - b[1]);
let sortedByKeyAlpha = entries.sort();
console.log(`sortedByKeyAlpha:`)
console.log(sortedByKeyAlpha)

let sortedByValsLowToHigh = entries.sort((a, b) => a[1] - b[1]);
console.log(`sortedByValsLowToHigh:`)
console.log(sortedByValsLowToHigh)


console.log(dict['Q'])

console.log('dict:')
console.log(dict)

let objSlice = Object.keys(dict).
  filter((key) => key = 'N')
  .reduce((cur, key) => { return Object.assign(cur, { [key]: dict[key] }) }, {});

console.log(`objSlice.Q:`)
console.log(objSlice.Q)

console.log(`dict.Q:`)
console.log(dict.Q)

// Create array of key-value pairs for Q, X, and Z
let interested = [
  ["Q", dict.Q], ["X", dict.X], ["Z", dict.Z]
]

console.log(`interested`)
console.table(interested)

let least_common = interested.sort((a, b) => a[1] - b[1])

console.log(`least_common`)
console.log(least_common[0])

console.log(`The least common of Q, X, and Z is: ${least_common[0][0]} with ${least_common[0][1]} occurences.`)