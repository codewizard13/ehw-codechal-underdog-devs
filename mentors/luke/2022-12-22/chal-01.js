/* 
MENTOR LUKE: CHAL: 2022-12-22 / 2023-01-05

Write a function that takes a string prefix as an argument
and returns an array of all of the words that start with that
prefix (the prefix has to be at the beginning of the word).

Eric Hepperle
2023-01-05

V1

*/


const fs = require('fs')


/*
ALGORITHM:

// FUNCTION: wordsStartWith(words, prefix)
SLURP file into array (scrabbleWords)

DEFINE matcheWords array as empty

LOOP through scrabbleWords

  IF currentWord starts with prefix
   add it to matchedWords
  END

END

RETURN matchedWords

*/

// SLURP file into array
let scrabblePath = '../../../docs/sowpods.txt'
let scrabbleWords = filenameToLines(scrabblePath)

let prefix = "CHE"

// let scrabbleWords = ["CHEERY", "CHERRY", "CAN"]
// let scrabbleWords = ["CHE"]

function main() {

  // console.log(startsWith("CHEERY", "CHV"))
  // console.log(startsWith("CHEERY", "CHE"))
  // console.log(startsWith("CHEERY", "CHBT"))
  // console.log(startsWith("CHEERY", "B"))
  wordsStartWith(scrabbleWords, prefix)

}
main()



function wordsStartWith(words, prefix) {

  // DEFINE return array
  const matchedWords = []

  for (let i = 0; i < words.length; i++) {

    let currentWord = words[i]

    if (startsWith(currentWord, prefix)) {
      matchedWords.push(currentWord)
    }

  }

  // OUTPUT RESULTS
  console.log(`\nMATCHED WORDS\n`)
  console.table(matchedWords)
}




// function startsWith(word, prefix) {

//   // let prefixFound = false

//   // LOOP through each char in word
//   for (let i = 0; i < word.length; i++) {

//     let wordChar = word[i]

//     // ONLY loop until no more prefix chars
//     for (let j = 0; j < prefix.length; j++) {

//       let prefixChar = prefix[j]

//       if (wordChar !== prefixChar) {
//         return false
//       }

//     }

//     // prefixFound = true

//   }

//   return true

// }


/*
ALGORITH for function startsWith(word, prefix)

LOOP over each char in word WHILE:
- index less than length of word in chars
- index less than prefix length

  SET temp var wordChar
  SET temp var prefixChar

  IF prefixChar NOT same as wordChar
    RETURN false
  END

END

RETURN true


*/


function startsWith(word, prefix) {

  // LOOP through each char in word
  for (let i = 0; i < prefix.length && i < word.length; i++) {

    let wordChar = word[i]
    let prefixChar = prefix[i]

    if (prefixChar !== wordChar) {
      return false
    }

  }

  return true

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
