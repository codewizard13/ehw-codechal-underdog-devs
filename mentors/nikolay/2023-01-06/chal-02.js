/*
MENTOR Nikolay: CHALLENGE: 2023-01-06 #2

What song was the #1 song for the most weeks of 2000,
who was the artist, and how many weeks was it at #1?

Programmer: Eric Hepperle

V1

*/


/*
FIND the song with rank of 1 that appears the most weeks

RETURN artist and how many weeks this song had rank 1

---
DEFINE songCount dict
GET ALL songs with rank of 1
INCREMENT count dict each instance of song name (song.song)

EDGE CASES

rank is blank
if song song is undefined
if artist blank
if songname is blank
convert num strings to integers

*/


// ERIC'S JS code library
const { filenameToLines, parseCSVToArray } = require('../../../common/io')

const billboardFile = `${__dirname}/../../../docs/billboard100_2000.csv`


const testMovies = [
  {
    Title: 'The Twilight Saga: Breaking Dawn - Part 2',
    Distributor: 'Lionsgate',
    'Release Date': '2012',
    'US Sales': '111111',
    'World Sales': '829747654',
    Runtime: '1 hr 55 min',
    Rating: 'PG-13'
  },
  {
    Title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    Distributor: 'Walt Disney Studios Motion Pictures',
    'Release Date': '2005',
    'US Sales': '333333333',
    'World Sales': '745013115',
    Runtime: '2 hr 23 min',
    Rating: 'PG'
  },
  {
    Title: 'Man of Steel',
    Distributor: 'DreamWorks',
    'Release Date': '2013',
    'US Sales': '5000',
    'World Sales': '668045518',
    Runtime: '2 hr 23 min',
    Rating: 'PG-13'
  }
]

const billboardArray = parseCSVToArray(billboardFile)

const horzrule = "*".repeat(30)



/**
 * Main: The main function; controller.
 */
function main() {

  console.log(`\n\n${horzrule}`)

  console.log(billboardArray[0])



}
main()



