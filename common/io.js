const fs = require('fs')
/// FUNCTIONS ///

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

module.exports = {
  filenameToLines: filenameToLines
}