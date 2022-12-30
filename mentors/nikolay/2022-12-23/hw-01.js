/*
MENTOR Nikolay: HOMEWORK: 2022-12-23
- For next week write a function to parse CSV
- Consider whether to use library or write brute force

Eric Hepperle
2022-12-23

V1

*/

const fs = require("fs");

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





/**
 * Main: The main function; controller.
 */
function main() {

  // PARSE CSV file with papaparse library
  parsedWithLibrary()

  // PARSE CSV with hand-coded parser
  parsedWithBruteForce()

}
main()





// Take in filepath and return array of objects
function ericParseCSV(filepath) {

  const objArr = []

  const linesArr = filenameToLines(filepath)

  const headers = linesArr.shift().trim().split(',')
  const rows = linesArr

  console.log([headers])

  for (let i = 0; i < rows.length; i++) {

    let row = rows[i].trim()
    let thisObj = {}
    let cols = row.split(',')
    // console.table(cols)

    for (let j = 0; j < cols.length; j++) {

      let colVal = cols[j]

      thisObj[headers[j]] = colVal


    }

    objArr.push(thisObj)

    if (i === 4) { break }

  }

  console.log(objArr)



}





function parsedWithBruteForce() {

  let msg = `THIS VERSION USES A PARSER I DESIGNED AND CODED FROM SCRATCH`
  console.log(`\n${msg}\n`)

  ericParseCSV(moviesFile)
}



function parsedWithLibrary() {

  let msg = `THIS VERSION USES THE PAPAPARSE LIBRARY`
  console.log(`\n${msg}\n`)

  // Q: What movies on this list were distributed by DreamWorks?
  const dreamworksMovies = getMoviesByDistributor(moviesArray, "DreamWorks")
  console.log(`MATCHED MOVIES: `)

  // dreamworksMovies.forEach(movie => console.log(movie.Title))
  const filtered = moviesArray.filter(movie => movie.Distributor === "DreamWorks")
  // console.log("DreamWorks movies: ", filtered)

  // Q: What is the highest grossing movie from Universal Pictures, domestically?
  const highestGrossing = highestUSSales(moviesArray)
  console.log("Highest US Sales:", highestGrossing)

}






/// FUNCTIONS


function parseCSVToArray(filepath) {

  const MOVIES_CSV = fs.readFileSync(moviesFile).toString()

  const result = Papa.parse(MOVIES_CSV, { header: true });
  const moviesArray = result.data

  return moviesArray
}



function highestUSSales(moviesArray) {

  const filtered = moviesArray.sort((a, b) => parseInt(b['US Sales']) - parseInt(a['US Sales']))[0]
  return filtered

}


function getMoviesByDistributor(moviesArray, distributor) {

  const matches = []

  moviesArray.forEach(movie => {

    if (movie.Distributor === distributor) {
      matches.push(movie)
    }

  })

  return matches

}