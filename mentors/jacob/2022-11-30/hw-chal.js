/*
MENTOR Jacob:

Challenge:

What countries both begin and end with a vowel?

Eric Hepperle
2022-11-30

V1

*/

const fs = require('fs')

let filename = '../../../docs/countries.txt'

// Read file into an array of words
const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
// const countries = fileStr.split('\n') // make array
let countries = ["Albania", "Uganda", "Togo", "Zimbabwe", "Beekeeper"]



/*
ALGORITHM:

DEFINE empty results array (results)
DEFINE array of vowels as "A", "E", "I", "O", "U"

LOOP through countries array

  IF country name begins with vowel (country[0] is included in vowels array)
    AND country name ends with vowel (country[country.length -1] is included in vowels array)

    ADD country name to results array

  END

END countries loop

*/

// console.log({countries})

const results = []

const vowels = ["A", "E", "I", "O", "U"]

for (let i=0; i < countries.length; i++) {

  let country = countries[i]
  let firstChar = country[0].toUpperCase()
  let lastChar = country[country.length-1].toUpperCase()

  console.log(`firstChar:`, firstChar, `lastChar:`, lastChar)

  // // Loop through each vowel
  // for (let j=0; j < vowels.length; j++) {

    // let currentVowel = vowels[j]

    // console.log(isVowel(firstChar))
    // console.log(`firstChar [${firstChar}] is a vowel`)

    if (! isVowel(firstChar)) { break }
    if (! isVowel(lastChar)) { break }

    results.push(country)

  // }

}
const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

console.log(`\n`, results)

function isVowel(char) {

  if (vowels.indexOf(char) !== -1) {
    return true
  }

  return false

}

console.log(vowels.indexOf("U"))
