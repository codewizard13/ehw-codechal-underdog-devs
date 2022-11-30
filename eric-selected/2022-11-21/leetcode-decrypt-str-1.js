/* 
leetcode-decrypt-str-1.js

https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

*/

/* ----------- Test Values: ----------- */

const str = "10#11#12"
// const str = "1326#"

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {

  let decodedWord = ''

  // Assign / Map each value to an object

  const mapping = {
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

  const encodedChars = Object.values(mapping)


  // loop through each char in input word
  for (let i = 0; i < s.length; i++) {

    currentEncodedChar = s[i]

    for (let j = 0; j < encodedChars.length; j++) {

      if (currentEncodedChar === encodedChars[j]) {

        let decodedChar = getObjKey(mapping, currentEncodedChar)

        console.log(`MATCH: ${currentEncodedChar} maps to ${decodedChar}`)

        let foundChar = encodedChars.find(key => mapping[key] === currentEncodedChar)
        console.log({ foundChar })
      }

    }

  }


  function getObjKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }


  return decodedWord

};

const out = freqAlphabets(str)