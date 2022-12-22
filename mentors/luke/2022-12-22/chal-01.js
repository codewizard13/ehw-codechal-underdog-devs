/* 
MENTOR LUKE: HOMEWORK: 2022-12-15
What are all of the words that have only “E”s for vowels and are at least 15 letters long?
REFACTOR hasOnlyOneVowel() to take needle arg and return a boolean

Eric Hepperle
2022-12-15

V2

*/


const fs = require('fs')


/*
ALGORITHM:



*/


const VOWELS = new Set(["A", "E", "I", "O", "U"])

/**
 * Main: The main function; controller.
 */
function main() {

  // DEFINE return array
  const matchedWords = []

  // SLURP file into array
  let scrabblePath = '../../../docs/sowpods.txt'
  let scrabbleWords = filenameToLines(scrabblePath)

  // DO STUFF...

  // OUTPUT RESULTS
  console.log(`\nMATCHED WORDS\n`)
  console.table(matchedWords)

}
main()



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



