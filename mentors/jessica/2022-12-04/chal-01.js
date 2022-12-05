// import init from '../../../modules/init.js'

// console.log(init.fileCountries)

/*
 Jessica McKellar challenges - 2022-11-27

 This version only concerns refactoring this for lower cost:

 Find the words in matches with longest char length
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

const sampleArr = [
  "BORROW OR ROB?", "BRANCH", "CYST", "DAMMIT, I'M MAD!",
  "DEIFIED", "DIPLOMATIC", "DO GEESE SEE GOD?", "HAIRCUT",
  "HYMN", "LEVEL", "MOSQUITO", "MURDRUM",
  "NON", "POP", "POWER", "SPY", "THY"
]


// https://paper.dropbox.com/doc/Programming-practice-problems-Eric-Hepperle--BuNtP5qTuxeLpxX1V5d9DbPdAg-tPLQO2NkY75TNOgxTM13a

// What country names are > 50% vowels?

/*

slurp countries into array

foreach country in countries

  // Calc percentage of vowels in country name
  
  foreach letter in word check if letter is vowel

    if is vowel 
      increment vowelsCount

  sum vowels Add all counts for country

  if ( percentage = sum / country.length > .50 ) {

    results.push(country)
  }

*/

// console.log(countries)

let vowelsCount = 0
const results = []
countries.forEach(country => {

  vowelsCount = 0

  country.split('').forEach(char => {

    // if char is a vowel , incement voweslCount
    if (
      char.toLowerCase() === 'a'
      || char.toLowerCase() === 'e'
      || char.toLowerCase() === 'i'
      || char.toLowerCase() === 'o'
      || char.toLowerCase() === 'u'
    )
    {
      vowelsCount++
    }

  })


  if (vowelsCount / country.length > .50 ) {
    results.push(country)
  }

})

console.table(results)


