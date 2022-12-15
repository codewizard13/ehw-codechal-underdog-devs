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

SLURP scrabble file into array (scrabbleWords)

// FUNCTION: main
DEFINE empty results array

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

    IF found has only one element and that element is U

      RETURN true

    END

  END

  return false

END


/*
LEARNINGS / NOTES:

- declarative vs imperative

returns true if and only if there is at least one U and no other vowels

HOMEWORK: Implement the above algorithm I wrote

*/


*/


const fs = require('fs')

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

// let scrabbleWords = ["Albania", "Uganda", "Togo", "Zimbabwe", "Beekeeper", "Afghanistan"]

const vowels = ["A", "E", "I", "O", "U"]

/**
 * Check if a character is a vowel or not.
 * 
 * @param {char} char 
 * @returns {bool}
 */
function isVowel(char) {

  return vowels.includes(char)

}



/**
 * Main: The main function; controller.
 */
function main() {

  const results = []

  // SLURP FILE DATA INTO ARRAYS
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleWordsFile)

  for (let i = 0; i < scrabbleWords.length; i++) {


  
  }
  
  console.table(results)
  console.log(`\nOut of`, scrabbleWords.length, `scrabbleWords`, results.length, `both start and end with a vowel.`)

}

main()


/*
ALGORITHM:



*/