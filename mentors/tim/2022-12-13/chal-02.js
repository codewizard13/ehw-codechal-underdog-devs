/*
MENTOR Tim:

Challenge:

Write a function that returns the vowels used by the countries in the order of most used to least used.
If the countries list is:
```
const countries = [
  "France",
  "Belgium",
  "Ghana",
  "China",
]
```
The return value should be `["a", "e", "i", "u"]`


Eric Hepperle
2022-12-13
Completed: 2022-12-19
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





/*
ALGORITHM

SLURP countries file into string (countriesStr)

DEFINE GLOBAL charCount dict

SPLIT countriesStr into a character array

DEFINE vowels array


// BUILD CHAR COUNT DICT
LOOP through each character

  CONVERT char to lowercase (charLower)


  LOOP through each vowel in vowels array


    IF currentVowel matches current char

      // INCREMENT VOWEL COUNTER
      IF charCount has key of current char

        INCREMENT current char val by 1

      ELSE

        ADD current char as key to charCount dict
        INITIALIZE value to 1

      END


    END

    
    BREAK 
    - Once we have identified this char as a vowel, we don't 
      need to check if it is another vowel

  END

END char array loop

// SEARCH DICT AND RETURN RESULTS
SORT DICT entries by value and return

STORE IN results array -> Object.keys(charCount)
  
RETURN dict charCount

*/

// let mostFrequent = Object.keys(dict).sort((a, b) => dict[b] - dict[a])[0]




const vowels = ['a', 'e', 'i', 'o', 'u']

/**
 * Main: The main function; controller.
 */
function main() {

  // SLURP FILE DATA INTO ARRAYS
  const countriesFile = '../../../docs/countries.txt'
  const countries = filenameToLines(countriesFile)
  const countriesStr = countries.join('')
    .replace(EOL, '').replace(/[\s\.,\-]/g, '')

  const charCount = {}

  // Split joined string at characters to get list of all letters in file
  let letterChars = countriesStr.split('')
  let numLettersInFile = letterChars.length
  console.log(`[letterChars, numLettersInFile]:`, [letterChars, numLettersInFile])

  // BUILD CHAR COUNT DICT
  // LOOP through every letter in the file
  for (let i = 0; i < numLettersInFile; i++) {

    let letter = letterChars[i].toLowerCase()
    // console.log(`Letter ${i}: ${letter}`)

    // LOOP over each vowel
    for (let j=0; j < vowels.length; j++) {

      // IF letter is a vowel
      if (letter === vowels[j]) {

        if (letter in charCount) {
          charCount[letter]++
        } else {
          charCount[letter] = 1
        }

      }


    }

  }

  console.log(charCount)
  console.log(Object.keys(charCount)) // [ 'a', 'i', 'e', 'o', 'u' ]

  // REPORT RESULTS

}
main()


