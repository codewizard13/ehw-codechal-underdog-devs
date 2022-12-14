/*
MENTOR Nikolay:

CHALLENGE:

What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.

Q: What if conditions are variables?

HW: Optimizing the if statement in findMatches() - DONE

Eric Hepperle
2022-12-16

V1

*/

const fs = require('fs')


/**
 * Main: The main function; controller.
 */
function main() {

  // SLURP FILE DATA INTO ARRAYS
  const scrabbleFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleFile)

  // const matches = findMatches(scrabbleWords, "PRO", "ING", 8)
  const matches = findMatches(scrabbleWords, "PRO", "ING")
  console.table(matches)


}
main()

// Array of three words
const testArray = ["FRIDAY", "PRO134", "PROING", "PROGGING"]

// O(N)
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

// O(N^2)
function findMatchesWithSort(words, startsWith = "", endsWith = "") {

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
