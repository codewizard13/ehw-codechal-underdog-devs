/* 
leetcode-decrypt-str-5.js

https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.


This version works in LEETCODE.

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


/* ----------- Test Values: ----------- */

const wordsSet = [
  "10#11#12",
  "1326#",
  "1994",
  "10#",
  "68",
  // 94
]

// const string = wordsSet[0]

const string = "25#24#18#25#21#"
console.log({ string })

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (string) {

  let decodedWord = ''

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

  decodeMixedString(string)

  /**
   * This function modifies a global variable, so it doesn't
   *   return anything.
   * 
   * @param {string} string
   * @return void
   */
  function decodeMixedString(string) {

    if (string.length === 3 && string.indexOf('#') === 2) {

      decodedWord += decodeChar(string)

    } else if (string.length < 3 || string.indexOf('#') === -1) {

      decodeSinglesString(string)

    } else {


      // find first # index from left
      let hashIndex = string.indexOf('#')

      let encodedChar = string.slice(hashIndex - 2, hashIndex + 1)

      let [before, ...after] = string.split(encodedChar)
      // after.splice(1, 0, encodedChar)     
      // after = after.join('')
      let remainder = after.join(encodedChar)



      if (before !== undefined && before !== '') {
        decodeSinglesString(before)
      }

      decodedWord += decodeChar(encodedChar)

      if (remainder !== undefined && after !== '') {
        decodeMixedString(remainder)
      }

    } // END string conditional

  } // END decodeMixedString()




  function decodeChar(value) {
    return Object.keys(codex).find(key => codex[key] === value);
  }


  function decodeSinglesString(string) {

    string.split('').forEach(char => {
      decodedWord += decodeChar(char) !== undefined ? decodeChar(char) : ''
    })

  }

  return decodedWord

};




console.log(freqAlphabets(string))



