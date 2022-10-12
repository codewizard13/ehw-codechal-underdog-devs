/*
Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words containing UU?
Date Completed: 09/26/22

*/

const fs = require('fs')

let matches = []
let reg = /UU/
let filename = 'sb/sowpods.txt'

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

words.forEach((word, i) => {
  if (word.match(reg)) {
    console.log(`MATCHED: ${word}`)
  }
});

// Doing same thig with filter()
matches = words.filter((word) => word.match(reg))
console.log('SOLUTION WITH filter():')
console.log(matches)