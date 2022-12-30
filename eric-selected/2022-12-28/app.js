/*
ERIC TESTING: Testing csvtojson, json2csv

Purpose: Testing CSV parsing libraries for nodejs/javascript

Eric Hepperle
Started: 2022-12-28
Finished: --

V1

TUTORIAL RESOURCES:
- https://www.youtube.com/watch?v=95wAbrQAm5g

*/

const fs = require('fs')
const csv = require('csvtojson')
const {Parser} = require('json2csv')

// FAILS because csv parser libraries are not installed!