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

0000000000001

song_artist_year

*/


// ERIC'S JS code library
const { parseCSVToArray } = require('../../../common/io')

const billboardFile = `${__dirname}/../../../docs/billboard100_2000.csv`

const testSongs = [
  {
    rank: '1',
    song: 'Independent Women Part I',
    artist: "Destiny's Child",
    'last-week': '1',
    'peak-rank': '1',
    'weeks-on-board': '15',
    date: '2000-12-30'
  },
  {
    rank: '2',
    song: 'He Loves U Not',
    artist: 'Dream',
    'last-week': '5',
    'peak-rank': '2',
    'weeks-on-board': '14',
    date: '2000-12-30'
  },
  {
    rank: '3',
    song: "It Wasn't Me",
    artist: 'Shaggy Feat. Ricardo "RikRok" Ducent',
    'last-week': '2',
    'peak-rank': '2',
    'weeks-on-board': '9',
    date: '2000-12-30'
  }
]

const billboardArray = parseCSVToArray(billboardFile)

const horzrule = "*".repeat(30)

// Popular means rank 1 for the most weeks
function getMostPopularSong(songs) {

  const songCount = {}

  for (let i=0; i < songs.length; i++) {

    let song = songs[i]
    
    if (song.song !== undefined && song.song !== "") {
      console.log(song.song)
    } else {
      console.error(song)
    }


  }

}


/**
 * Main: The main function; controller.
 */
function main() {

  console.log(`\n\n${horzrule}`)

  console.log(getMostPopularSong(testSongs))



}
main()



