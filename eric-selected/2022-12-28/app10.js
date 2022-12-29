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

*/
const fs = require("fs");
const Papa = require("papaparse");

const moviesFile = `${__dirname}/../../docs/top_movies.csv`

function main() {

  const chosenDistributor = "DreamWorks"

  const moviesDict = csvToObjArray(moviesFile).data

  // console.log(moviesDict[0].Distributor)
  // console.log(moviesDict[0]['Release Date'])

  // console.log(moviesDict)

  const first10 = moviesDict.slice(0, 3)
  console.log(first10)


  getMoviesByDistributor(moviesDict, chosenDistributor)


}
main()


/// FUNCTIONS


function getMoviesByDistributor(moviesDict, distributor) {

  const results = []
  // console.log(Array.isArray(results))

  // const first10 = moviesDict.slice(0, 3)
  // console.log(first10)

}



function csvToObjArray(filename) {

  const csvString = fs.readFileSync(filename).toString()

  const result = Papa.parse(csvString, { header: true });

  return result
}