/*
ERIC TESTING: Testing csvtojson, json2csv

Purpose: Testing CSV parsing libraries for nodejs/javascript

Eric Hepperle
Started: 2022-12-28
Finished: --

V1

TUTORIAL RESOURCES:
- https://blog.logrocket.com/complete-guide-csv-files-node-js/
- https://www.npmjs.com/package/csv-parser

*/
const fs = require("fs");
const csvParser = require("csv-parser");

const NBA_CSV = `${__dirname}/../../docs/nba_finals.csv`



const result = [];

// fs.createReadStream(NBA_CSV)
//   .pipe(csvParser())
//   .on("data", (data) => {
//     result.push(data);
//   })
//   .on("end", () => {
//     console.log(result);
//   });

const nbaFinalsDict = csvToJson(NBA_CSV)

console.log({nbaFinalsDict})



/// FUNCTIONS

function csvToJson(filepath) {

  const result = []

  fs.createReadStream(NBA_CSV)
    .pipe(csvParser())
    .on("data", (data) => {
      result.push(data);
    })
    .on("end", () => {
      console.log(result);
    });

  return result

}