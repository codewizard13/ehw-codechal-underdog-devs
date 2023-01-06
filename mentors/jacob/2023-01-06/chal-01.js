/*
MENTOR Jacob: CHALLENGE: 2023-01-06

What is the earliest year on this list, and what were the films from that year?

Programmer: Eric Hepperle

V1

*/

/*
ALGORITHM:

/// HIGH LEVEL ///
SLURP CSV file into array of lines (CSV)
PARSE array into array of row objects (movies)

SORT movies array by Release Date property, low to high
a -b

GET earliest year from sort results

FILTER and return movies where release date is the earliest year (array of movie objects)

*/


function getFilteredMovies(moviesArr) {

  // SORT movies
  

  // FILTER movies

  // RETURN filtered movies

}

function getEarliestYear(moviesArr) {}

function getMoviesForYear(moviesArr, year) {

  // TODO ... ensure year is INT
  return moviesArr.filter(movie => parseInt(movie['Release Date']) === year)

}

module.exports = {
  getFilteredMovies, getEarliestYear, getMoviesForYear
}











// ERIC'S JS code library
const { filenameToLines, parseCSVToArray } = require('../../../common/io')

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

  // console.log(`\n\n${horzrule}`)

  // console.log(moviesArray[0])


}
main()


