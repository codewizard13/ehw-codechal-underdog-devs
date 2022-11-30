/* 
leetcode--longest-common-prefix-4.js

https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string ""

Programmer: Eric Hepperle
Date: 2022-11-21

NOTE: This version functionized for Leetcode submission
*/

/* ----------- Test Values: ----------- */




const testWordSets = [
  ["flower", "flow", "flight", "star"], // ''
  ["flowerpot", "flower", "flow", "flomp"], // flo
  ["flower", "flow", "flight"], // fl
  ["subconscious", "subjugate", "subliminal", "submarine", "subservient", "subsidiary", "subterranean"], // sub
  ["dog", "racecar", "car"] // ''
]

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {


  console.log({ strs })

  let common = ''

  // sort words by length, shortest first
  let wordsSortedByLength = strs.sort((a, b) => {
    return a.length - b.length
  })

  // firstword is shortest
  let checkWord = wordsSortedByLength[0]

  // console.log({checkWord})

  // main
  function main(words) {

    let nonMatchFound = false

    // every() function on inside must return true or false
    for (let i = 0; i < checkWord.length; i++) {

      // console.log({ char })


      for (let j = 0; j < strs.length; j++) {

        if (strs[j][i] !== checkWord[i]) {

          nonMatchFound = true
          break
          //  common !== '' ? common : 'No words in common'

        }

      }

      // If a non-matching char was found
      if (nonMatchFound) {

        return common // acts as break

      }

      // If we've processed all words for this check char
      common += checkWord[i]

    }

    return common
  }


  // console.log(`common: ${common}`)
  console.log(main(strs))

};

function testArrays(sets) {
  sets.forEach(set => {
    longestCommonPrefix(set)
  })
}
testArrays(testWordSets)






