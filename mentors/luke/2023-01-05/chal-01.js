/*
MENTOR Luke: CHALLENGE: 2023-01-05


Programmer: Eric Hepperle

V1

*/

const fs = require("fs");
const path = require('path')

// CSV parsing library
const Papa = require("papaparse");

// ERIC'S JS code library
const { filenameToLines } = require('../../../common/io')

const moviesFile = `${__dirname}/../../../docs/top_movies.csv`


const testMovies = [
  {
    Title: 'The Twilight Saga: Breaking Dawn - Part 2',
    Distributor: 'Lionsgate',
    'Release Date': '2012',
    'US Sales': '111111',
    'World Sales': '829747654',
    Runtime: '1 hr 55 min',
    Rating: 'PG-13'
  },
  {
    Title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    Distributor: 'Walt Disney Studios Motion Pictures',
    'Release Date': '2005',
    'US Sales': '333333333',
    'World Sales': '745013115',
    Runtime: '2 hr 23 min',
    Rating: 'PG'
  },
  {
    Title: 'Man of Steel',
    Distributor: 'DreamWorks',
    'Release Date': '2013',
    'US Sales': '5000',
    'World Sales': '668045518',
    Runtime: '2 hr 23 min',
    Rating: 'PG-13'
  }
]

const moviesArray = parseCSVToArray(moviesFile)

const horzrule = "*".repeat(30)



/**
 * Main: The main function; controller.
 */
function main() {

  console.log(`\n\n${horzrule}`)

  const distribDict = distributorWithMostFilms(moviesFile)
  // console.log({distribDict})
  sortDistribByMostFilms(moviesArray, distribDict)


}
main()


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