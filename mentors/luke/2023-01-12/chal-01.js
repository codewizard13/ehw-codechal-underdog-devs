/* 
MENTOR LUKE: CHAL: 2023-01-12

Write a function that takes a string prefix as the first argument, a string suffix as the
second argument, and an integer length as the third argument. It should return an array of
all of the words that start with that prefix, end with that suffix, and are that length.

Eric Hepperle
2023-01-05

V1

*/


const fs = require('fs')


/*
ALGORITHM:

// FUNCTION: wordHadPrefixAndSuffix(word, prefix, suffix, length)
IF word starts with prefix
AND word ends with suffix
AND word word length equals length, THEN

  RETURN true

END

RETURN false

// FUNCTION: endsWith(word, suffix)

LOOP through suffix chars:
  INITIALIZE suffixIndex to suffix length minus 1
  IF suffixIndex greater than or equal to zero
  do loop contents:

  IF suffixChar and wordChar as same

    wordIndex--

  END


  
  DECREMENT suffixIndex by one

END






// FUNCTION: filterWords(wordsArr, prefix, suffix, length)
DEFINE matchedWords

LOOP over each word in wordsArr

  IF wordHasPrefixAndSuffix and matches length

    ADD to matchedWords

  END

END




RETURN matchedWords

*/

// SLURP file into array
let scrabblePath = '../../../docs/sowpods.txt'
let scrabbleWords = filenameToLines(scrabblePath)

let prefix = "CHE"
let suffix = "ET"

// let scrabbleWords = ["CHEERY", "CHERRY", "CAN"]
// let scrabbleWords = ["CHEVET"]

function main() {

  // wordsStartWith(scrabbleWords, prefix)

}
main()



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




function startsWith(word, prefix) {

  // LOOP through each char in word
  for (let i = 0; i < prefix.length && i < word.length; i++) {

    let wordChar = word[i]
    let prefixChar = prefix[i]

    if (prefixChar !== wordChar) {
      return false
    }

  }

  return true

}

function endsWith(word, suffix) {
  // SUFFIX = ET
  // TEST WORD= CHEVET
  // let wordIdx = 5
  // let suffixIdx = 0
  if (suffix.length > word.length) {return false}

  let wordIndex = word.length-1

  for (let i = suffix.length - 1; i >= 0; i--) {

    let suffixChar = suffix[i]

    let wordChar = word[wordIndex]

  }
  return true
}
endsWith("CHEVET","ET")


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
