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


  // console.log({scrabbleWords})

  const allowedChars = ["r", "s", "t", "l", "n", "e"]

  // LOOP through each scrabble word
  for (let i = 0; i < scrabbleWords.length; i++) {

    let currentWord = scrabbleWords[i]

    let foundIllegalChar = false


    // LOOP over all characters in current word
    for (let j = 0; j < currentWord.length && !foundIllegalChar; j++) {

      let currentChar = currentWord[j]

      // LOOP through all allowed chars
      for (let k = 0; k < allowedChars.length; k++) {

        let allowedChar = allowedChars[k]

        if (currentChar !== allowedChar[k]) {

          foundIllegalChar = true
          continue // illegal char found so jump to next word

        } 

        // console.log(`char ${j} of ${currentWord} is ${currentChar}`)

      }

      // if we got here then current char not illegal

    }
      // If we get here, then no disallowd chars were found!
      if (!foundIllegalChar) {
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

END



  





*/