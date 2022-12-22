/* 
MENTOR LUKE: HOMEWORK: 2022-12-15
What are all of the words that have only “E”s for vowels and are at least 15 letters long?
REFACTOR hasOnlyOneVowel() to take needle arg and return a boolean

Eric Hepperle
2022-12-15

*/


const fs = require('fs')


/*
ALGORITHM:

DEFINE GLOBAL CONSTANT VOWELS as set of all the vowels


// FUNCTION: main()
DEFINE matchedWords array empty

SLURP file into scrabbleWords array

LOOP through each word

  SET temp var currentWord
  DEFINE desiredVowel as "E"
  DEFINE minLength as 15

  IF currentWord length is greater than or equal to minLength
  AND currentWord has only one unique vowel type (no other vowels)
  AND that vowel is desiredVowel
  
    ADD word to matchedWords array

  END

END

OUTPUT matchedWords


// FUNCTION: hasOnlyOneVowelType(word, "E")
DEFINE vowelsFound emtpy set
DEFINE foundDesiredVowel as false

LOOP through each character (char) in word

  LOOP through each vowel in vowels array

    SET temp var wordChar = word[i]

    // IF wordChar is a vowel:
    IF VOWELS set has a key of wordChar

      IF wordChar is the desiredVowel

        SET foundDesiredvowel to TRUE

      END

      ADD wordChar to vowelsFound

      IF there are now two chars in vowelsFound

        RETURN FALSE because this word has more than one vowel type

      END

    END checking if wordChar is vowel

  END

  RETURN value of foundDesiredVowel

END func

*/


const VOWELS = new Set(["A", "E", "I", "O", "U"])

/**
 * Main: The main function; controller.
 */
function main() {

  const matchedWords = []

  let scrabblePath = '../../../docs/sowpods.txt'
  let scrabbleWords = filenameToLines(scrabblePath)

  let desiredVowel = "E"
  let minLength = 15

  // LOOP over all scrabble words
  for (let i = 0; i < scrabbleWords.length; i++) {

    let currentWord = scrabbleWords[i]
    let hasJustOneVowelType = hasOnlyOneVowelType(currentWord.toUpperCase(), desiredVowel)

    if (currentWord.length >= minLength && hasJustOneVowelType) {
      matchedWords.push(currentWord)
    }

  }

  // OUTPUT RESULTS
  console.log(`\nMATCHED WORDS\n`)
  console.table(matchedWords)

}
main()


/**
 * Return true if word has only one vowel type and it
 * matches the desiredVowel.
 * 
 * @param {string} word 
 * @param {char} desiredVowel 
 * @returns bool
 */
function hasOnlyOneVowelType(word, desiredVowel) {

  const vowelsFound = new Set()
  let foundDesiredVowel = false

  // LOOP over all chars in word
  for (let i = 0; i < word.length; i++) {

    let wordChar = word[i]

    // If wordChar is in VOWELS set, then it is a vowel
    if (VOWELS.has(wordChar)) {

      // If current vowel is desired vowel
      if (wordChar === desiredVowel) {
        foundDesiredVowel = true
      }

      vowelsFound.add(wordChar)

      // If we have 2 unique vowels in found set then this word fails
      if (vowelsFound.size === 2) { return false }

    } // END if wordChar is vowel

  }

  return foundDesiredVowel

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


