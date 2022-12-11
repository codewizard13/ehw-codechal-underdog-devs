/*
MENTOR Nikolay:

Challenge:

What are all of the names that were top 40 baby names in both 1880 and 2020?

Eric Hepperle
2022-12-09

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

    if (foundWords.indexOf(currentName) === -1) {

      foundWords.push(currentName)

    } else {

      // ADD currentName to matchedNames array because we've found it twice
      matchedNames.push(currentName)

    }

  }

  // REPORT RESULTS
  console.log(`There were `, matchedNames.length, `results:`)
  console.log({ matchedNames })
  console.log({ foundWords })

}


let matchedNames = []
const foundWords = []

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

DECLARE matchedNames array

DECLARE namesCounter object (dict)

SLURP baby names 1880 into array (babyNames1880)
SLURP baby names 2020 into array (babyNames2020)

LOOP through babyNames2020Array

  IF name2020 is not a current key in dict

    ADD key to dict
    INITIALIZE value to 1

  ELSE

    INCREMENT value by 1
    
  END

  IF dict current key (name2020) value === 2

    ADD name2020 to MatchedNames array

  END


END 2020 loop

RETURN matchedNames




























LOOP through babyNames2020

  STORE currentBabyName2020

  COMPARE cureentBabyName2020

    IF current2020Name is included in 1880NamesArray
    
      ADD current name to matchedNames array

END

*/