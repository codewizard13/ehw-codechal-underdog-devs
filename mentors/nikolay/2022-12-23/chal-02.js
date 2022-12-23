/*
MENTOR Nikolay: CHALLENGE 2: 2022-12-23

Write a function that takes a string word as the first argument,
a string letter as the second argument, and returns a count of
how many times letter occurs in word.


Eric Hepperle
2022-12-23

V1

*/

const fs = require('fs')

/*

EDGE CASES:
- ""/empty
- NO A's
- wrong cases
- type of variable (string, int, array)

// FUNCTION: countA(word)
INT aCount = 0

LOOP over each char in word

  SET temp var char

  IF current char is A (account for casing)
    INCREMENT aCount
  END

END

RETURN aCount

*/



/**
 * Main: The main function; controller.
 */
function main() {

  let letter = "I"

  const testValues = [
    "", "J4TIU4I5U4I5U4IU", "0000", "abc", "zzzzzzzazzz", 5
  ]

  testValues.forEach(word => console.log(`There were`, countA(word, letter), `A's in ${word}`))


  /// DO STUFF...
  // console.log(`There were`, countA(word), `A's in ${word}`)


}
main()


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
