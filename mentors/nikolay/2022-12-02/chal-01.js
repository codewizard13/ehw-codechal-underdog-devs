/* 


Eric Hepperle
2022-12-02

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
What is the shortest baby name in the top 40 baby names for 2020

EDGE CASES:

- Empty file
- blank lines in file

- garbage characters

*/

const fs = require('fs')


const results = []

let filename = '../../../docs/baby_names_2020_short.txt'
const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const names = fileStr.split('\n') // make array
// countries.push("Cat")

/* ----------- Test Values: ----------- */


/*
ALGORITHM:

declare shortestLength = 0
results = []

slurp file into names array

// FIND shortest length
foreach name in names 

  if (first element)
    shortestLength = currentName.length
  else
    (if shortest.length < currentName.length)
      shortestLength = currentName.length


// Return all names in array that have length == shortest length 

foreach name in names
  if name.length === shortestLength
    results.push(name)



*/


// let shortestLength = 0
// // console.log({names})

// names.forEach((name, i) => {

//   if (name.length > 0 && name !== undefined) {
//     if (i === 0) {
//       shortestLength = name.length
//     } else {
//       if (shortestLength > name.length) {
//         shortestLength = name.length
//       }
//     }

//   }

// })

// console.log({ shortestLength })



// const shortestNames = names.filter(name => name.length == shortestLength)

// const shortNames = []

// for (let i = 0; i < names.length; i++) {
//   if (names[i].length == shortestLength) {
//     shortNames.push(names[i])
//   }
// }

// console.log({ shortestNames })
// console.log({ shortNames })


///

// Time complexity
// File length = n
// First loop line by line, go through once. linear time complexity
/*
go once from top to bottom

First loop is linear time complexity

RESEARCH time complexity
2N

*/

/*

function accepts a filename and returns shortestName(s)

*/


function getShortestName(filename) {

  const buffer = fs.readFileSync(filename)
  const fileStr = buffer.toString()
  const names = fileStr.split('\n') // make array

  const results = []

  let shortestLength = 0
  // console.log({names})

  names.forEach((name, i) => {

    if (name.length > 0 && name !== undefined) {
      if (i === 0) {
        shortestLength = name.length
      } else {
        if (shortestLength > name.length) {
          shortestLength = name.length
        }
      }

    }

  })

  // console.log({ shortestLength })

  // const shortestNames = names.filter(name => name.length == shortestLength)

  const shortNames = []

  for (let i = 0; i < names.length; i++) {
    if (names[i].length == shortestLength) {
      shortNames.push(names[i])
    }
  }

return shortNames

}

console.log(getShortestName('../../../docs/baby_names_2020_short.txt'))
console.log(getShortestName('../../../docs/baby_names_1880_short.txt'))


/////



function getLongestName(filename) {

  const buffer = fs.readFileSync(filename)
  const fileStr = buffer.toString()
  const names = fileStr.split('\n') // make array

  const results = []

  let longestLength = 0
  // console.log({names})

  names.forEach((name, i) => {

    if (name.length > 0 && name !== undefined) {
      if (i === 0) {
        longestLength = name.length
      } else {
        if (longestLength < name.length) {
          longestLength = name.length
        }
      }

    }

  })

  // console.log({ longestLength })

  // const shortestNames = names.filter(name => name.length == longestLength)

  const longNames = []

  for (let i = 0; i < names.length; i++) {
    if (names[i].length == longestLength) {
      longNames.push(names[i])
    }
  }

return longNames

}

console.log(getLongestName('../../../docs/baby_names_2020_short.txt'))
console.log(getLongestName('../../../docs/baby_names_1880_short.txt'))


/*
Focus more on explaining while writing

BASICS of space and time complexity HOMEWORK

*/