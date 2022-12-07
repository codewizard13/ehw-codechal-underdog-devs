/* 
MENTOR LUKE

HOMEWORK: Refactor 12-01 code using dictionary or hashmap to do one loop

Eric Hepperle
2022-12-07

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
  console.log(`There were`, shortestCountryNames.length, `of`, countries.length, `countries\n that had the shortest country length of`, shortestLength)

}

let shortestLength = 0

main()







/*
ALGORITHM:

declare empty shortest array

strong shortestLength = ''

slurp countries file into countries array

// Determine shortest length
foreach country

  if first country
    set shortest to this country
  else
    
    if (country.length < shortest.length)

    }

  }

}

*/