/* 
leetcode-decrypt-str-2.js

https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

Eric Hepperle
2022-11-21

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




/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {

  let decodedWord = ''

  if (s.indexOf('#') === -1) {
    processOneToOne(s)
  } else {
    processManyToOne(s)
  }

  function processOneToOne(string) {
    console.log(`INPUT STRING [${string}] doesn't contain the # char`)

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

  /**
   * Process encoded words with at least 1 #
   * 
   * Requires keeping track of char's position in encoded word
   * 
   * @param {*} string 
   */
  function processManyToOne(string) {
    console.log(`INPUT STRING [${string}] DOES contain the # char`)

    let haystack = string

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




