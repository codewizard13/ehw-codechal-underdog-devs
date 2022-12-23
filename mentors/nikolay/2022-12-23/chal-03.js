/*
MENTOR Nikolay: CHALLENGE 3: 2022-12-23

Write a function that takes a string phrase and returns a dictionary
contains counts of how many times every character appears in phrase.


Eric Hepperle
2022-12-23

V1

*/

const fs = require('fs')

/*

EDGE CASES:
- ""/empty
- count white space
- type of variable (string, int, array)

- Empty dictionary

- TEST PHRASE AABC

{
  a: 2, b: 1, c: 1
}




*/


/**
 * Main: The main function; controller.
 */
function main() {

  let letter = "I"

  const testValues = [
    "", "J4TIU4I5U4I5U4IU", "0000", "abc", "zzzzzzzazzz", 5
  ]

  let testVal = "\t\tWrite a function that takes a string phrase and returns a dictionary  contains counts of how many times every character appears in phrase.\n\n"
  console.table(countPhraseChars(testVal))


}
main()



function countPhraseChars(phrase) {

  const charCounter = {}

  if (typeof phrase !== "string") {
    // console.error(`Input must be a string`)
    throw `Input must be a string`
  }

  for (let i=0; i < phrase.length; i++) {

    if (phrase[i] in charCounter) {
      charCounter[phrase[i]]++
    } else {
      charCounter[phrase[i]] = 1
    }

  }

  return charCounter
}







function countA(word, letter) {
  let desiredLetterCount = 0

  if (typeof word !== "string") {
    // console.error(`Input must be a string`)
    throw `Input must be a string`
  }

  for( let i=0; i < word.length; i++) {

    if (word[i].toUpperCase() === letter.toUpperCase()) {
      desiredLetterCount++
    }

  }

  return desiredLetterCount
}



/// FUNCTIONS

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
