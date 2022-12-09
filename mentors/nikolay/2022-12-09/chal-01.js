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

console.log("hi")


// dict: {
//   '0': babyName
// }


/*
ALGORITHM

DECLARE matchedNames array

SLURP baby names 1880 into array (babyNames1880)
SLURP baby names 2020 into array (babyNames2020)

LOOP through babyNames2020

  STORE currentBabyName2020

  COMPARE cureentBabyName2020

    IF current2020Name is included in 1880NamesArray
    
      ADD current name to matchedNames array

END

*/



/**
 * Main: The main function; controller.
 */
function main() {


  let babyNames1880File = '../../../docs/baby_names_1880_short.txt'
  let babyNames2020File = '../../../docs/baby_names_2020_short.txt'

  babyNames1880Array = filenameToLines(babyNames1880File)
  babyNames2020Array = filenameToLines(babyNames2020File)

  // console.log({ babyNames2020Array })

  for (let i = 0; i < babyNames2020Array.length; i++) {

    let name2020 = babyNames2020Array[i]
    // console.log()

    if (babyNames1880Array.indexOf(name2020) !== -1) {
      // console.log("Found: ", i, ' ', name2020, "in both!")

      matchedNames.push(name2020)
    }

  }

  console.log(`There were `, matchedNames.length, `results:`)
  console.log({ matchedNames })


}


let matchedNames = []

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




  // const shortestCountryNames = shortestLines(countries)

  // // Output results
  // console.table(shortestCountryNames)
  // console.log(`There were`, shortestCountryNames.length, `of`, countries.length, `countries that had`)
  // console.log(`the shortest country length of`, shortestLength)
