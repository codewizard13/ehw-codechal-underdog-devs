/* 
MENTOR LUKE: CHAL: 2022-12-22

Write a function that takes a string prefix as an argument
and returns an array of all of the words that start with that
prefix (the prefix has to be at the beginning of the word).

Eric Hepperle
2022-12-22

V1

*/


const fs = require('fs')


/*
ALGORITHM:



// FUNCTION: wordsStartWith(words, prefix)
SLURP file into array (scrabbleWords)

DEFINE matcheWords array as empty

LOOP through scrabbleWords

  IF currentWord starts with prefix
   add it to matchedWords
  END

END

RETURN matchedWords


// FUNCTION: startsWith(word, prefix)
LOOP through each char in word

  SET temp var wordChar = word[i]

  LOOP through each prefix char
    
    // if word[i] !== prefix[i]
    IF wordChar NOT SAME as prefix char

      RETURN FALSE

    END
 
  END

END

RETURN TRUE

*/


// SLURP file into array
let scrabblePath = '../../../docs/sowpods.txt'
// let scrabbleWords = filenameToLines(scrabblePath)

let prefix = "CHE"

let scrabbleWords = ["CHEERY", "CHERRY", "CAN"]
// let scrabbleWords = ["CHE"]

function wordsStartWith(words, prefix) {

  // DEFINE return array
  const matchedWords = []

  for (let i = 0; i < words.length; i++) {

    let currentWord = words[i]

    if (startsWith(currentWord, prefix)) {
      matchedWords.push(currentWord)
    }

  }

  // OUTPUT RESULTS
  console.log(`\nMATCHED WORDS\n`)
  console.table(matchedWords)
}
wordsStartWith(scrabbleWords, prefix)




function startsWith(word, prefix) {

  // LOOP through each char in word
  for (i = 0; i < word.length; i++) {

    let wordChar = word[i]

    // ONLY loop until no more prefix chars
    for (j=0; j < prefix.length; j++) {

    if (word[i] !== prefix[i]) {
      return false
    }

    }

  }

  return true

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



