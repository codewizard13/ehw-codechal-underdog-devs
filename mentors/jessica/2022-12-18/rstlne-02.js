/*
ERIC'S ATTEMPT @ - 2022-12-18

Challenge:

What are all of the words that can be made from only the letters
in “RSTLNE”? Not all of those letters need to be used, and
letters can be repeated.

--- --- ---
TIME COMPLEXITY:

Eric Hepperle
2022-12-18

V1

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


/**
 * Main: The main function; controller.
 */
function main() {

  const results = new Set()

  // SLURP FILE DATA INTO ARRAY
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleWordsFile)

  // const scrabbleWords = [
  //   "RA", "RSTL"
  // ]

  const allowedChars = ["r", "s", "t", "l", "n", "e"]
  // const allowedChars = ["r", "s", "t", "l", "n"]

  // LOOP through each scrabble word
  for (let i = 0; i < scrabbleWords.length; i++) {

    let currentWord = scrabbleWords[i]

    // If the current word doesn't contain illegal characters,
    if (currentWord !== '' && !containsIllegalChar(currentWord, allowedChars)) {

      // ADD current word to results set
      results.add(currentWord)

    } else {
      // console.log(`${currentWord} contains ILLEGAL characters!`)
    }

  } // END scrabbleWords loop



  // OUTPUT MATCHED WORDS
  console.table(results)



} // END main


main()


function containsIllegalChar(word, allowedChars) {

  // console.warn({word})

  let charIsLegal = true

  for (let i = 0; i < word.length; i++) {
    let currentChar = word[i]
    let charIsLegal = allowedChars.includes(currentChar.toLowerCase())

    // console.log({charIsLegal})

    if (!charIsLegal) {
      return true
    }

  }

  return false
}

/*
ALGORITHM

SLURP file into array (scrabbleWords)

// FUNCTION: Main
DEFINE results set []

DEFINE allowedChars array

LOOP through each word in scrabbleWords

  IF current word does NOT contain any illgal letters

    ADD current word to results set

  END

END

// FUNCTION: containsIllegalChar(word, allowedChars)
LOOP over each char in word as currentChar

  IF currentChar not in allowedChars
    return false
  END

END

RETURN true


  





*/