const fs = require('fs')

let matches = []
let reg = /GHTLY/
let filename = 'sowpods.txt'
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
What are all of the words that have a Q and a Y and a Z and are at least 10 letters long?
*/

// for (let i=0; i < words.length; i++ ) {

//   let thisWord = words[i]

//   if (thisWord.length >= 10
//       && thisWord.indexOf('Q') !== -1
//       && thisWord.indexOf('Y') !== -1
//       && thisWord.indexOf('Z') !== -1
//     ) {

//       matches.push(thisWord)

//   }

// }

// console.log(`The words that match are`, matches)

// 

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

