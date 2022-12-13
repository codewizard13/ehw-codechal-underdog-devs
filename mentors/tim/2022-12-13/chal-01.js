/*
MENTOR Tim:

Challenge:


[ ] What countries use only one vowel in their name (the vowel can be used multiple times)
    - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.


Eric Hepperle
2022-12-06

V3

*/

const fs = require('fs')

let filename = '../../../docs/countries.txt'

// Read file into an array of words
const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const countries = fileStr.split('\n') // make array

// SAMPLE COUNTRIES ARRAYS FOR TESTING:
// let countries = ["Albania", "Uganda", "Togo", "Zimbabwe", "Beekeeper"]
// let countries = ["Togo"]
// let countries = ["Uganda"]

const results = []

const vowels = ["A", "E", "I", "O", "U"]
// vowels.push("Y") // add Y on for testing

// For each country name,
for (let i = 0; i < countries.length; i++) {

  let country = countries[i]

  // Clear / empty whatever is in found array
  let found = []

  // Loop through each vowel,
  for (let j = 0; j < vowels.length; j++) {

    let vowel = vowels[j]

    // More than one vowels found in country name, so skip to next country
    //  because this one is already not unique.
    if (found.length >= 2) {
      break; // next country
    }

    // IF vowel found in country name
    if (country.toUpperCase().indexOf(vowel) !== -1) {
      found.push(vowel)
    }

  } // end vowels loop

  if (found.length === 1) {
    results.push(country)
  }

} // end countries loop

console.log(`\nResults:`)
console.table(results)
console.log(`There were a total of`,  results.length, `matches of`,countries.length, `countries.`)




/*
ALGORITHM:

DEFINE empty results array (results)
DEFINE array with all the vowels (vowels)
DEFINE empty array to hold all the vowels we found (found)

LOOP through each country name,

  DEFINE country as countries[i]

  SET/RESET found array to empty


  LOOP through all the vowels in vowels array

    DEFINE vowel as the current index of vowels array

    IF there are 2 or more vowels in found array

      STOP PROCESSING and jump to next country name

    END

    CONVERT country name and vowel to uppercase in order to compare
    IF country name contains the current vowel

      PUSH vowel onto found array

    END

  END vowels loop

  ONLY IF there was only one unique vowel found

    PUSH current country name onto results array

END countries loop

OUTPUT results

*/