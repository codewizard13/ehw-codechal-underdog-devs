/*
MENTOR Nikolay: CHALLENGE: 2022-12-23

???


Eric Hepperle
2022-12-23

V1

*/

const fs = require('fs')


/**
 * Main: The main function; controller.
 */
function main() {

  // SLURP FILE DATA INTO ARRAY
  const scrabbleFile = '../../../docs/sowpods.txt'
  const scrabbleWords = filenameToLines(scrabbleFile)

  const testArray = // CREATE MVP of test words here


  /// DO STUFF...


  // OUTPUT RESULTS
  console.table(matches)

}
main()



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
