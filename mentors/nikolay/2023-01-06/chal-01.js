/*
MENTOR Nikolay: CHALLENGE: 2023-01-06

What is the distribution of ratings? (How many are PG, PG-13, R, etc.?)

Programmer: Eric Hepperle

V1

*/


/*
- PG: 10
- PG-13: 4
- R: 208


EDGE CASES

rating empty
object undefine


*/


// ERIC'S JS code library
const { filenameToLines, parseCSVToArray } = require('../../../common/io')

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

const moviesArray = parseCSVToArray(moviesFile)

const horzrule = "*".repeat(30)



/**
 * Main: The main function; controller.
 */
function main() {

  console.log(`\n\n${horzrule}`)




}
main()



function getRatingsDistribution(moviesArray) {

  const ratingsCount = {}

  // LOOP over all movies
  moviesArray.forEach(movie => {

      // INCREMENT key count
      let rating = movie.Rating !== undefined && movie.rating !== "" ? movie.Rating.trim() : ''

      if (rating !== "") {
        if (ratingsCount[rating] !== undefined) {
          ratingsCount[rating]++
        } else {
          ratingsCount[rating] = 1
        }
      }

  })

  return ratingsCount

}
console.log(getRatingsDistribution(moviesArray))


