/*
MENTOR Jacob: HOMEWORK: 2022-12-14
What are all of the words that have only “U”s for vowels?
THIS VERSION uses a SET to hold vowels

Eric Hepperle
Started: 2022-12-21
Finished: 2022-12-21

V3

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
const process = require('process');

const ALL_VOWELS = new Set("AEIOU".split(''))
console.log({ ALL_VOWELS })

/**
 * Main: The main function; controller.
 */
function main() {
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleWordsFile)
  // const maybeVowel = "U" 
  // const maybeVowel = "G"


  const testVowel = "U"
  // BECAUSE process[0] is node and process[1] is the filename,
  // process[2] is the argument   
  const maybeVowel = process.argv[2].toUpperCase()
  
  if (ALL_VOWELS.has(maybeVowel)) {
    const matchedWords = scrabbleWords.filter(word => hasUniqueVowel(word.toUpperCase(), maybeVowel))
    console.log(`\nMATCHED WORDS:`)
    console.table(matchedWords)
    console.log(`\nOut of`, scrabbleWords.length, `scrabbleWords`, matchedWords.length, `contain only ${maybeVowel} for VOWELS.`)
    
    // process.exit(0) means ended successfully, any other return code means failure
    process.exit(0) 

  } else {

    console.error(`${maybeVowel} is not a vowel!`)
    process.exit(1)

    // echo $? shows return code of last run process

  }


}
main()

// UNO
function hasUniqueVowel(word, desiredVowel) {

  // ASSUMES second arg is a vowel

  let foundDesiredVowel = false
  let foundOtherVowel = false

  // Loop over each char in word
  for (let i = 0; i < word.length; i++) {

    let currentChar = word[i]

    // EARLY return if other vowel found
    if (ALL_VOWELS.has(currentChar) && currentChar !== desiredVowel) { foundOtherVowel = true }

    if (ALL_VOWELS.has(currentChar) && currentChar === desiredVowel) { foundDesiredVowel = true }

  } // END word chars loop

  return !foundOtherVowel && foundDesiredVowel

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




