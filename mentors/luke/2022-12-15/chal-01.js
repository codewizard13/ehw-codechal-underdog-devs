/* 
MENTOR LUKE

CHALLENGE:

What are all of the words that have only “E”s for vowels and are at least 15 letters long?

Eric Hepperle
2022-12-15

*/


const fs = require('fs')


/*
ALGORITHM:

SLURP file into scrabbleWords array

DEFINE GLOBAL const vowels array

// FUNCTION: main()
DEFINE matchedWords array empty

LOOP through each word

  IF word has only one unique vowel AND that vowel is E AND the word is > = 15 letters long

    ADD word to matchedWords array

  END

END

OUTPUT matchedWords


// FUNCTION: hasOnlyOneVowelType(word, "E")
DEFINE found set

LOOP through each character (char) in word

  LOOP through each vowel in vowels array

    IF current word char is same as current vowel

      ADD vowel to found set
      
      IF set size is 2
        RETURN false
      END
    
    END

  END

  RETURN true

END

*/


// const vowels = ["A", "E", "I", "O", "U", "Y"]
const vowels = ["A", "E", "I", "O", "U"]

const testWords = [
  "AARDVARK", "BINGO", "INNNNNNIIIIIIIIIIIII", "BEEKEEPER", "COUNCIL", "FREE", "BOOHOO", "BEEKEEPERBOOBOO", "AAAABBBBBBBBBBCCCA", "EEEEEEE99999EEEEEEEEE"
]

/**
 * Main: The main function; controller.
 */
function main() {

  const matchedWords = []

  let scrabblePath = '../../../docs/sowpods.txt'
  let scrabbleWords = filenameToLines(scrabblePath)

  // scrabbleWords = testWords

  for (let i=0; i < scrabbleWords.length; i++ ) {

    let word = scrabbleWords[i]

    if (word.length >= 15 && hasOnlyOneVowelType(word.toUpperCase())) {
      // console.log({word})
      matchedWords.push(word)
    }

  }

// OUTPUT RESULTS
console.table(matchedWords)

}
main()


function hasOnlyOneVowelType(string) {

  const found = new Set()

  for (let i=0; i < string.length; i++) {

    for (let j=0; j < vowels.length; j++) {

      if (string[i] === vowels[j]) {

        found.add(vowels[j])

        if (found.size === 2) {
          return false
        }

      }

    }

  }

  const resultArr = Array.from(found)
  // console.log(resultArr[0])

  return resultArr[0]

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
 * Get shortest lines(s)
 * - If there are ties, return all lines that match shortest length.
 *
 * @arg: {array} lines
 * @return: {array} filtered
 */
function shortestLines(lines) {

  let shortestLines = []

  let shortestLength = 0

  lines.forEach((line, i) => {

    if (i === 0) {
      shortestLength = line.length
      shortestLines.push(line)
    } else if (line.length < shortestLength) {
      shortestLength = line.length
      shortestLines = [line] // clear shortest array
    } else if (line.length === shortestLength) {
      shortestLines.push(line)
    }

  })

  // const filtered = lines.filter(line => line.length === shortestLength)
  // return filtered

  return shortestLines
}


