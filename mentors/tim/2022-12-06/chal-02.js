/*
MENTOR Tim:

Challenge:


[ ] What countries use only one vowel in their name (the vowel can be used multiple times)
    - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.


Eric Hepperle
2022-11-23

V2

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

// console.log(countries)

///

/*
ALGO: V4

declare empty results array
declare vowels array A, E, I, O, U

creat object to store found vowel results
Add the following to the object as properties
This is basically a results dictionary

let foundA = false
let foundE = false
let foundI = false
let foundO = false
let foundU = false

WHILE we haven't yet reached end of countries file

  STORE current country as "country"

  LOOP through each vowel in vowels array

    IF country contains vowel

      LET boolean found<thisVowel> = true

    |

  |

  // Before iterating on next word
  IF 

|
*/


const results = []

const vowels = ["A", "E", "I", "O", "U"]

let found = [] // push each unique vowel onto here

countries.forEach((country, i) => {

  // (this could be a function)
  // Loop through each vowel. If found in current
  //   country name
  for (let j=0; j < vowels.length; j++) {

    let vowel = vowels[j]

    if (country.indexOf(vowel) !== -1) {

      found.push(vowel)

    }

  } //

  results.push(country)

})

console.table(results)

// TAKEAWAYS #HOMEWORK:
//
// Breaking down problems and communicating technically
// Data modeling -related


// let countriesWithoutVowels = countries.filter(country => country.match(/AEIOU/))
let countriesWithoutVowels = countries.filter(country => country.toUpperCase().match(/[AEIOU]/))

console.log("countries.length:", countries.length)
console.log("countriesWithoutVowels.length:", countriesWithoutVowels.length)