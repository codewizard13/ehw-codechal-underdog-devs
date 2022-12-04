/* 
MENTOR JACOB

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