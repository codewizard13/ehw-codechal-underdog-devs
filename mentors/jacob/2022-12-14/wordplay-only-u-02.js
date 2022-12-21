/*
MENTOR Jacob: HOMEWORK: 2022-12-14
What are all of the words that have only “U”s for vowels?
THIS VERSION uses a SET to hold vowels

Eric Hepperle
Started: 2022-12-21
Finished: 2022-12-21
V2

*/

/* ALGORITHM 

// FUNCTION: main()
SLURP scrabble file into array scrabbleWords
DEFINE empty matchedWords array
DEFINE vowels set for O(1) lookup

LOOP through all words

  SET temp var currentWord

  IF currentWord has only U as its only vowels

    ADD currentWord to matchedWords

  END

END words loop

RETURN matchedWords



// FUNCTION: hasOnU(word) return: bool
DEFINE foundU as false

LOOP through each char in word

  SET temp var currentChar

  IF currentChar is a key in vowels set
  AND not a U

    RETURN false // there are other vowels besides U in this word

  END

END word char loop

## AT this point, we've not encountered any illegal vowels so
IF we foundU (accounts for words with no vowels)

  RETURN true

END

IF NO VOWELS were found then,
RETURN false

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
  const matchedWords = scrabbleWords.filter(word => hasOnlyU(word.toUpperCase()))
  console.log(`\nMATCHED WORDS:`)
  console.table(matchedWords)
  console.log(`\nOut of`, scrabbleWords.length, `scrabbleWords`, matchedWords.length, `contain only U for vowels.`)
}
main()


function hasOnlyU(word) {

  let foundU = false

  // Loop over each char in word
  for (let i = 0; i < word.length; i++) {

    let currentChar = word[i]

    // EARLY return if other vowel found
    if (vowels.has(currentChar) && currentChar !== "U") { return false }

    if (vowels.has(currentChar) && currentChar === "U") { foundU = true }

  } // END word chars loop

  if (foundU) { return true }

  return false
  
}


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