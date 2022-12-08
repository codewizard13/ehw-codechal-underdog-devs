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

  let shortestLines = []

  let shortestLength = 0

  lines.forEach((line, i) => {

    if (i === 0) {
      shortestLength = line.length
      shortestLines.push(line)
    } else if (line.length < shortestLength) {
      shortestLength = line.length
      shortestLines = [line] // clear shortest array
    } else if (line.length === shortestLength) {
      shortestLines.push(line)
    }

  })

  // const filtered = lines.filter(line => line.length === shortestLength)
  // return filtered

  return shortestLines
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

DEFINE array shortestCountries

// Determine shortest name length
LOOP through every country in countries

  IF this is the first country name

    SET shortest length to current country name length

  OTHERWISE

    IF current country name length is LESS than the shortest length so far,

      SET shortest length to current country name length
      clear shortestCountries array

      IF we have a next value (line) in array          
      
      ELSE length is > or = current length

        store current item somewhere, shortestCountries


      7, 7, 11, 4
        

    END

  END

END lines loop


IF first item

  add current country to shortestCountries

IF current country.length < shortestCountries[0].length

  clear shortestCountries

  add current country to shortestCountries

ELSE IF CURRENT country length equals shortest length

    add current country to shortestCountries

ELSE

  continue







// Find countries with name length equal to shortest length
DEFINE filtered results array (filtered)

LOOP through each country name

  IF current country name length equals shortest length

    ADD country to filtered results

  END

END second loop through country names


RETURN filtered results matches
*/