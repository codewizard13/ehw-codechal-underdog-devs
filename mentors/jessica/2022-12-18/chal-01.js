/*
Jessica McKellar challenges - 2022-12-18

Challenge:

What are all of the words that can be made from only the letters
in “RSTLNE”? Not all of those letters need to be used,
and letters can be repeated.

--- --- ---
TIME COMPLEXITY:

Eric Hepperle
2022-12-18

V1

*/

/*

ALGORITHM

SLURP file into wordsArray

DEFINE results set

DEFINE allowedChar array = r, s, t, l, n, e

// FUNCTION: main()
LOOP over all words

  DEFINE currentWord temp var

  IF currentWord contains no illegal chars

    ADD currentWord to results set

  END

END

// FUNCTION: containsIllegalChar(word, allowedChars)
LOOP over each char in word

  IF currentChar not included in allowedChars

    return true

  END

END

RETURN false if we get this far because NO illegal chars found

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

  // SLURP FILE DATA INTO ARRAY
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleWordsFile)
  // console.log({ scrabbleWords })

  const allowedChars = ["r", "s", "t", "l", "n", "e"]
  const legalWords = new Set()

  for (let i=0; i < scrabbleWords.length; i++ ) {

    let currentWord = scrabbleWords[i]

    if (!containsIllegalChar(currentWord, allowedChars)
        && currentWord !== '')
    {
      legalWords.add(currentWord)
    }

  }

  // console.table(legalWords)

  let longestWords = []

  legalWords.forEach((currentWord,i) => {

    if (longestWords.length === 0 || currentWord.length === longestWords[0].length) {
     longestWords.push(currentWord) 
    } else if (currentWord.length > longestWords[0].length) {
      longestWords = [currentWord]
    }

  })

  console.table(longestWords[0].length)
  console.table(longestWords)

  // let over15 = legalWords.filter(word => word.length > 15)


} // END main


main()


/*
FIND LONGEST WORD

DEFINE longestWords array // handles multiple matches

LOOP THROUGH all words in array

  SET temp var currentWord

  IF longestWords is empty
  
    PUSH currentWord onto longest words arra

  ELSE IF currentWord length is longer than first index of longestWords array

    REPLACE longestWords with currentWord

  ELSE IF currentWord equals same length as words in longestWords array

    PUSH currentWord onto longestWords
  END



END

*/


function containsIllegalChar(word, allowedChars) {

  for (let i=0; i < word.length; i++ ) {

    let currentChar = word[i]

    if (!allowedChars.includes(currentChar.toLowerCase())) {
      return true
    }

  }

  return false
}


/*
ALGORITHM






*/