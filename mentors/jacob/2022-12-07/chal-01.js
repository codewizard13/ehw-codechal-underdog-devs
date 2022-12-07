/*
MENTOR Jacob:

Challenge:



Eric Hepperle
2022-12-07

V1

*/

const fs = require('fs')

let filename = '../../../docs/countries.txt'

// Read file into an array of words
const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const countries = fileStr.split('\n') // make array

// SAMPLE COUNTRIES ARRAYS FOR TESTING:
// let countries = ["Albania", "Uganda", "Togo", "Zimbabwe", "Beekeeper"]
// let countries = ["Togo"]
// let countries = ["Uganda"]

/*
ALGORITHM:

declare empty results array
slurp countries file into array of strings

// meat here

Return / output results

*/

console.log({ countries })