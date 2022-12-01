/* 


Eric Hepperle
2022-12-01

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
What is the shortest country name? Make sure your solution can handle ties.
*/

/* ----------- Test Values: ----------- */


/*
ALGORITHM:

declare empty shortest array

strong shortestLength = ''

slurp countries file into countries array

// Determine shortest length
foreach country

  if first country
    set shortest to this country
  else
    
    if (country.length < shortest.length)

    }

  }

}

// filter all countries for results that match shortest length
foreach country (if country.length === shortestLength) {
  results.push(country) 

}


return results

*/
const fs = require('fs')

let shortestLength

const results = []

let filename = '../../../docs/countries.txt'
const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const countries = fileStr.split('\n') // make array
// countries.push("Cat")


///

countries.forEach((country, i) => {

  // console.log(`${country}.length`, country.length)

  if (i === 0) {
    shortestLength = country.length
  } else {
    if (country.length < shortestLength) {
      shortestLength = country.length
    }
  }

  // console.log({shortestLength})

})

countries.forEach((country, i) => {
  if (country.length === shortestLength) {
    results.push(country)
  }
})

let newResults = countries.filter(country => country.length === shortestLength)
console.log({newResults})


// foreach country (if country.length === shortestLength) {
//   results.push(country) 

// }

console.log({shortestLength})

console.log("Matches:", results)


/*
Homework: use dictionary or hashmap to do one loop

NEXT WEEK: Discuss other approaches

*/