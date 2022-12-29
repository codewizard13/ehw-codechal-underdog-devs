/*
ERIC TESTING:

Purpose: Testing CSV parsing libraries for nodejs/javascript

Eric Hepperle
Started: 2022-12-28
Finished: --

This version tests papaparse

- SYNCHRONOUS approach

WORKS! Uses papaparse with headers flag and returns result.data

V1

TUTORIAL RESOURCES:
- https://www.npmjs.com/package/papaparse
- https://www.papaparse.com/#header
- https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings

*/
const fs = require("fs");
const Papa = require("papaparse");

const moviesFile = `${__dirname}/../../docs/top_movies.csv`



function main() {

  const moviesArray = csvToObjArray(moviesFile).data

  const chosenDistributor = "DreamWorks"


  const testMovies = moviesArray.slice(0, 9)
  testMovies.push({
    Title: 'Eric Test Movie 1',
    Distributor: 'Pretend Company',
    'Release Date': '2015',
    'US Sales': '936662225',
    'US Sales': '999999999',
    'World Sales': '2069521700',
    Runtime: '2 hr 18 min',
    Rating: 'PG-13'
  })
  // console.log(testMovies)

  // Q: What movies on this list were distributed by DreamWorks?
  // const dreamworksMovies = getMoviesByDistributor(moviesArray, chosenDistributor)
  // console.log('\nMovies Disstributed by Dreamworks:\n')
  // console.table(dreamworksMovies)

  // Q: What is the highest grossing movie from Universal Pictures, domestically?
  const highestUSGrossingMovies = getHighestDomestingGrossingMovies(moviesArray)
  // const highestUSGrossingMovies = highestUSGrossWithSort(moviesArray)
  // console.log(`\nThe Highest Domesting Grossing Movies`)
  // console.log(`(USD`, usd(highestUSGrossingMovies[0]['US Sales']), `) are:\n`)
  console.log(highestUSGrossingMovies)

}
main()


/// FUNCTIONS


function usd(num) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(num)
}

// This version is testing my data source with sort() array method
function highestUSGrossWithSort(moviesArray) {

  let highestGrossingMovies = []

  moviesArray.forEach(movie => console.log(movie['US Sales']))

  // highestGrossingMovies = moviesArray.sort((a, b) => a['US Sales'] - b['US Sales'])

  // return highestGrossingMovies

}

// O(N)
function getHighestDomestingGrossingMovies(moviesArray) {

  let highestGrossingMovies = []

  moviesArray.forEach((movieObj, i) => {

    let { ['US Sales']: currentSales } = movieObj
    // console.log({sales})

    const prevHighestSales = highestGrossingMovies[0] !== undefined ? highestGrossingMovies[0]['US Sales'] : 0

    // DEBUG
    console.log(`THIS movie sales: ${usd(currentSales)}`, `----- HIGHEST SALES SO FAR: ${usd(prevHighestSales)}`)

    // MAKE SURE WE HAVE A CURRENT SALES value before doing the sort conditional
    if (currentSales !== undefined) {

      if (highestGrossingMovies.length === 0 || currentSales === prevHighestSales) {

        if (highestGrossingMovies.length === 0) { console.log(`   highestGrossingMovies.length === 0`) }
        if (highestGrossingMovies[0] !== undefined && currentSales === prevHighestSales) { console.log(`   currentSales === prevHighestSales`) }
  
        highestGrossingMovies.push(movieObj)
      } else if (currentSales > prevHighestSales) {
        highestGrossingMovies = [movieObj]
      }

    }



  })

  return highestGrossingMovies
}



function getMoviesByDistributor(moviesArray, distributor) {

  const results = []

  moviesArray.forEach((movieObj, i) => {
    const { Distributor, Title } = movieObj
    // console.log('Distributor:', Distributor )
    // console.log(`Movie ${i}:`, movieObj.Distributor )
    // console.log({distributor})
    if (Distributor === distributor) {
      results.push(Title)
    }
  })

  return results

}




/**
 * Slurp CSV file into string.
 * Default delimiter is comma.
 * 
 * @param {string} filepath 
 * @returns string
 */
function csvToObjArray(filepath) {

  const csvString = fs.readFileSync(filepath).toString()
  const result = Papa.parse(csvString, { header: true });
  return result

}