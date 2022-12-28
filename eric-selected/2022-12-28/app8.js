/*
ERIC TESTING:

Purpose: Testing CSV parsing libraries for nodejs/javascript

Eric Hepperle
Started: 2022-12-28
Finished: --

This version tests fast-csv

WORKS! OTHER versions may not have been working because I was expecting MOVIES_CSV (which was actually the filename) to be a string in some cases.

V1

TUTORIAL RESOURCES:
- https://c2fo.github.io/fast-csv/docs/introduction/install/
- https://c2fo.github.io/fast-csv/docs/parsing/examples/#first-row-as-headers

*/
const fs = require("fs");
const { EOL } = require('os');
const { parse } = require('fast-csv');


const moviesFile = `${__dirname}/../../docs/top_movies.csv`
// console.log(moviesFile)
const buffer = fs.readFileSync(moviesFile)
const MOVIES_CSV = buffer.toString()


const stream = parse({ headers: true })
  .on('error', error => console.error(error))
  // .on('data', row => console.log(row))
  .on('data', row => console.log(row))
  .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));

stream.write(MOVIES_CSV);
stream.end();

console.log({stream})

