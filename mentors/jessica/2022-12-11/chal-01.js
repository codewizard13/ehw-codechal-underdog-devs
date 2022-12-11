/*
Jessica McKellar challenges - 2022-12-11

Challenge:

TODAYS_CODE_CHALLENGE_QUESTION


--- --- ---
TIME COMPLEXITY:

Eric Hepperle
2022-12-11

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


/**
 * Main: The main function; controller.
 */
function main() {

  console.log('*'.repeat(30), `\n`)


  // SLURP FILE DATA INTO ARRAYS
  const babyNames1880File = '../../../docs/baby_names_1880_short.txt'
  const babyNames2020File = '../../../docs/baby_names_2020_short.txt'
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const countriesFile = '../../../docs/countries.txt'

  const babyNames1880 = filenameToLines(babyNames1880File)
  const babyNames2020 = filenameToLines(babyNames2020File)
  const scrabbleWords = filenameToLines(scrabbleWordsFile)
  const countries = filenameToLines(countriesFile)

  console.log({ babyNames1880 })
  console.log({ babyNames2020 })
  console.log({ scrabbleWords })
  console.log({ countries })


  // JOIN FILES INTO ONE
  joinedArray = [...babyNames1880, ...babyNames2020]



  // CHECK FOR DUPLICATES (duplicate equals a match)
  for (let i = 0; i < joinedArray.length; i++) {

    let currentName = joinedArray[i]

    // if (foundWords.hasOwnProperty(currentName)) {
    if (!(currentName in foundWords)) {

      foundWords[currentName] = 1

    } else {

      // ADD currentName to matchedNames array because we've found it twice
      foundWords[currentName]++

    }

    if (foundWords[currentName] === 2) {
      matchedNames.push(currentName)
    }

  }

  // REPORT RESULTS
  console.log(`There were `, matchedNames.length, `results:`)
  console.log({ matchedNames })
  // console.log({ foundWords })

}

let matchedNames = []
const foundWords = {}

main()