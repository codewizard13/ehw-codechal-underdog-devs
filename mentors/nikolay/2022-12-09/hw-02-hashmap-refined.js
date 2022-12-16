/*
MENTOR Nikolay:

Challenge:

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

  // SLURP FILE DATA INTO ARRAYS
  let babyNames1880File = '../../../docs/baby_names_1880_short.txt'
  let babyNames2020File = '../../../docs/baby_names_2020_short.txt'

  babyNames1880Array = filenameToLines(babyNames1880File)
  babyNames2020Array = filenameToLines(babyNames2020File)

  // JOIN FILES INTO ONE
  joinedArray = [...babyNames1880Array, ...babyNames2020Array]
  console.log(`1880 Names has ${babyNames1880Array.length} items`)
  console.log(`2020 Names has ${babyNames2020Array.length} items`)
  console.log(`Joined Array has ${joinedArray.length} items`)
  console.log()


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
  console.clear()
  console.log(`There were `, matchedNames.length, `results:`)
  console.log({ matchedNames })
  // console.log({ foundWords })

}

let matchedNames = []
const foundWords = {}

main()


/*

HOMEWORK

if name doesn't exist as a key
  add key to object
  set value to 1
else
  increment keys value by 1


wHAT IS TIME COMPLEXITY?


*/




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