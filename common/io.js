const fs = require("fs");
const path = require('path')
// CSV parsing library
const Papa = require("papaparse");

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


/**
 * 
 * @param {string} filepath 
 * @returns {array} objArr: array of row objects
 */
 function parseCSVToArray(filepath) {

  const CSV_STRING = fs.readFileSync(filepath).toString()

  const result = Papa.parse(CSV_STRING, { header: true });
  const objArr = result.data

  return objArr
}



module.exports = {
  filenameToLines: filenameToLines,
  parseCSVToArray: parseCSVToArray
}