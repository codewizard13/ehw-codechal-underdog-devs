/* 
Mentor 1:1 - Greg

Eric Hepperle
2022-11-30

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
CHALLENGE:



*/

/* ----------- Test Values: ----------- */


/*
ALGORITHM:



*/
const fs = require('fs')

const results = []

let filename = '../docs/countries.txt'
const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const countries = fileStr.split('\n') // make array

//

