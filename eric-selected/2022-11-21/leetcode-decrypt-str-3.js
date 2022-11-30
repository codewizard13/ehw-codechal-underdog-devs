/* 
leetcode-decrypt-str-3.js

https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

Eric Hepperle
2022-11-24

*/

/* ----------- Test Values: ----------- */

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

const wordsSet = [
  "10#11#12",
  "1326#",
  "1994"
]


/*
ALGORITHM:

if string doesn't have a "#" symbol anywhere, then

  process every character as representing a single character

} else

  process multiple characters as representing one
}


function processOneToOne(word) {

}

function processMultiToOne(word) {
  
  start from left and find the first # sign.
  Then get it and the previous two characters
  Store this value as valueToDecode

}

*/


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
}

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {

  let decodedWord = ''

  if (s.indexOf('#') === -1) {
    // processOneToOne(s)
  } else {
    processManyToOne(s)
  }

  function processOneToOne(string) {

    console.log("INPUT STRING %c[%s] DOESN'T contain", styles.error, string, "the # char")


    let wordDecoded = ''

    string.split('').forEach(char => {

      console.log({ char })

      // let value = '9'
      let key = Object.keys(codex).find(k => codex[k] === char);

      wordDecoded += key
    })

    console.log({ wordDecoded })
    return wordDecoded

  }

  function getCharsInDecodedString(s) {

    // total hashChars =

    const hashCharIndexes = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '#') {
        hashCharIndexes.push(i);
      }
    }

    console.log(hashCharIndexes); // 👉️ [2, 3, 9]

  }

  /**
   * Process encoded words with at least 1 #
   * 
   * Requires keeping track of char's position in encoded word
   * 
   * @param {*} string 
   */
  function processManyToOne(string) {
    // console.log(`INPUT STRING [${string}] DOES contain the # char`)
    console.log("INPUT STRING %c[%s] DOES contain", styles.correct, string, "the # char")

    let haystack = string

    // First determine how many characters we are supposed to end up with
    let strCharCount = getCharsInDecodedString(string)


    let wordDecoded = {}

    let substr = '' // work on one 3-digit has substring at a time

    let charCount = 0

    // find first index from left of #
    let hashIndex = haystack.indexOf('#')

    console.log({ hashIndex })

    substr = haystack.slice(hashIndex - 2, 3)

    console.log({ substr })

    // ✅ Remove first occurrence
    const remaining = haystack.replace(substr, '');
    console.log({ remaining }); // 👉️ ",one,two"

    console.log("HAYSTACK REMAINING: ", remaining)

  }



  return decodedWord

};


function testHarness(testHash) {

  console.log({ testHash })

  testHash.forEach(arr => {
    console.log("word decoded:", freqAlphabets(arr))
  });

}
testHarness(wordsSet)




