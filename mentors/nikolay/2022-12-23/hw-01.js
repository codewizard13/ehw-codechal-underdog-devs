/*
MENTOR Nikolay: HOMEWORK: 2022-12-23

- For next week write a function to parse CSV
- Consider whether to use library or write brute force


Eric Hepperle
2022-12-23

V1

*/

const fs = require("fs");
const Papa = require("papaparse");

const { filenameToLines } = require('../../../common/io')
const moviesFile = `${__dirname}/../../../docs/top_movies.csv`

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

/**
 * Main: The main function; controller.
 */
function main() {

  const moviesArray = parseCSVToArray(moviesFile)

  // console.log(moviesArray)

  // Q: What movies on this list were distributed by DreamWorks?
  const dreamworksMovies = getMoviesByDistributor(moviesArray, "DreamWorks")
  console.log(`MATCHED MOVIES: `)

  // dreamworksMovies.forEach(movie => console.log(movie.Title))
  const filtered = moviesArray.filter(movie => movie.Distributor === "DreamWorks")
  // console.log("DreamWorks movies: ", filtered)

  // Q: What is the highest grossing movie from Universal Pictures, domestically?
  const highestGrossing = highestUSSales(moviesArray)
  console.log("Highest US Sales:", highestGrossing)

}
main()



// returns filtered movies array
function highestUSSales(moviesArray) {

  const filtered = moviesArray.sort((a, b) => parseInt(b['US Sales']) - parseInt(a['US Sales']))[0]
  
  return filtered

}


function getMoviesByDistributor(moviesArray, distributor) {

  const matches = []

  moviesArray.forEach(movie => {

    if (movie.Distributor === distributor) {
      matches.push(movie)
    }

  })

  return matches

}



/// FUNCTIONS


function parseCSVToArray(filepath) {

  const MOVIES_CSV = fs.readFileSync(moviesFile).toString()

  const result = Papa.parse(MOVIES_CSV, { header: true });
  const moviesArray = result.data

  return moviesArray
}