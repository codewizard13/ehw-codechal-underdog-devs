/* 

Filename: consecutive-letters.js

Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the letters that never appear consecutively in an English word?
Date Completed: 10/14/22

Details: For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

Demonstrates: Consecutive letters

Q

*/

const fs = require('fs')

let matches = []
let reg = /GHTLY/
let filename = '../sowpods.txt'
let filtered = []
let needle = 'TYPE'

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Read file into an array of words

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

const sampleArr = [
  "BORROW OR ROB?", "BRANCH", "CYST", "DAMMIT, I'M MAD!",
  "DEIFIED", "DIPLOMATIC", "DO GEESE SEE GOD?", "HAIRCUT",
  "HYMN", "LEVEL", "MOSQUITO", "MURDRUM",
  "NON", "POP", "POWER", "SPY", "THY"
]


/* ALGORITHM:

Initialize results / matches array

Define alphabet / character set

    Foreach word in words array,

      Foreach char/letter in alphabet,

        if char appears consecutively

          return

      Add word to results array

    Display sorted array

*/


// reg = /^(?=.*[A-Z]+).*/g
// reg = /BRA/g
reg = /([A-Z])\1/

// /^ (?=.* Q)(?!.* U).* /

matches = words.filter(word => !word.match(reg))
console.log(`\nMATCHES:\n`)
console.log(matches)

console.log(`\nTOTAL WORDS IN SOURCE ARRAY: ${words.length}`)
console.log(`\nTOTAL WORDS IN MATCHES ARRAY: ${matches.length}`)

// let testing = matches.filter(word => word.match(/^ABA/))
let testing = []

// Sort matches alphabetically
let sorted = matches.sort()
console.log(`\nSORTED:\n`)
console.log(sorted)

let grouped = []

// Foreach letter in alphabet create object in testing array
abc.split('').forEach(ltr => {
  let obj = {}
  obj.letter = ltr

  // find all words starting with ltr
  obj.results = sorted.filter(word => word.match(RegExp(`^${ltr}`)))

  testing.push(obj)
})

console.log(`\nTESTING: ${testing.length}\n`)
console.table(testing)

console.log('END')


