/*
MENTOR Tim: CHALLENGE 2022-12-20

Challenge:

???

Programmer: Eric Hepperle
Started:    2022-12-20

V1

*/

const { EOF } = require('dns')
const fs = require('fs')
const { EOL } = require('os')

/**
 * Return lines array from file
 * 
 * @args: {string} filename
 * @return: {array} lines
 */
function filenameToLines(filename) {

  const buffer = fs.readFileSync(filename)
  const fileStr = buffer.toString()
  const lines = fileStr.split('\n') // make array

  return lines

}

/* ALGORITHM IN OWN FILE */


const vowels = ['a', 'e', 'i', 'o', 'u']

/**
 * Main: The main function; controller.
 */
function main() {

  // SLURP FILE DATA INTO ARRAY
  const scrabbleFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(countriesFile)
  
  // DO MAIN STUFF

  // REPORT RESULTS

}
main()

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

