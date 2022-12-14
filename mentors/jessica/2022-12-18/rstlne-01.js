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
  // const scrabbleWords = filenameToLines(scrabbleWordsFile)

  // Temporarily use a small test set
  // const scrabbleWords = [
  //   "RA", "RSTL", "RUSTLER", "HUSTLE", "rstlne",
  //   "RSTLNE", "apple", "RRRSSSTTTLLL", "TRAP",
  //   "rstlneao", "RRRLLLnnnnRRR"
  // ]

  const scrabbleWords = [
    "RA", "RSTL"
  ]

  let foundIllegalChar = false

  // console.log({scrabbleWords})

  const allowedChars = ["r", "s", "t", "l", "n", "e"]

  // LOOP through each scrabble word
  for (let i = 0; i < scrabbleWords.length; i++) {

    let currentWord = scrabbleWords[i]

    // LOOP over all characters in current word
    for (let j = 0; j < currentWord.length; j++) {

      let currentChar = currentWord[j]

      // LOOP through all allowed chars
      for (let k = 0; k < allowedChars.length; k++) {

        let allowedChar = allowedChars[k]


        console.log(
          `WORD #` + i+1 ,`currentWord: ${currentWord} | currentChar: ${currentChar}`,
          `| allowedChar: ${allowedChar}`
        )

        // If current char is disallowed, go to next word
        if (currentChar !== allowedChars[k]) {
          console.warn("ILLEGAL CHAR FOUND!")
        }

      }

      // If we get here, then no disallowd chars were found!
      results.add(scrabbleWords[i])


    }


  }



  // OUTPUT MATCHED WORDS
  console.table(results)



} // END main


main()


/*
ALGORITHM

SLURP file into array (scrabbleWords)

// FUNCTION: Main
DEFINE results array []

DEFINE allowedChars array

LOOP through each word in scrabbleWords

  SET currentWord = scrabbleWords[i]

  LOOP through each char in currentWord

    SET currentChar = currentWord[j]

    FOR EACH letter in allowedChars

      IF currentChar not equal to current allowed char

        SKIP to next word because disallowed char was found

      END

    END


  END currentWord loop


  We have reached this point if no disallowd chars were found in current word
  so, ADD current word to results array

END


  





*/