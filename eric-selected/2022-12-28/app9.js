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
const MOVIES_CSV = fs.readFileSync(moviesFile).toString()

const result = Papa.parse(MOVIES_CSV, {header: true});
const moviesDict = result.data
// console.log(moviesDict);

const chosenDistributor = "DreamWorks"
console.log(moviesDict[0].Distributor)
console.log(moviesDict[0]['Release Date'])

function getMoviesByDistributor(moviesDict, distributor) {

  console.log(Array.isArray(moviesDict))


  const results = []
  console.log(Array.isArray(results))

  const first10 = moviesDict.slice(0, 3)
  return first10

  

}

getMoviesByDistributor(moviesDict, chosenDistributor)
