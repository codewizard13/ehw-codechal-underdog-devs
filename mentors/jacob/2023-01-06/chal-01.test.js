const { getMoviesForYear, getEarliestYear, getFilteredMovies } = require('./chal-01')

test('getMoviesForYear(moviesArr, year)', () => {
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

  const testYear1 = 2005

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



  const testYear2 = 2013


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