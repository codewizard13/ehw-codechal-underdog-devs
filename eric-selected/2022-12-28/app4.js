/*
ERIC TESTING: Testing csvtojson, json2csv

Purpose: Testing CSV parsing libraries for nodejs/javascript

Eric Hepperle
Started: 2022-12-28
Finished: --

GOTCHA: FILESTREAM not pushing any data onto the result array

V1

TUTORIAL RESOURCES:
- https://blog.logrocket.com/complete-guide-csv-files-node-js/
- https://www.npmjs.com/package/csv-parser

*/
const fs = require("fs");
const csvParser = require("csv-parser");



function main() {
  const moviesFile = `${__dirname}/../../docs/top_movies.csv`

  const moviesDict = csvToJson(moviesFile)
  console.log({moviesDict})


}main()



/* CHALLENGE QUESTION:
What movies on this list were distributed by DreamWorks?
*/

function getMoviesByDistributor(moviesDict) {

  const results = []

  for (const prop in moviesDict) {
    console.log(`${prop}: ${obj[prop]}`)
  }

}

// console.log(getMoviesByDistributor(moviesDict))


/// FUNCTIONS

function csvToJson(filepath) {

  const result = []

  fs.createReadStream(filepath)
    .pipe(csvParser())
    .on("data", (data) => {
      // console.log(`PUSING DATA ...`)
      result.push(data);
    })
    .on("end", () => {
      // console.log(result);
      console.log('END OF DATA')
    });

    console.log(result)
  return result

}