/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string ""
*/

let current_common = ''
// const test_array = ["flower", "flow", "flight", "star"]
const test_array = ["flower", "flow", "flight"]

// sort
let myArray = test_array.sort((a, b) => {
  return a.length - b.length
})

// console.log({ myArray })


function main(words) {

  let common = ''
  let continueLoop = true
  const firstWord = myArray[0]

  // loop through ever letter of first word of sorted array
  for (let i = 0; i < firstWord.length; i++) {

    if (continueLoop === false) {
      break
    }

    common += firstWord[i]


    // loop through words array for that index
    for (let j = 0; j < myArray.length - 1; j++) {

      const currentWord = myArray[j]
      console.log({ currentWord })

      const currentChar = firstWord[i]
      console.log({ currentChar })

      if (currentChar !== currentWord[i]) {

        console.log('HEY')
        continueLoop = false
        break

      }

    }


  }

  return common.slice(0, -1)

}


// console.log(`common: ${common}`)
console.log(main(test_array))


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