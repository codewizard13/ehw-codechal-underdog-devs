/*
MENTOR Tim:

Challenge:


[ ] What countries use only one vowel in their name (the vowel can be used multiple times)
    - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.


Eric Hepperle
2022-11-23

V3

*/

const fs = require('fs')

let matches = []
let reg = /GHTLY/
let filename = '../../../docs/countries.txt'
let filtered = []
let needle = 'TYPE'

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Read file into an array of words
const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const countries = fileStr.split('\n') // make array
// let countries = ["Albania", "Uganda", "Togo", "Zimbabwe", "Beekeeper"]
// let countries = ["Togo"]
// let countries = ["Uganda"]




const results = []

const vowels = ["A", "E", "I", "O", "U"]

let found = [] // push each unique vowel onto here

console.log({countries})


// For each country name,
for (let i = 0; i < countries.length; i++) {

  let country = countries[i]

  console.log("Clearing found[] ...")
  found = []

  // (this could be a function)
  // Loop through each vowel,
  for (let j = 0; j < vowels.length; j++) {

    let vowel = vowels[j]

    if (found.length >= 2) {
      console.warn(`Breaking and moving to next country name ...`)
      break; // next country
    }


    console.log(`${country}.indexOf(${vowel}): `, country.indexOf(vowel))

    // IF vowel found in country name
    if (country.toUpperCase().indexOf(vowel.toUpperCase()) !== -1) {
      found.push(vowel)
    }

    console.log({found})
    console.log(`found.length: ${found.length}`)

  } // end vowels loop

  if (found.length === 1) {
    results.push(country)
  }

} // end countries loop

console.log(`\nResults:`)
console.table(results)

console.log("countries.length:", countries.length)