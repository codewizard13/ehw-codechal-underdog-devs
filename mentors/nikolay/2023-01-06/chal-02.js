/*
MENTOR Nikolay: CHALLENGE: 2023-01-06 #2

What song was the #1 song for the most weeks of 2000,
who was the artist, and how many weeks was it at #1?

Programmer: Eric Hepperle

V1

*/


/*
ALGORITHM:

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
  },
  {
    rank: '1',
    song: "Enter Sandman",
    artist: 'Metallica',
    'last-week': '2',
    'peak-rank': '2',
    'weeks-on-board': '9',
    date: '1991-10-31'
  },
  {
    rank: '1',
    song: 'Independent Women Part I',
    artist: "Destiny's Child",
    'last-week': '1',
    'peak-rank': '1',
    'weeks-on-board': '15',
    date: '2000-11-30'
  },
  {
    rank: '1',
    song: "Enter Sandman",
    artist: 'Metallica',
    'last-week': '2',
    'peak-rank': '2',
    'weeks-on-board': '9',
    date: '1991-10-11'
  },
  {
    rank: '1',
    song: "Enter Sandman",
    artist: 'Metallica',
    'last-week': '2',
    'peak-rank': '2',
    'weeks-on-board': '9',
    date: '1991-10-31'
  },
]

const billboardArray = parseCSVToArray(billboardFile)

const horzrule = "*".repeat(30)



/**
 * Main: The main function; controller.
 */
function main() {

  console.log(`\n\n${horzrule}`)

  const numOneSongs = getSongsByRank(billboardArray, 1)

  const weeksCount = buildWeeksCountDict(numOneSongs)
  console.table(weeksCount)

  reportNumOneSongMostWeeks(weeksCount)

}
main()

/// FUNCTIONS

function getSongsByRank(songs, targetRank) {

  const matchedSongs = []

  for (let i = 0; i < songs.length; i++) {

    let song = songs[i]
    let title = song.song
    let rank = parseInt(song.rank)

    if (rank === targetRank) {
      matchedSongs.push(song)
    }

  }

  console.log("\nSongs By Rank for rank", targetRank, ":")

  return matchedSongs
  // Concise way:
  // return songs.filter(song => parseInt(song.rank) === 1)

}


function reportNumOneSongMostWeeks(weeksCount) {

  // Convert object to assoc array so it can be sorted
  const entries = Object.entries(weeksCount)

  const songsSortedByMostWeeks = entries.sort((a, b) => b[1].count - a[1].count)
  const topSong = songsSortedByMostWeeks[0]
  const topSongName = topSong[0]
  const topSongArtist = topSong[1].songObj.artist
  const topSongWeeksCount = topSong[1].count

  console.log(`The #1 song for the most weeks on 2000 was:`)
  console.log(`"${topSongName}" by ${topSongArtist}`)
  console.log(`With`, topSongWeeksCount, `weeks on the the Billboard 100 chart`)

}

function buildWeeksCountDict(songs) {

  weeksCount = {}

  for (let i = 0; i < songs.length; i++) {

    let song = songs[i]
    let title = song.song

    if (!(title in weeksCount)) {
      let valObj = { count: 1, songObj: song }
      weeksCount[title] = valObj
    } else {
      weeksCount[title].count++
    }

  }

  return weeksCount

}


