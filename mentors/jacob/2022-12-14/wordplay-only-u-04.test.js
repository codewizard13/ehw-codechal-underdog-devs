const {hasUniqueVowel} = require('./wordplay-only-u-04.js');

// https://jestjs.io/docs/getting-started
test('hasUniqueVowel: default', () => {
  expect(hasUniqueVowel('JILL', 'I')).toEqual(true);
  expect(hasUniqueVowel('JILLA', 'I')).toEqual(false);
  expect(hasUniqueVowel('JILLI', 'I')).toEqual(true);
  expect(hasUniqueVowel('JOLL', 'O')).toEqual(true);
});

test('hasUniqueVowel: no vowels always returns false', () => {
  expect(hasUniqueVowel('JLL', 'I')).toEqual(false);  
})
