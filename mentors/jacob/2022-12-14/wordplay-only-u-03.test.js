const {hasUniqueVowel, filterWords} = require('./wordplay-only-u-03.js');

// https://jestjs.io/docs/getting-started
test('hasUniqueVowel', () => {
  expect(hasUniqueVowel('JILL', 'I')).toBe(true);
  expect(hasUniqueVowel('JIILL', 'I')).toBe(true);
  expect(hasUniqueVowel('JIOLL', 'I')).toBe(false);
  expect(hasUniqueVowel('JOLL', 'I')).toBe(false);
  expect(hasUniqueVowel('JLL', 'I')).toBe(false);
});