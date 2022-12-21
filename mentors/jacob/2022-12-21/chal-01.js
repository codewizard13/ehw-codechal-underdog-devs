/*
MENTOR Jacob: CHALLENGE: 2022-12-21

???

Eric Hepperle
Started: 2022-12-21
Finished: --
V2

*/

/* ALGORITHM 

// FUNCTION: main()


*/


const fs = require('fs')

const vowels = new Set("AEIOU".split(''))
console.log({ vowels })

/**
 * Main: The main function; controller.
 */
function main() {
  
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleWordsFile)


  // OUTPUT RESULTS
  console.log(`\nMATCHED WORDS:`)
  console.table(matchedWords)
  console.log(`\nOut of`, scrabbleWords.length, `scrabbleWords`, matchedWords.length, `contain only U for vowels.`)
}
main()



/// FUNCTIONS ///

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