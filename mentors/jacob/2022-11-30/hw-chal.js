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
const countries = fileStr.split('\n') // make array
// let countries = ["Albania", "Uganda", "Togo", "Zimbabwe", "Beekeeper", "Afghanistan"]

// console.log({ countries })

function isVowel(char) {
  if (vowels.indexOf(char) !== -1) {
    return true
  }
  return false
}

const results = []

const vowels = ["A", "E", "I", "O", "U"]

for (let i = 0; i < countries.length; i++) {

  let country = countries[i].toUpperCase()
  let firstChar = country[0].toUpperCase()
  let lastChar = country[country.length - 1].toUpperCase()

  // console.log()
  // console.log(`country:`, country, ` -- firstChar:`, firstChar, `| lastChar:`, lastChar)

  if (!isVowel(firstChar)) { continue }
  if (!isVowel(lastChar)) { continue }

  results.push(country)

}

console.table(results)
console.log(`Out of`, countries.length, `countries`, results.length, `matched the condition.`)




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