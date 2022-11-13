// Assessment with Jessica McKellar @ UnderdogDevs for Cohort 4
// 2022-11-11
// Eric Hepperle


// let val = ''

// let arr = ['apples', 'oranges', 'pears']

// val = arr

// start with q end with z less than or equal to 6 letters long

const fs = require('fs')

let matches = []
let reg = /UU/
let filename = 'sowpods.txt'

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

let results = []

// // loop through all words
// for (let i = 0; i < words.length; i++) {

//   // words that start with Q
//   if (words[i].match(/^q(.*)z$/i) && words[i].length <= 6) { results.push(words[i]) }

// }


// Create and print an array containing all of the words that have a U but no other vowel.
for (i = 0; i < words.length; i++) {

  let word = words[i]

  if (
    word.indexOf('A') === -1
    && word.indexOf('E') === -1
    && word.indexOf('I') === -1
    && word.indexOf('O') === -1
    && word.indexOf('U') !== -1

  ) {
    results.push(word)
  }

}


console.log(results)







