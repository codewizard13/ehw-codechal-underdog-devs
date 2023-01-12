const { getMoviesForYear, getEarliestYear, getFilteredMovies, getLatestYear } = require('./chal-01-v2')

// DEFINE testMovies globally to be used in multiple tests
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
    Title: 'Man of Rubber',
    Distributor: 'DreamWorks',
    'Release Date': '2013',
    'US Sales': '5002',
    'World Sales': '668045518',
    Runtime: '2 hr 23 min',
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

const testMovies2 = [
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
    Title: 'Man of Rubber',
    Distributor: 'DreamWorks',
    'Release Date': '2013',
    'US Sales': '5002',
    'World Sales': '668045518',
    Runtime: '2 hr 23 min',
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
  },
  {
    Title: 'Brokeback Mountain',
    Distributor: 'Focus Features',
    'Release Date': '2005',
    'US Sales': '83043761',
    'World Sales': '178062759',
    Runtime: '2 hr 14 min',
    Rating: 'R'
  },
  {
    Title: 'Monster-in-Law',
    Distributor: 'New Line Cinema',
    'Release Date': '2005',
    'US Sales': '82931301',
    'World Sales': '155457327',
    Runtime: '1 hr 41 min',
    Rating: 'PG-13'
  },
]

const testYear1 = 2005
const testYear2 = 2013

test('getLatestYear(moviesArr)', () => {
  const expectedReturn5 = 2013

  expect(getLatestYear(testMovies2)).toEqual(expectedReturn5)

})

test('getFilteredMovies(moviesArr, getLatestYear)', () => {

  const expectedReturn4 = [
    {
      Title: 'Man of Rubber',
      Distributor: 'DreamWorks',
      'Release Date': '2013',
      'US Sales': '5002',
      'World Sales': '668045518',
      Runtime: '2 hr 23 min',
      Rating: 'PG-13'
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

  expect(getFilteredMovies(testMovies2, getLatestYear)).toEqual(expectedReturn4)

})

test('getFilteredMovies(moviesArr)', () => {

  const expectedReturn4 = [
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
      Title: 'Brokeback Mountain',
      Distributor: 'Focus Features',
      'Release Date': '2005',
      'US Sales': '83043761',
      'World Sales': '178062759',
      Runtime: '2 hr 14 min',
      Rating: 'R'
    },
    {
      Title: 'Monster-in-Law',
      Distributor: 'New Line Cinema',
      'Release Date': '2005',
      'US Sales': '82931301',
      'World Sales': '155457327',
      Runtime: '1 hr 41 min',
      Rating: 'PG-13'
    },
  ]

  expect(getFilteredMovies(testMovies2)).toEqual(expectedReturn4)

})

test('getEarliestYear(moviesArray)', () => {

  const expectedReturn3 =
  {
    Title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    Distributor: 'Walt Disney Studios Motion Pictures',
    'Release Date': '2005',
    'US Sales': '333333333',
    'World Sales': '745013115',
    Runtime: '2 hr 23 min',
    Rating: 'PG'
  }

  expect(getEarliestYear(testMovies)).toEqual(testYear1)

})

test('getMoviesForYear(moviesArr, year)', () => {

  const expectedReturn1 = [
    {
      Title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
      Distributor: 'Walt Disney Studios Motion Pictures',
      'Release Date': '2005',
      'US Sales': '333333333',
      'World Sales': '745013115',
      Runtime: '2 hr 23 min',
      Rating: 'PG'
    },
  ]

  expect(getMoviesForYear(testMovies, testYear1)).toEqual(expectedReturn1)

  const expectedReturn2 = [
    {
      Title: 'Man of Rubber',
      Distributor: 'DreamWorks',
      'Release Date': '2013',
      'US Sales': '5002',
      'World Sales': '668045518',
      Runtime: '2 hr 23 min',
      Rating: 'PG-13'
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

  expect(getMoviesForYear(testMovies, testYear2)).toEqual(expectedReturn2)


});