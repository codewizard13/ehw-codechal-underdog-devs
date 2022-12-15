/* 
MENTOR JACOB

ALGORITHM / BUSINESS LOGIC is same

Functionize


Eric Hepperle
2022-12-07

*/


/*
What are all of the countries that have “United” in the name?
*/


/*
ALGORITHM:

declare empty results array

slurp countries file into array of strings

Loop through ever country

  if country name contains "United" anywhere in string

    add country to results array

END LOOP

Return / output results

*/
const fs = require('fs')
const process = require('process');

/**
 * f("hello") => "HELLO"
 * 
 * @args: string
 * @return: string (in uppercase)
 */
function allCaps(inputStr) {
  return inputStr.toUpperCase()
}

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
 * Find matches
 * 
 * @args: {array} array of strings
 * @returns: {array} filtered array of strings
 */
function findLinesContainingString(lines, needle) {

  let filtered = []

  lines.forEach(line => {

    if (line.includes(needle)) {
      filtered.push(line)
    }

  })
  return filtered
}





// let countriesPath = '../../../docs/countries.txt'
// console.log(process.argv[1])

const myArgs = process.argv
console.log({myArgs})

let argHaystack = myArgs[2]
let argNeedle = myArgs[3]

let countries = filenameToLines(argHaystack)

const results = findLinesContainingString(countries, argNeedle)

console.log("Results:", results)



// refactoring
