/*
MENTOR Jacob: HOMEWORK: 2022-12-14

What are all of the words that have only “U”s for vowels?

Eric Hepperle
2022-12-14

V1

*/

/* ALGORITHM IN OWN FILE */


/*
LEARNINGS / NOTES:

- declarative vs imperative
- returns true if and only ifthere is at least one U and no other vowels
- HOMEWORK: Implement the above algorithm I wrote

*/

const fs = require('fs')

const vowels = ["A", "E", "I", "O", "U"]

/**
 * Main: The main function; controller.
 */
 function main() {
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleWordsFile)
  const matchedWords = scrabbleWords.filter( word => hasOnlyU(word.toUpperCase()))
  console.log(`\nMATCHED WORDS:`)
  console.table(matchedWords)
  console.log(`\nOut of`, scrabbleWords.length, `scrabbleWords`, matchedWords.length, `contain only U for vowels.`)
}
main()


function hasOnlyU(word) {

  const foundVowels = []

  // LOOP over each char in word
  for (let i = 0; i < word.length; i++) {

    // LOOP over each vowel
    for (let j = 0; j < vowels.length; j++) {

      // IF char is vowel AND vowel doesn't already exist in found array
      if (word[i] === vowels[j] && !foundVowels.includes(word[i])) {

        foundVowels.push(word[i])

        // If we have found two unique vowels then return false
        if (foundVowels.length === 2) { return false }

      }

    } // END vowels loop

  } // END  chars in word loop

  if (foundVowels.length === 1 && foundVowels[0] === "U") {
    return true
  } else {
    return false
  }

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