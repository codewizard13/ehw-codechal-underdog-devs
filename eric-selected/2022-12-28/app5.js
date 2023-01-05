/*
ERIC TESTING: Testing csvtojson, json2csv

Purpose: Testing CSV parsing libraries for nodejs/javascript

Eric Hepperle
Started: 2022-12-28
Finished: --

GOTCHA: DOESN'T work without "needle" package which I don't want to install

V1

TUTORIAL RESOURCES:
- https://blog.logrocket.com/complete-guide-csv-files-node-js/
- https://www.npmjs.com/package/csv-parser

*/
const fs = require("fs");
const csvParser = require("csv-parser");



const MOVIES_CSV = `${__dirname}/../../docs/top_movies.csv`




const result = [];

const url = "https://people.sc.fsu.edu/~jburkardt/data/csv/deniro.csv";

needle
  .get(url)
  .pipe(csvParser())
  .on("data", (data) => {
    result.push(data);
  })
  .on("done", (err) => {
    if (err) console.log("An error has occurred");
    else console.log(result);
  });