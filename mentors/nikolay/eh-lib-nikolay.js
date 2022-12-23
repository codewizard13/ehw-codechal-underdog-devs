/*
MENTOR Nikolay: CHALLENGE: 2022-12-23

???


Eric Hepperle
2022-12-23

V1

*/

const fs = require('fs')


/**
 * Main: The main function; controller.
 */
function main() {

  // SLURP FILE DATA INTO ARRAY
  const scrabbleFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleFile)

  const testArray = // CREATE MVP of test words here


  /// DO STUFF...


  // OUTPUT RESULTS
  console.table(matches)

}
main()


/**
 * Takes an array of words and returns words that start with
 * (startsWith) and ends with (endsWith)
 * 
 * @param {array} words 
 * @param {string} startsWith 
 * @param {string} endsWith 
 * @returns {array} shortestWords
 */
function findMatches(words, startsWith = "", endsWith = "") {

  let shortestWords = []

  for (let i = 0; i < words.length; i++) {

    let word = words[i]

    if (word.startsWith(startsWith) && word.endsWith(endsWith)) {

      if (shortestWords.length === 0 || word.length === shortestWords[0].length) {
        shortestWords.push(word)
      } else if (word.length < shortestWords[0].length) {
        shortestWords = [word]
      }

    }

  }

  return shortestWords
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

/**
 * Takes in array of words and returns an array of the shortest words
 * that start with (startsWith) and end with (endsWith) strings.
 * 
 * @param {array} words 
 * @param {string} startsWith 
 * @param {string} endsWith 
 * @returns {array} shortestWords
 */
function findMatchesWithArraySort(words, startsWith = "", endsWith = "") {

  const matches = []

  for (let i = 0; i < words.length; i++) {

    let word = words[i]

    if (word.startsWith(startsWith) && word.endsWith(endsWith)) {

      matches.push(word)

    }

  }

  const sortedMatches = matches.sort((a, b) => a.length - b.length)
  let shortestLength = sortedMatches[0].length
  console.table(sortedMatches)
  let shortestWords = sortedMatches.filter(word => word.length === shortestLength)
  console.table(shortestWords)
  return shortestWords
}
