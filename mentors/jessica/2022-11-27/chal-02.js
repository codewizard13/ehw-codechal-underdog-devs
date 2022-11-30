/*
 Jessica McKellar challenges - 2022-11-27

 This version only concerns refactoring this for lower cost:

 Find the words in matches with longest char length
*/

const fs = require('fs')

let matches = []
let reg = /GHTLY/
let filename = '../docs/sowpods.txt'
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


/*
What is the longest word that doesn't have an A, E, I, or O?

*/

for (let i=0; i < words.length; i++ ) {

  let thisWord = words[i]

  if (
    thisWord.indexOf('A') === -1
    && thisWord.indexOf('E') === -1
    && thisWord.indexOf('I') === -1
    && thisWord.indexOf('O') === -1
  ){
    
    matches.push(thisWord)

  }

}

// Find the words in matches with longest char length

longestLength = 0

matches.forEach((word, i) => {
  
  if (i === 0) {
    longestLength = word.length
  } else {
    if (longestLength < word.length) {
      longestLength = word.length
    }
  }



});

console.log(`Longest is ${longestLength} chars`)

// idiomatic

let longestWords = []

matches.forEach(word => {
  if (word.length === longestLength) {
    longestWords.push(word)
  }
})

console.log(`Words with longest length: `, longestWords)





// stress testing

// filtering down

// handling ties



// Alternative implentation

