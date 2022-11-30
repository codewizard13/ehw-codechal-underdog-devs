/* 
leetcode-decrypt-str-6.js

https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.


This version fixes errors that were encountered in Leetcode and makes
the corrections work with a local test harness. It incorporates the
fixes learned regarding the "remainder" variable and join().

Eric Hepperle
2022-11-29

*/

/* ----------- CONSOLE LOG STYLES: ----------- */

const styles = {
  error:
    `color: red;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
  correct:
    `color: green;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
  warn:
    `color: orange;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
  bgYellow:
    `background: #ffffb3;` +
    `padding: 1em;` +
    `font-weight: bold;`
  ,
  bgAlice:
    `background: aliceblue;` +
    `padding: 1em;` +
    `font-weight: bold;`
  ,
}

/*
What are all of the countries that have “United” in the name?
*/

/* ----------- Test Values: ----------- */


/*
ALGORITHM:

declare empty results array

slurp countries file into array of strings

Loop through ever country

  if country name contains "United" anywhere in string

    add country to results array

END LOOP

Return / output results

*/
const fs = require('fs')

const results = []

let filename = '../docs/countries.txt'
const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const countries = fileStr.split('\n') // make array

// console.log(countries)

// countries.forEach(country => {

//   if (country.indexOf("United") !== -1) {
//     results.push(country)
//   }

// })

// console.log("Matches:", results)


///

countries.forEach(country => {

  if (country.includes("United")) {
    results.push(country)
  }

})

console.log("Matches:", results)