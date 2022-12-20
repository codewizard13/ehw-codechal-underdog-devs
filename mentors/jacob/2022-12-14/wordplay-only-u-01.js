/*
MENTOR Jacob:

CHALLENGE:

What are all of the words that have only “U”s for vowels?

Eric Hepperle
2022-12-14

V1

*/

/*
ALGORITHM


// FUNCTION: main
DEFINE empty results array
SLURP scrabble file into array (scrabbleWords)

LOOP through each word

  IF currentWord contains only U's for vowels

    PUSH result on to results array

  END

END

RETURN results

// FUNCTION: hasOnlyU(word)
// - Input word string
// - Return boolean
DECLARE array found

LOOP  through each char in word

  LOOP through each vowel

    IF char is vowel

      ADD char to found array

      IF there are 2 elements in found array
        RETURN false
      END

    END

  END vowels loop
    
END word char loop

// AFTER looping though word if found array has length 1
IF found has only one element and that element is U

  RETURN true

ELSE

  RETURN false

END


/*
LEARNINGS / NOTES:

- declarative vs imperative

returns true if and only if there is at least one U and no other vowels

HOMEWORK: Implement the above algorithm I wrote

*/

const fs = require('fs')

// let scrabbleWords = ["Albania", "Uganda", "Togo", "Zimbabwe", "Beekeeper", "Afghanistan"]

const vowels = ["A", "E", "I", "O", "U"]

/**
 * Main: The main function; controller.
 */
function main() {

  const matchedWords = []

  // SLURP FILE DATA INTO ARRAYS
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleWordsFile)
  // const scrabbleWords = [
  //   "AA", "BBB", "BBU", "OU", "UUU", "AAA", "UUAAU"
  // ]
  // console.log({ scrabbleWords })

  // LOOP through each word
  for (let i = 0; i < scrabbleWords.length; i++) {

    let currentWord = scrabbleWords[i]

    if (hasOnlyU(currentWord.toUpperCase())) {
      matchedWords.push(currentWord)
    }

  }

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