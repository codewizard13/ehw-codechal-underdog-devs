/*
Jessica McKellar challenges - 2022-12-18

Challenge:



--- --- ---
TIME COMPLEXITY:

Eric Hepperle
2022-12-18

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

  const results = []


  // SLURP FILE DATA INTO ARRAY
  const scrabbleWordsFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleWordsFile)

  console.log({ scrabbleWords })



} // END main


main()


/*
ALGORITHM

DEFINE GLOBAL set foundCountries

SLURP country file contents into array (countries)

LOOP through countries

  ADD currentCountry to foundCountries


  








END loop




*/