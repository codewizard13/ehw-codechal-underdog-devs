/* 

Filename: ordered-vowels.js

Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words that have all 5 vowels, in any order?
Date Completed: 10/12/22

Demonstrates: Vowels in order

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

console.log('\nSOLUTION:\n')

function has5Vowels(word) {
  var filtered = words.filter(
    word =>
      word.match(/^(?=.*A)(?=.*E)(?=.*I)(?=.*O)(?=.*U).*/)
  )

  console.log(filtered)
  console.log(`Total matches: ${filtered.length}`)
}



function vowelsAlphabetical(word) {

  let word_arr = word.split('')
  let n = word_arr.length

  // Variable for starting character. ASCII 64
  //  is less than any vowel, so start there
  let c = String.fromCharCode(64)

  word_arr.forEach((char, i) => {
    console.log(`CHAR ${i}: ${char}`)
  })

  console.log(filtered)
  console.log(`Total matches: ${filtered.length}`)
}


filtered = words.filter(
  // word.match(/.*A.*E.*I.*O.*U.*/) -- DOESN'T WORK

  // word => vowelsAlphabetical(word)
  word => has5Vowels(word)
)




/* CODE HINT:
https://www.geeksforgeeks.org/check-whether-the-vowels-in-a-string-are-in-alphabetical-order-or-not/
*/