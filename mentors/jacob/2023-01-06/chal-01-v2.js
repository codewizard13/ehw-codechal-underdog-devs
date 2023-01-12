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

const horzrule = `\n\n` + "*".repeat(30) + `\n`



/**
 * Main: The main function; controller.
 */
function main() {

  console.log(horzrule)

  const matchedMovies = getFilteredMovies(moviesArray)
  const earliestYear = matchedMovies[0]['Release Date']

  // console.log(getMoviesForYear(moviesArray, 2005))

  console.log(`The earliest year for top grossing movies was ${earliestYear}`)
  console.log('The movies for that year were:')
  console.log(matchedMovies)

  printTitleAndYearFancy(matchedMovies)

  printTitleAndYearFancy(getMoviesForYear(moviesArray, 2005))

}
if (require.main === module) {
  main();
}



function printTitleAndYearFancy(moviesArr) {
  // Print Headers
  console.log('\nFormatted Nicely:\n')
  console.log(("Movie Title").padEnd(60, ' '), '| Release Year')
  console.log(('-'.repeat(61)) + '+' + '-'.repeat(14))


  moviesArr.forEach((movie, i) => {

    const displayTitle = trunc(movie.Title, 50)
    const releaseDate = movie['Release Date']

    console.log(displayTitle.padEnd(60, ' '), `| ${releaseDate}`)

  })
}



function moviesSortedByLongestTitle(moviesArr) {
  return moviesArr.sort((a, b) => b.Title.length - a.Title.length)
}
const longTitleMovies = moviesSortedByLongestTitle(moviesArray)[0]
console.log(`\nThe longest movie title is`, longTitleMovies.Title, `at`, longTitleMovies.Title.length, 'chars.')



function printLongestMovieLengths(moviesArr, maxMovies = 10) {
  const matchedMovies = moviesSortedByLongestTitle(moviesArr)

  console.log(`\n****** TOP ${maxMovies} MOVIES with Longest Title ******\n`)

  for (let i = 0; i <= maxMovies && i < moviesArr.length; i++) {
    let movie = moviesArr[i]
    let movieTitle = movie.Title
    let titleLength = movie.Title.length
    console.log(`${trunc(movieTitle, 50)} has length of`, titleLength)
  }
}
printLongestMovieLengths(moviesArray)



function trunc(string, limit) {

  // Don't truncate if string within limit
  if (string.length <= limit) {
    return string
  } else {
    const shortened = string.slice(0, limit)
    return shortened + '...'
  }
}



/// FUNCTIONS

function getFilteredMovies(moviesArr, yearSelectionFunction=getEarliestYear) {

  const year = yearSelectionFunction(moviesArr)

  const matchedMovies = getMoviesForYear(moviesArr, year)

  return matchedMovies

}

function getLatestYear(moviesArr) {

  const sorted =  moviesArr.sort((a, b) => b['Release Date'] - a['Release Date'])
  const latest = sorted[0]
  const latestYear = parseInt(latest['Release Date'])

  return latestYear

}

function earliestMovieComparator(a, b) {
  return parseInt(a['Release Date']) - parseInt(b['Release Date'])
}

// const earliestMovieComparator2 = (a, b) => parseInt(a['Release Date']) - parseInt(b['Release Date']

function getEarliestYear(moviesArr) {

  // const sorted =  moviesArr.sort((a, b) => a['Release Date'] - b['Release Date'])
  const sorted = moviesArr.sort(earliestMovieComparator)
  const earliest = sorted[0]
  const earliestYear = parseInt(earliest['Release Date'])

  return earliestYear

}



function getMoviesForYear(moviesArr, year) {

  // TODO ... ensure year is INT
  return moviesArr.filter(movie => parseInt(movie['Release Date']) === year)

}



module.exports = {
  getFilteredMovies, getEarliestYear, getMoviesForYear, getLatestYear
}