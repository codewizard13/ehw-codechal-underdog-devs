/*
MENTOR Jacob:

Challenge:

What countries both begin and end with a vowel?

Eric Hepperle
2022-11-30

V1

*/

const fs = require('fs')

let filename = '../../../docs/countries.txt'

// Read file into an array of words
const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const countries = fileStr.split('\n') // make array

const results = []






/*
ALGORITHM:

--

*/