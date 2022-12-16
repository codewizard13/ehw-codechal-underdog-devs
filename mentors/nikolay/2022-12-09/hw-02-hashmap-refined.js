/*
MENTOR Nikolay:

HOMEWORK: (Assigned: 2022-12-09 as Optional)

What are all of the names that were top 40 baby names in both 1880 and 2020?

NOTES:

- This version solves using hashmap / dict to track name count.
- TIME COMPLEXIT: O(n) because one loop and using hashmap instead of indexOf

ADDED Modifications from Mentor:
- Create a separate function for finding the duplicates. It would accept
  an array as an argument and return a list of duplicates. (This would allow
  us to reuse this functionality in future challenges.)
- Remove unnecessary comments and debug messages (e.g. console.log)

Eric Hepperle
2022-12-16


V1

*/

const fs = require('fs')


/**
 * Main: The main function; controller.
 */
function main() {

  // SLURP FILE DATA INTO ARRAYS
  let babyNames1880File = '../../../docs/baby_names_1880_short.txt'
  let babyNames2020File = '../../../docs/baby_names_2020_short.txt'

  babyNames1880Array = filenameToLines(babyNames1880File)
  babyNames2020Array = filenameToLines(babyNames2020File)

  // JOIN FILES INTO ONE
  joinedArray = [...babyNames1880Array, ...babyNames2020Array]

  // FIND DUPLICATES
  const matchedNames = findDuplicates(joinedArray)

  let testVal = displayResults(babyNames1880Array, babyNames2020Array)


  // DISPLAY HELPFUL CONTEXT IN OUTPUT FOR USER
  console.log(`STARTING VALUES:\n`)
  console.log(`- 1880 Names has`, babyNames1880Array.length, `items.`)
  console.log(`- 2020 Names has`, babyNames2020Array.length, `items.`)
  console.log()
  console.log(`Joing both arrays results in`, joinedArray.length, `items.\n`)

  // OUTPUT RESULTS
  console.log(`These`, matchedNames.length, `results were found`)
  console.log(`in both lists:\n`)
  console.table(matchedNames)

}
main()


function displayResults(args=[]) {

  console.log({args})
  const [names1880, names2020] = args

  // console.log({names1880})
  // console.log({names2020})


}


/// FUNCTIONS

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
 * Filter an array of words / strings and return all the
 * duplicates.
 * 
 * @param {array} words 
 * @returns {array} duplicates
 */
function findDuplicates(words) {

  const duplicates = []
  const foundWords = {}

  // CHECK FOR DUPLICATES (duplicate equals a match)
  for (let i = 0; i < words.length; i++) {

    let currentWord = words[i]

    // ANOTHER WAY: if (foundWords.hasOwnProperty(currentWord)
    if (!(currentWord in foundWords)) {

      foundWords[currentWord] = 1

    } else {

      // ADD currentWord to duplicates array because we've found it twice
      foundWords[currentWord]++

    }

    if (foundWords[currentWord] === 2) {
      duplicates.push(currentWord)
    }

  }

  return duplicates

}




/*
ALGORITHM

DECLARE GLOBAL foundWords hashmap
DECLARE GLOBAL matchedNames array

DECLARE babyNames1880 file
DECLARE babyNames2020 FILE

SLURP babyNames1880 file into array (babyNames1880Array)
SLURP babyNames2020 file into array (babyNames2020Array)

JOIN both arrays into on (joinedArray)

LOOP through joinedArray

  STORE current name as current index of joinedArray

  IF currentName NOT a key in foundWords

    ADD currentName as key in foundWords object
    INITIALIZE currentName value to 1

  ELSE // key DOES exist, so

    INCREMENT key value by one

  END

  IF key value for currentName equals 2 // we found a duplicate!

    ADD currentName to matchedNames array

END joinedArray


RETURN matchedNames

*/