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

let hasAllVowels = has5Vowels(words)

/**
 * 
 * Loop through word list and return array of strings
 *  with all 5 vowels apearing in alphabetical order.
 */
function vowelsAlphaArr(arr) {

  let matches = [];

  // foreach word in array
  arr.forEach((word, i) => {

    // Grab all vowels from word
    this_vowels = word.match(/[AEIOU]/g)

    // console.log(`this_vowels = ${this_vowels}`)

    // Foreach vowel in vowel string 
    for (j = 0; j < this_vowels.length; j++) {
      // console.log(`j: ${j} | this_vowels[j]: ${this_vowels[j]}`)

      if (this_vowels[0] != 'A') { return }
      if (this_vowels[1] != 'E') { return }
      if (this_vowels[2] != 'I') { return }
      if (this_vowels[3] != 'O') { return }
      if (this_vowels[4] != 'U') { return }
    }

    matches.push(word);

  }); // end foreach word

  return matches
}

let vowels_in_alpha = vowelsAlphaArr(hasAllVowels)
console.log(`\nRESULTS:\n`)
console.log(vowelsAlphaArr(hasAllVowels))
console.log(`\nTotal matches: ${vowels_in_alpha.length}`)

/* CODE HINT:
https://www.geeksforgeeks.org/check-whether-the-vowels-in-a-string-are-in-alphabetical-order-or-not/
*/