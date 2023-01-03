/*
MENTOR Tim: CHALLENGE 2023-01-03

Challenge:

Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:

    These were the number one songs of 2000:
    "Try Again" - Aaliyah
    "Say My Name" - Destiny's Child
    "What A Girl Wants" - Christina Aguilera
    "Maria Maria" - Santana Featuring The Product G&B
    "Smooth" - Santana Featuring Rob Thomas
    "Independent Women Part I" - Destiny's Child

Programmer: Eric Hepperle

TAKEAWAY: Start to build out even more reusable modular code

V1

*/

const fs = require("fs");
const path = require('path')

// CSV parsing library
const Papa = require("papaparse");

// ERIC'S JS code library
const { filenameToLines } = require('../../../common/io')

const billboardFile = `${__dirname}/../../../docs/billboard100_2000.csv`



/**
 * Main: The main function; controller.
 */
 function main() {

  const BILLBOARD_CSV = parseCSVToArray(billboardFile)
  // console.log(BILLBOARD_CSV)

  const numOneSongs = getNumOneSongs(BILLBOARD_CSV)
  // console.log(numOneSongs)

  printNumOneSongArtist(numOneSongs)

}
main()


/**
 * 
 * @param {array} numOneSongs 
 */
function printNumOneSongArtist(numOneSongs) {

  const seenSongs = new Set()

  numOneSongs.forEach(song => {

    if (!seenSongs.has(song.song)) {
      console.log(`"${song.song}" - ${song.artist}`)
      seenSongs.add(song.song)
    }


  })

}



function getNumOneSongs(SONG_CSV) {

  console.log(SONG_CSV.length)

  const filtered = SONG_CSV.filter(songObj => parseInt(songObj.rank) === 1)
  
  return filtered

}










/// FUNCTIONS


/* ALGORITHM IN OWN FILE */

const illegalCharStr = "AEIOSHRTN"
const illegalArr = (illegalCharStr).split('')
const illegalChars = new Set(illegalArr)

// const testWords = [
//   "AA", "BBB", "BBBE", "AEIOSHRTN", "DZY", "nnnn", "", "UUUUUUUUUUUUUUA", ..."AEIOSHRTN".split('')
// ]

const testWords = [
  "BUMFLUFF", "BUMFLUF", "UUUUZZZZ"
]




function parseCSVToArray(filepath) {

  const CSV = fs.readFileSync(filepath).toString()

  const result = Papa.parse(CSV, { header: true });
  const linesArr = result.data

  return linesArr
}



// Take in filepath and return array of objects
function ericParseCSV(filepath) {

  const objArr = []

  const linesArr = filenameToLines(filepath)

  const headers = linesArr.shift().trim().split(',')
  const rows = linesArr

  // console.log(headers)

  for (let i = 0; i < rows.length; i++) {

    let row = rows[i].trim()
    let thisObj = {}
    let cols = row.split(',')
    // console.table(cols)

    for (let j = 0; j < cols.length; j++) {

      let colVal = cols[j]

      thisObj[headers[j]] = colVal


    }

    objArr.push(thisObj)

    if (i === 4) { break }

  }

  return objArr



}