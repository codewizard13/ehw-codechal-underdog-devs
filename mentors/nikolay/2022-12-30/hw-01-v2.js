/*
MENTOR Nikolay: HOMEWORK: 2022-12-30
- Return movies array sorted by distributor with most films

Example Output:


Eric Hepperle
2022-12-30

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
  getMoviesSortedByDistributor(moviesArray, distribDict)


}
main()



function distributorWithMostFilms(filepath) {

  let topDistributor = ''
  let highestFreq = 0

  const distribDict = getMovieCountByDistributor(filepath)
  // console.log({distribDict})
  // return [topDistributor, highestFreq]
  return distribDict


}

function getMovieCountByDistributor(filepath) {

  const moviesArr = parseCSVToArray(filepath)

  const distribDict = {}

  for (let i = 0; i < moviesArr.length; i++) {

    let movie = moviesArr[i]

    let distributor = movie['Distributor'] !== undefined ? movie['Distributor'].toString() : 'MISSING'

    // if (distributor === undefined) {
    //   console.log({"Distributor undefined": {
    //     i, movie, distribDict
    //   }})
    // } else {

    // INCREMENTING key count
    if (distributor in distribDict) {
      distribDict[distributor]++
    } else {
      distribDict[distributor] = 1
    }


    // }


    // // TEST if current
    // if (distribDict[movie.Distributor] > highestFreq) {
    //   highestFreq = distribDict[movie.Distributor]
    //   topDistributor = movie.Distributor
    // }

  }

  const totalExpectedMovieCount = moviesArr.length
  const totalReturnedMovieCount = Object.values(distribDict).reduce((acc, cur) => acc + cur)
  console.log(`Total expected movie count: ${totalExpectedMovieCount}`)
  console.log(`Total Movie Count Returned:`, totalReturnedMovieCount)

  return distribDict

}

/*
// #GOTCHA: WHY AM I GETTING AN UNDEFINED Distributor?
*/

function getMoviesSortedByDistributor(moviesArr, distribDict) {

  // SORT with library array function
  const sortedDistribObjs = Object.entries(distribDict).sort((a, b) => b[1] - a[1])
  console.log({ sortedDistribObjs })

  const sortedMovies = {} // think object may be better than array

  const keys = Object.values(sortedDistribObjs)


  // LOOP over each distrib Key and add to sortedMovies to populate keys in order
  sortedDistribObjs.forEach(entry => {

    const distrib = entry[0]
    const movieCount = entry[1]
    console.log([movieCount, distrib])


    const matchedMovies = moviesArr.filter(movie => movie !== undefined && movie.Distrubutor === distrib)

    // IF current movie count not a key in sortedMovies dict, add it and set value as empty array
    if (!(movieCount in sortedMovies)) { sortedMovies[movieCount] = [] }

    // FOR every movie that matches current distributor, push movie onto current matchedMovies array
    Object.values(moviesArr).forEach(movie => {

      if (movie.Distributor === distrib) {
        matchedMovies.push(movie)
      }

    })

    // ADD current movie result object to sortedMovies at movieCount key array
    sortedMovies[movieCount].push({
      'Distributor': distrib, 'Matched Movies': matchedMovies.length
    })


  })

  const entries = Object.entries(sortedMovies)
  console.log(entries[7])

  console.log({sortedMovies})

  entries.sort((a, b) => parseInt(b[0]) - parseInt(a[0]))

  console.log(`\nsortedMovies:`)
  console.log(sortedMovies)
  // console.log(JSON.stringify(sortedMovies, null, 4));

  return sortedMovies


}


/// FUNCTIONS


function parseCSVToArray(filepath) {

  const CSV_STRING = fs.readFileSync(filepath).toString()

  const result = Papa.parse(CSV_STRING, { header: true });
  const objArr = result.data

  return objArr
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