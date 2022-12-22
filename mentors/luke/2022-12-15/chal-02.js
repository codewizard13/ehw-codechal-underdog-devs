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
const VOWELS = new Set(["A", "E", "I", "O", "U"])

// console.log({ VOWELS })

const testWords = [
  "AARDVARK", "BINGO", "INNNNNNIIIIIIIIIIIII", "BEEKEEPER", "COUNCIL", "FREE", "BOOHOO", "BEEKEEPERBOOBOO", "AAAABBBBBBBBBBCCCA", "EEEEEEE99999EEEEEEEEE"
]

// const testWords = ["INNNNNNIIIIIIIIIIIII", "AAAABBBBBBBBBBCCCAU", "BEEKEEPERBOOBOO", "AAAABBBBBBBBBBCCCA"]
// const testWords = ["AAR", "UUUU", "UE"]
// const testWords = ["AU"]

/**
 * Main: The main function; controller.
 */
function main() {

  const matchedWords = []

  let scrabblePath = '../../../docs/sowpods.txt'
  let scrabbleWords = filenameToLines(scrabblePath)
  // const scrabbleWords = testWords

  // scrabbleWords = testWords

  // LOOP over all scrabble words
  for (let i = 0; i < scrabbleWords.length; i++) {

    let currentWord = scrabbleWords[i]
    // console.log(`\ncurrentWord: ${currentWord}, currentWord.length: ${currentWord.length}`)
    let hasJustOneVowelType = hasOnlyOneVowelType(currentWord.toUpperCase(), "E")

    if (currentWord.length >= 15 && hasJustOneVowelType) {
    // if (hasJustOneVowelType) {

      matchedWords.push(currentWord)

    }

  }

  // OUTPUT RESULTS
  console.log(`\nMATCHED WORDS\n`)
  console.table(matchedWords)

}
main()



function hasOnlyOneVowelType(word, desiredVowel) {
  

  // console.log(`word: ${word}, desiredVowel: ${desiredVowel}`)

  const vowelsFound = new Set()
  let foundDesiredVowel = false

  // LOOP over all chars in word
  for (let i = 0; i < word.length; i++) {

    let wordChar = word[i]

    // If wordChar is in VOWELS set, then it is a vowel
    if (VOWELS.has(wordChar)) {

      // console.log(`${wordChar} is a vowel`)

      // If current vowel is desired vowel
      if (wordChar === desiredVowel) {
        // console.log(`char ${i} of ${word} is desiredVowel ${desiredVowel}`)
        foundDesiredVowel = true
      }

      vowelsFound.add(wordChar)
      // console.log(`vowelsFound: `, vowelsFound)

      // If we have 2 unique vowels in found set then this word fails
      if (vowelsFound.size === 2) { return false }


    } // END if wordChar is vowel


  }


  return foundDesiredVowel


}
















































// function hasOnlyOneVowelType(string) {

//   const found = new Set()

//   for (let i=0; i < string.length; i++) {

//     for (let j=0; j < vowels.length; j++) {

//       if (string[i] === vowels[j]) {

//         found.add(vowels[j])

//         if (found.size === 2) {
//           return false
//         }

//       }

//     }

//   }

//   const resultArr = Array.from(found)
//   // console.log(resultArr[0])

//   return resultArr[0]

// }




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


