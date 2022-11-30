/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string ""
*/

/*

Compare first word to next word

If common substring starting from left,

  Save substring as common_prefix_1

  if we have another string

    repeat


while (have_another_string in array) {

  if has_common_prefix (a, b) {
    add to common_prefix_array
  } 

}


common_prefix_array [

  flower
  flow
  [0] = 'flow'
  flow

  if (has_next_string and next_string_has_commonality)

  else
    return ""
]

*/
let current_common = ''
// const test_array = ["flower", "flow", "flight", "star"]
const test_array = ["flower", "flow", "flight"]

let myArray = test_array


function main() {

  let common = ''
  // i = word array index
  for (let i = 0; i < myArray.length - 1; i++) {

    const current_word = myArray[i]

    if (!myArray[i + 1]) {
      return common
    }

    // j = char index
    for (let j = 0; j < current_word.length; j++) {

      const currentChar = current_word[j]
      common += currentChar

      // is there another
      // if (myArray[i + 1]) {

      const lastKnownCommonLetter = common[common.length - 1]
      const letterToCheck = myArray[i + 1][j]

      // compare current letter of current word to current letter of next word
      if (lastKnownCommonLetter !== letterToCheck) {
        common = common.slice(0, -1)
        console.log({ common })
        return common
      }

      // } else {
      //   common = common.slice(0, -1)
      //   return common
      // }

    }

    // return common

  }
}


// console.log(`common: ${common}`)
console.log(main())


function find_common_prefix(a, b) {


  // if 2nd word shorter than first
  if (b.length < a.length) {

    common = b

  }

  if (b.length === a.length) {

  }

  for (let i = 0; i < a.length; i++) {


    if (a[i] === b[i] && a[i] !== undefined && b[i] !== undefined) {

      console.log(`${a[i]} equals ${b[i]}`)

      current_common += a[i]

      console.log(`current_common: ${current_common}`)

    } else {



    }

  }

  return common

}