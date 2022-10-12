/* 

Filename: junk-vowels.js

Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words that have all 5 vowels, in any order?
Date Completed: 10/12/22

Working out the vowel processing code

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

  console.log(filtered)
  console.log(`Total matches: ${filtered.length}\n`)

}

let hasAllVowels = has5Vowels(words)
console.log(hasAllVowels)

console.log(`has5Vowels(words) is array: ${Array.isArray(has5Vowels(words))}`)
console.log(`hasAllVowels is array: ${Array.isArray(hasAllVowels)}`)

/**
 * 
 * Loop through word list and return array of strings
 *  with all 5 vowels apearing in alphabetical order.
 */
function vowelsAlphabetical(arr) {

  let matches = []

  arr.forEach((word, i) => {
    console.log(`word ${i}: ${word}`)

    let len = word.length
    let c = String.fromCharCode(64)

    word.split('').forEach(char => {

      // Is the character a vowel?
      if (
        char == 'A'
        || char == 'E'
        || char == 'I'
        || char == 'O'
        || char == 'U'
      ) {
        // console.log(`${char}: VOWEL`)

        if (char < c) {
          return false
        }

      } else {
        // console.log(char)
        c = char

      }
      matches.push(word)

    })



  })

  return matches


}


let vowels_in_alpha = vowelsAlphabetical(hasAllVowels)
console.log(hasAllVowels.length)


console.log(`vowels_in_alpha`)
console.log(vowels_in_alpha)
console.log(`Total matches: ${vowels_in_alpha.length}`)



/* CODE HINT:
https://www.geeksforgeeks.org/check-whether-the-vowels-in-a-string-are-in-alphabetical-order-or-not/
*/