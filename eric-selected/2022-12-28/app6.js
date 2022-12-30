/*
ERIC TESTING: Testing csvtojson, json2csv

Purpose: Testing CSV parsing libraries for nodejs/javascript

Eric Hepperle
Started: 2022-12-28
Finished: --

This version tests node-csv

GOTCHA: NOT PRINTING HEADERS!

V1

TUTORIAL RESOURCES:
- https://csv.js.org/parse/#usage

*/
const fs = require("fs");
const {parse} = require('csv-parse')
const {dirname} = require('path')
const { fileURLToPath} = require('url')

const MOVIES_CSV = `${__dirname}/../../docs/top_movies.csv`



// const DIRNAME = dirname(fileURLToPath(import.meta.url));

const parser = parse({delimiter: ','}, function(err, data){
  console.log(data);
});

// fs.createReadStream(DIRNAME +'/fs_read.csv').pipe(parser);
fs.createReadStream(MOVIES_CSV).pipe(parser);