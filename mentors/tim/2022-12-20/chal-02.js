/*
MENTOR Tim: CHALLENGE 2022-12-27

Challenge:

What is the longest word that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.

Programmer: Eric Hepperle
Started:    2022-12-27

TAKEAWAY: Start to build out even more reusable modular code

V1

*/

const fs = require('fs')

/**
 * Return lines array from file
 * 
 * @args: {string} filename
 * @return: {array} lines
 */
function filenameToLines(filename) {

  const buffer = fs.readFileSync(filename)
  const fileStr = buffer.toString()
  const lines = fileStr.split('\n') // make array

  return lines

}

/* ALGORITHM IN OWN FILE */

const illegalCharStr = "AEIOSHRTN"
const illegalArr = (illegalCharStr).split('')
const illegalChars = new Set(illegalArr)

// const testWords = [
//   "AA", "BBB", "BBBE", "AEIOSHRTN", "DZY", "nnnn", "", "UUUUUUUUUUUUUUA", ..."AEIOSHRTN".split('')
// ]

const testWords = [
  "BUMFLUFF", "BUMFLUF", "UUUUZZZZ"
]

/**
 * Main: The main function; controller.
 */
function main() {

  const legalWords = []
  let longestWords = []

  // SLURP FILE DATA INTO ARRAY
  const scrabbleFile = '../../../docs/sowpods.txt'
  // const scrabbleWords = filenameToLines(scrabbleFile)
  let scrabbleWords = testWords

  console.log({testWords})
  console.log({illegalChars})

  // LOOP over all words
  for (let i=0; i < scrabbleWords.length; i++) {

    let currentWord = scrabbleWords[i]

    if (!containsIllegalChars(currentWord.toUpperCase())) {
      legalWords.push(currentWord)
/*
    if currentWord length is longer than previous longest word length
      set array value equal to current word
    if  longestWords array length is zero
    OR currentWord length equal to previous longest length
      ADD current word to longestWords array
    END 
*/
      if (longestWords.length === 0 || currentWord.length > longestWords[0].length) {
        longestWords = [currentWord]
      } else if (currentWord.length === longestWords[0].length) {
        longestWords.push(currentWord)
        console.error(`Errored`)
      }

    }

  }

  // REPORT RESULTS
  console.log('Numbers of legal words:', legalWords.length)
  console.log({longestWords})

}
main()


function containsIllegalChars(string) {

  for (let i=0; i < string.length; i++) {

    let currentChar = string[i]

    if (illegalChars.has(currentChar)) {
      return true
    }

  }

  return false
}


function longestLegalWords(string) {



}