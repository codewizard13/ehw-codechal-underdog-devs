/*
MENTOR Jacob:

HOMEWORK: Functionize What countries both begin and end with a vowel?

Eric Hepperle
2022-12-07

V1

*/


const fs = require('fs')

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

// let countries = ["Albania", "Uganda", "Togo", "Zimbabwe", "Beekeeper", "Afghanistan"]

const vowels = ["A", "E", "I", "O", "U"]

/**
 * Check if a character is a vowel or not.
 * 
 * @param {char} char 
 * @returns {bool}
 */
function isVowel(char) {
  if (vowels.indexOf(char) !== -1) {
    return true
  }
  return false
}

const results = []






/**
 * Main: The main function; controller.
 */
function main() {

  // SLURP FILE DATA INTO ARRAYS
  const countriesFile = '../../../docs/countries.txt'
  const countries = filenameToLines(countriesFile)

  for (let i = 0; i < countries.length; i++) {

    let country = countries[i].toUpperCase()
    let firstChar = country[0].toUpperCase()
    let lastChar = country[country.length - 1].toUpperCase()
  
    // console.log(`country:`, country, ` -- firstChar:`, firstChar, `| lastChar:`, lastChar)
  
    if (!isVowel(firstChar)) { continue }
    if (!isVowel(lastChar)) { continue }
  
    results.push(country)
  
  }
  
  console.table(results)
  console.log(`\nOut of`, countries.length, `countries`, results.length, `both start and end with a vowel.`)

}

main()


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