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
console.log(result.data);

