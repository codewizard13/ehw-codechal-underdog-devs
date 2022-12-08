/* 
MENTOR LUKE

HOMEWORK: Refactor 12-01 code using dictionary or hashmap to do one loop

This version has changes Luke helped me with

Eric Hepperle
2022-12-08

*/


/*
What is the shortest country name? Make sure your solution can handle ties.
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
 * Get shortest lines(s)
 * - If there are ties, return all lines that match shortest length.
 *
 * @arg: {array} lines
 * @return: {array} filtered
 */
function shortestLines(lines) {

  lines.forEach((line, i) => {

    // console.log(`${line}.length`, line.length)

    if (i === 0) {
      shortestLength = line.length
    } else {
      if (line.length < shortestLength) {
        shortestLength = line.length
      }
    }

  })

  const filtered = lines.filter(line => line.length === shortestLength)

  return filtered
}


/**
 * Main: The main function; controller.
 */
function main() {


  let countriesPath = '../../../docs/countries.txt'
  let countries = filenameToLines(countriesPath)

  const shortestCountryNames = shortestLines(countries)

  // Output results
  console.table(shortestCountryNames)
  console.log(`There were`, shortestCountryNames.length, `of`, countries.length, `countries that had`)
  console.log(`the shortest country length of`, shortestLength)

}

let shortestLength = 0

main()



/*
ALGORITHM:

DEFINE PATH to countries file (countriesPath)
SLURP countries file into array (countries)
DEFINE global shortest length variable and initialize to zero (shortestLength)


// Determine shortest name length
LOOP through every country in countries

  IF this is the first country name

    SET shortest length to current country name length

  OTHERWISE

    IF current country name length is LESS than the shortest length so far,

      SET shortest length to current country name length

    END

  END

END lines loop


// Find countries with name length equal to shortest length
DEFINE filtered results array (filtered)

LOOP through each country name

  IF current country name length equals shortest length

    ADD country to filtered results

  END

END second loop through country names


RETURN filtered results matches
*/