/* 
leetcode--longest-common-prefix-4.js

https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string ""

Programmer: Eric Hepperle
Date: 2022-11-21

NOTE: This is what I submitted to Leetcode and was accepted, but
Version 5 is the one that runs in VS Code. Two versions will need
to be maintained.

#GOTCHA: The code submitted to Leetcode will often be slightly
different than in VS Code, because you have to write your own
tests in local environment.
*/

/* ----------- Test Values: ----------- */

/**
 * @param {string[]} strs
 * @return {string} common
 */
var longestCommonPrefix = function (strs) {


  // console.log({ ...strs })

  let common = ''

  // sort words by length, shortest first
  let wordsSortedByLength = strs.sort((a, b) => {
    return a.length - b.length
  })

  // firstword is shortest
  let checkWord = wordsSortedByLength[0]

  // console.log({checkWord})


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

      return common

    }

    // If we've processed all words for this check char
    common += checkWord[i]

  } // END loop through checkword

  return common
}