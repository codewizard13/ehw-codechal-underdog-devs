// leetcode-804-morse-code-1.js

/*
ALGORITHM:

declare array to hold encoded words result encodedWordsArray

const codex = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

LOOP through words

    let encodedWord = encodeWord(word)

    if encodedWord not already in array
      
      add encodedWord to encodedWordsArray 

}

function encodeWord(word) {

  let encodedWord string

  foreach char in word

    add codex[char]

  }
  return encodedWord

}

return encodedWordsArray.length
*/

const words = ["gin", "zen", "gig", "msg"]
// const words = ["a"]

const codex = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--.."
}


/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {

  const encodedWords = []

  words.forEach(word => {

    // console.log({ word })

    let wordEncoded = encodeWord(word)
    // console.log({ wordEncoded })

    if (!encodedWords.includes(wordEncoded)) {

      encodedWords.push(wordEncoded)

    }


  }) // END foreach through words

  function encodeWord(word) {

    let encryptedWord = ''

    word.split('').forEach(char => {

      let encodedChar = codex[char]

      // console.log({ encodedChar })
      encryptedWord += encodedChar
    })

    // console.log(`Encrypted word is: ${encryptedWord}`)
    return encryptedWord

  }

  // console.log({ encodedWords })
  return [encodedWords, encodedWords.length]

}

const result = uniqueMorseRepresentations(words)

console.log({ result })