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

/* My first approach is can I use a DYNAMIC REGEX? */

// let dynReg = new RegExp(`${char}+`)

// // Loop through all the letters in alphabetical order
// const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// abc.split('').forEach((char, i) => {
//   console.log(`char ${i}: ${char}`)
// });

// let result = sampleArr.filter(word => {

//   word.match(dynReg)
// })

// console.log(result)




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




const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


// // Loop through each word
// sampleArr.forEach(word => {

//   abc.split('').forEach((abc, i) => {

//     // console.log(`abc ${i}: ${abc}`)

//     // let dynReg = new RegExp(`${abc}+`)

//     if (word.match(/.*[A-Z]+.*/)) {
//       matches.push(word)
//       console.log(`No consecutive letters found in ${word}`)
//     }
//   });
// })

// reg = /^(?=.*[A-Z]+).*/g
// reg = /BRA/g
reg = /([A-Z])\1/

// /^ (?=.* Q)(?!.* U).* /

matches = sampleArr.filter(word => word.match(reg))
console.log(`\nMATCHES:\n`)
console.log(matches)

console.log(`\nTOTAL WORDS IN SOURCE ARRAY: ${sampleArr.length}`)
console.log(`\nTOTAL WORDS IN MATCHES ARRAY: ${matches.length}`)










// const testStr = "Doc, note, I dissent. A fast never prevents a fatness. I diet on cod."

// /**
//  * Return true if string is palindrome
//  * @param string str
//  * @returns boolean
//  */
// function isPalindrome(str) {

//   // Remove all non-alphanumeric chars and lowercase the string
//   let reg = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
//   let stripped = str.toLowerCase().replace(reg, '')

//   let revStr = stripped.split('').reverse().join('')

//   return revStr === stripped

// }

// let palindromes = words.filter(word => isPalindrome(word))
// // palindromes.push('Malayalam') --> use to test handling of multiple matches

// console.log(`\nPalindromes Found (alphabetical order):\n`)

// let dict = {}

// // Build dictionary with lengths
// palindromes.forEach(function (pal, i) {
//   dict[palindromes[i]] = pal.length
// })
// console.log('dict:')
// console.table(Object.entries(dict))

// // Find the length of the the longest palindrome
// let longest_length = palindromes.sort(
//   (a, b) => b.length - a.length
// )[0].length

// console.log(`The longest palindrome length is: ${longest_length}`)

// // Find the longest palindrome(s)
// let longest = palindromes.filter(
//   pal => pal.length == longest_length
// )

// if (longest.length > 1) {
//   console.log(`The longest palindromes are:`)
//   console.log(longest)
// } else {
//   console.log(`The longest palindrome is: ${longest[0]}`)
// }