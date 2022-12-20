/*
MENTOR Tim: CHALLENGE 2022-12-20

Challenge:

What are all of the words that can be made without the letters in “AEIOSHRTN”
(in other words, without the most common letters)? Not all of those letters
need to be used, and letters can be repeated.

Programmer: Eric Hepperle
Started:    2022-12-20

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

const testWords = [
  "AA", "BBB", "BBBE", "AEIOSHRTN", "DZY", "nnnn"
]

/**
 * Main: The main function; controller.
 */
function main() {

  const legalWords = []

  // SLURP FILE DATA INTO ARRAY
  const scrabbleFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleFile)

  console.log({testWords})
  console.log({illegalChars})

  // LOOP over all words
  for (let i=0; i < scrabbleWords.length; i++) {

    let currentWord = scrabbleWords[i]

    if (!containsIllegalChars(currentWord.toUpperCase())) {
      legalWords.push(currentWord)
    }

  }

  // REPORT RESULTS
  console.log({legalWords})

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