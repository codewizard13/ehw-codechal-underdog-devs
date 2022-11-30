// leetcode-804-morse-code-1.js

/*
Eric Hepperle
2022-11-23

This is the version for Leetcode submission

*/

// --------- TEST VALUES -------------

const words = ["gin", "zen", "gig", "msg"]
// const words = ["a"]

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {

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

  const encodedWords = []

  words.forEach(word => {

    let wordEncoded = encodeWord(word)

    if (!encodedWords.includes(wordEncoded)) {

      encodedWords.push(wordEncoded)

    }


  }) // END foreach through words

  function encodeWord(word) {

    let encryptedWord = ''

    word.split('').forEach(char => {

      let encodedChar = codex[char]

      encryptedWord += encodedChar
    })

    return encryptedWord

  }
  // returns int - remove length to return actual values
  return encodedWords.length
}

const result = uniqueMorseRepresentations(words)

console.log({ result })