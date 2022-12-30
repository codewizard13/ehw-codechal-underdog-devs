/*
ERIC TESTING: Testing csvtojson, json2csv

Purpose: Testing CSV parsing libraries for nodejs/javascript

Eric Hepperle
Started: 2022-12-28
Finished: --

V1

TUTORIAL RESOURCES:
- https://blog.logrocket.com/complete-guide-csv-files-node-js/

*/
const fs = require("fs");

const NBA_CSV = `${__dirname}/../../docs/nba_finals.csv`

fs.createReadStream(NBA_CSV, { encoding: "utf-8" })
  .on("data", (chunk) => {
    console.log(chunk);
  })
  .on("error", (error) => {
    console.log(error);
  });