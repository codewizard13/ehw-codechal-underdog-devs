/* 

Filename: palindrome.js

Programmer: Eric Hepperle
Assignment: Wordplay: What is the longest palindrome?
Date Completed: 10/13/22

Demonstrates: Palindromes, length comparison

P

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

const testStr = "Doc, note, I dissent. A fast never prevents a fatness. I diet on cod."

/**
 * Return true if string is palindrome
 * @param string str 
 * @returns boolean
 */
function isPalindrome(str) {

  // Remove all non-alphanumeric chars and lowercase the string
  let reg = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  let stripped = str.toLowerCase().replace(reg, '')

  let revStr = stripped.split('').reverse().join('')

  return revStr === stripped

}

let palindromes = sampleArr.filter(word => isPalindrome(word))

console.log(`\nPalindromes Found (alphabetical order):\n`)

let dict = {}

palindromes.forEach(function (pal, i) {
  dict[palindromes[i]] = pal.length
})
console.log('dict:')
console.table(Object.entries(dict))

// Find the length of the the longest palindrome
let longest_length = palindromes.sort(
  (a, b) => b.length - a.length
)[0].length

console.log(`The longest palindrome length is: ${longest_length}`)

// Find the longest palindrome(s)
let longest = palindromes.filter(
  pal => pal.length == longest_length
)

if (longest.length > 1) {
  console.log(`The longest words with NO vowels are:`)
  console.log(longest)
} else {
  console.log(`The longest palindrome is: ${longest[0]}`)
}