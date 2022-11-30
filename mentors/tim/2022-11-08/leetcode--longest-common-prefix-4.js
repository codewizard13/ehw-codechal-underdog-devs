/* // leetcode--longest-common-prefix-4.js

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string ""
*/

/* ----------- Test Values: ----------- */

// const wordsArr = ["flower", "flow", "flight", "star"]
const wordsArr = ["flowerpot", "flower", "flow", "flomp"]
// const wordsArr = ["flower", "flow", "flight"]

let common = ''

// sort words by length
let wordsSortedByLength = wordsArr.sort((a, b) => {
  return a.length - b.length
})

// First word is shortest - no match will be larger than this word
let checkWord = wordsSortedByLength[0]
console.log({ checkWord })

// main
function main(words) {

  let nonMatchFound = false

  // checkWord.split('').forEach((char, i) => {
  // every() function on inside must return true or false
  for (let i = 0; i < checkWord.length; i++) {

    // console.log({ char })


    for (let j = 0; j < wordsArr.length; j++) {

      if (wordsArr[j][i] !== checkWord[i]) {

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
console.log(main(wordsArr))


