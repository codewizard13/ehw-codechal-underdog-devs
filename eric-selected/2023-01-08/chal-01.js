/*
ERIC SELF CHALLENGE: 2023-01-08

What artist had the most songs chart in 2000, and what were those songs?

Programmer: Eric Hepperle

V1

*/


/*

DEFINE empty artist poplarity dict (artistPop)

// BUILD ARTIST POP DICT
LOOP over all songs in array

  SET temp var curSong
  SET temp var curArtist

  VALUE is an object {
    count:
    songs:
  }

  IF the curSong artist is already a key in artistPop dict
    INCREMENT count by 1
  ELSE
    add artist as key in dict
    add tmpObj as value
    SET tmpObj.artist.count to 1
  END

  ADD 

  ADD curSong to artistPop.artist.songs


END




*/



// ERIC'S JS code library
const { filenameToLines, parseCSVToArray } = require('../../common/io')

const moviesFile = `${__dirname}/../../docs/billboard100_2000.csv`

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
    rank: '4',
    song: 'Case Of The Ex (Whatcha Gonna Do)',
    artist: 'Mya',
    'last-week': '3',
    'peak-rank': '2',
    'weeks-on-board': '20',
    date: '2000-12-30'
  }
]

const songsArray = parseCSVToArray(moviesFile)

const horzrule = "*".repeat(30)



/**
 * Main: The main function; controller.
 */
function main() {

  const today = new Date().toString().split("(Central")[0]

  console.log(`\n\n\n${horzrule} ${today}\n`)

  const results = getMostPopularArtist(songsArray)

}
main()


function getMostPopularArtist(songs) {

  const artistDict = {}

  let valObj = {
    count: 0,
    songs: []
  }

  // ITERATE OVER ALL SONGS
  for (let i=0; i < songs.length; i++) {

    console.log(`Iteration ${i}`)

    let curSong = songs[i]
    let curArtist = curSong.artist

    // console.log([curSong, curArtist])

    if (curArtist in artistDict) {
      artistDict[curArtist].count++

    } else {
      artistDict[curArtist] = {count: 0, songs: []}
      artistDict[curArtist].count = 1

    }

    // ADD song to artist key object
    artistDict[curArtist].songs.push(curSong)

    // if (i === 4) break // only do first 5 songs

  }

  console.log(JSON.stringify(artistDict, null, 4))

}

/*
if artist key already exists
  increment count
  push current song onto songs
else
  set artist key value as object
  set count to 1
  set songs as current song


*/