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

const {filenameToLines} = require('../../../common/io')
const process = require('process');

const ALL_VOWELS = new Set("AEIOU".split(''))

function isVowel(letter) {
  return ALL_VOWELS.has(letter.toUpperCase());
}

function filterWords(words, desiredVowel) {
  return words.filter(word => hasUniqueVowel(word.toUpperCase(), desiredVowel))
}

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



module.exports = {
  hasUniqueVowel: hasUniqueVowel,
  filterWords: filterWords,
  isVowel: isVowel
}



