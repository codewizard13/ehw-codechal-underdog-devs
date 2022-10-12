/*
Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words containing a Q but not a U?
Date Completed: 10/12/22

Demonstrates: Filter array containing pattern A, but NOT B

*/

const fs = require('fs')

let matches = []
let reg = /UU/
let filename = '../sowpods.txt'

// Read file into an array of words

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

console.log('\nSOLUTION WITH &&:\n')

const filtered = words.filter(
  word =>
    word.match(/Q/) &&
    !word.match(/U/)
)

console.log(filtered)
console.log(`Total matches: ${filtered.length}`)


/* Pure regex solution:
    Uses positive lookahead to find all words with Q, then
    negative lookahead to filter all the words with U
*/

console.log('\nSOLUTION WITH pure regex:\n')

const filtered_regex = words.filter(
  word =>
    word.match(/^(?=.*Q)(?!.*U).*/)
)

console.log(filtered_regex)
console.log(`Total matches: ${filtered_regex.length}`)

/* Sample q words without u
qawwal
sheqel
faqirs
tariq
cinqs
coq
seq
quindar
tranqs
qwertys
sheqalim
qi
qigong
*/