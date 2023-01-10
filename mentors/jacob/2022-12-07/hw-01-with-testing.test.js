const { isVowel} = require('./hw-01-with-testing');

test('isVowel: A returns true', () => {
  expect(isVowel('A')).toEqual(true)
});
