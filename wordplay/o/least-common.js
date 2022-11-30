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

/**
 * Builds dictionary of key-value pairs as object.
 * 
 * Format: { A: 23, Z: 434, P: 77 }
 * 
 * @param dict kvp 
 * @param string str 
 */
function countChars(kvp, str) {

  if (kvp[str] === undefined) { kvp[str] = 1 }
  else { kvp[str]++ }

}

// Join words array into string, then split into chars
//  and then count occurences of each char
words.join('').split('').forEach(char => countChars(dict, char))


// Convert object to array
let entries = Object.entries(dict);

// Two sort options: alphabetically by key, and low-high by value
let sortedByKeyAlpha = entries.sort();
let sortedByValsLowToHigh = entries.sort((a, b) => a[1] - b[1]);

// Create array of key-value pairs for Q, X, and Z
let interested = [
  ["Q", dict.Q], ["X", dict.X], ["Z", dict.Z]
]

let least_common = interested.sort((a, b) => a[1] - b[1])

console.log(`RESULTS:`)
console.log(`\nFrequency Table:\n`)
console.table(interested)

console.log(`The least common of Q, X, and Z is: ${least_common[0][0]} with ${least_common[0][1]} occurences.`)