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






/**
 * Main: The main function; controller.
 */
function main() {

  // SLURP FILE DATA INTO ARRAYS
  // SLURP FILE DATA INTO ARRAYS
  const babyNames1880File = '../../../docs/baby_names_1880_short.txt'
  const babyNames2020File = '../../../docs/baby_names_2020_short.txt'
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const countriesFile = '../../../docs/countries.txt'

  const babyNames1880 = filenameToLines(babyNames1880File)
  const babyNames2020 = filenameToLines(babyNames2020File)
  const scrabbleWords = filenameToLines(scrabbleWordsFile)
  const countries = filenameToLines(countriesFile)

  console.log(countries)

  // // REPORT RESULTS
  // console.clear()
  // console.log(`There were `, matchedNames.length, `results:`)
  // console.log({ matchedNames })
  // // console.log({ foundWords })

}

let matchedNames = []
const foundWords = {}

main()


