/*
MENTOR Tim:

Challenge:


[ ] What countries use only one vowel in their name (the vowel can be used multiple times)
    - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.


Eric Hepperle
2022-11-23


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

console.log(countries)

/*
ALGO:

declare empty results array

Loop through each country name

  IF country has at least one vowel

    OF the set of available vowels we are checking,
     do more than one members of the set appear in name
     
     - START at index 0 (left) of country name and work right
     - WHEN we encounter a vowel record which vowel was found

    FOR each vowel in vowel array

      IF current char of country name matches current vowel

        RECORD /store which vowel was found
        - boolean foundA
        - foundE
        - foundI ...   


        THEN check if next vowel present

     IF ONLY ONE vowel was found
     - ! 
     
        ADD current country to results array

*/

///

/*
ALGO: V3

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

let vowelsFound = {}

for (let i=0; i < countries.length; i++) {

  let country = countries[i]

  vowels.forEach((vowel, j) => {

    if (country.indexOf(vowel) !== -1) {

      vowelsFound.vowel = true

    }

  })


  // if ()

  vowelsFound = {}

}

console.log({vowelsFound})


// Breaking down problems and communicating technically

// Data modeling -related


// let countriesWithoutVowels = countries.filter(country => country.match(/AEIOU/))
let countriesWithoutVowels = countries.filter(country => !country.toLocaleUpperCase().match(/[AEIOU]/))

console.log("countries.length:", countries.length)
console.log("countriesWithoutVowels.length:", countriesWithoutVowels.length)