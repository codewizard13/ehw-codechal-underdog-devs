/*
MENTOR Nikolay:

CHALLENGE:

What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?

-

What if conditions are variables?

Eric Hepperle
2022-12-16


V1

*/

/*
ALGORITHM





*/


const fs = require('fs')


/**
 * Main: The main function; controller.
 */
function main() {

  // SLURP FILE DATA INTO ARRAYS
  const scrabbleFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleFile)

  // console.log(scrabbleWords)
  // const matches = findMatches(scrabbleWords, "PRO", "ING", 11)
  // const matches = findMatches(scrabbleWords, "PRO", "ING", 8)
  const matches = findMatches(scrabbleWords, "Z", "ING")
  console.table(matches)


}
main()


function findMatches(words, startsWith="", endsWith="", minLength=3, maxLength=15) {

  const matches = []

  for (let i=0; i < words.length; i++ ) {

    let word = words[i]

    if (word.length >= minLength && word.length <= maxLength && word.startsWith(startsWith) && word.endsWith(endsWith)) {
      // console.log(word)
      matches.push(word)
    }

  }

  return matches
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
