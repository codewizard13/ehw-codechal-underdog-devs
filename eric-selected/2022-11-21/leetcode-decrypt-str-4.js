/* 
leetcode-decrypt-str-4.js

https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

Eric Hepperle
2022-11-25

*/

/* ----------- CONSOLE LOG STYLES: ----------- */

const styles = {
  error:
    `color: red;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
  correct:
    `color: green;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
  warn:
    `color: orange;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
  bgYellow:
    `background: #ffffb3;` +
    `padding: 1em;` +
    `font-weight: bold;`
  ,
  bgAlice:
    `background: aliceblue;` +
    `padding: 1em;` +
    `font-weight: bold;`
  ,
}

/* ----------- Decoder Dictionary: ----------- */

const codex = {
  "a": "1",
  "b": "2",
  "c": "3",
  "d": "4",
  "e": "5",
  "f": "6",
  "g": "7",
  "h": "8",
  "i": "9",
  "j": "10#",
  "k": "11#",
  "l": "12#",
  "m": "13#",
  "n": "14#",
  "o": "15#",
  "p": "16#",
  "q": "17#",
  "r": "18#",
  "s": "19#",
  "t": "20#",
  "u": "21#",
  "v": "22#",
  "w": "23#",
  "x": "24#",
  "y": "25#",
  "z": "26#",
}

/* ----------- Test Values: ----------- */

const wordsSet = [
  "10#11#12",
  "1326#",
  "1994",
  "10#",
  "68",
  // 94
]

let decodedWord = ''

/**
 * This function modifies a global variable, so it doesn't
 *   return anything.
 * 
 * @param {string} string
 * @return void
 */
function decodeMixedString(string) {

  // console.log("string.length = ", string.length)

  if (string.length === 3 && string.indexOf('#') === 2) {

    console.log("The string %c[%s] CONTAINS at least one '#' AND is exactly 3 chars long", styles.warn, string)
    decodedWord += decodeChar(string)

  } else if (string.length < 3 || string.indexOf('#') === -1) {

    console.log("The string %c[%s] is less than 3 chars long OR contains no '#' chars", styles.error, string)
    decodeSinglesString(string)

  } else {

    console.log("The string %c[%s] CONTAINS at least one '#' AND is GREATER than 3 chars long", styles.correct, string)

    // find first # index from left
    let hashIndex = string.indexOf('#')
    // console.log({ hashIndex })

    let encodedChar = string.slice(hashIndex - 2, hashIndex + 1)
    // console.log("hashIndex - 2:", hashIndex - 2)
    // console.log("encodedChar: %c%s", styles.bgAlice, encodedChar)

    let [before, after] = string.split(encodedChar)

    // console.log({ before, after })

    if (before !== undefined && before !== '') {
      // console.log("%cBefore: %s", styles.bgAlice, before)
      decodeSinglesString(before)
    }

    decodedWord += decodeChar(encodedChar)

    if (after !== undefined && after !== '') {
      // console.log("%cAfter: %s", styles.bgAlice, after)
      decodeMixedString(after)
    }

  } // END string conditional

  // console.log("decodedWord: %c%s", styles.bgYellow, decodedWord)

}



function decodeChar(value) {
  return Object.keys(codex).find(key => codex[key] === value);
}


function decodeSinglesString(string) {

  // console.log("START: ", decodedWord)

  string.split('').forEach(char => {
    // console.log({ char })
    decodedWord += decodeChar(char) !== undefined ? decodeChar(char) : ''
  })

}



function runTests(words) {

  words.forEach(word => {

    // console.log({ word })
    decodeMixedString(word)

    console.log("decodedWord: %c%s", styles.bgYellow, decodedWord)

    decodedWord = '' // reset before decoding next word

  })

}

runTests(wordsSet)