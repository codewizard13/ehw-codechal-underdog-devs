/* 

Filename: junk-vowels.js

Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words that have all 5 vowels, in any order?
Date Completed: 10/12/22

Working out the vowel processing code

*/

let arr = ['QUADRIPOLE', 'QUADRISECTIONS', 'QUESTIONABILITY', 'RATATOUILLE', 'ARTERIOUS', 'BACTERIOUS', 'CAESIOUS', 'SEQUACIOUSLY', 'SEQUESTRATION', 'SUBCATEGORIZING', 'SUPERNATATION', 'SUPEROVULATING', 'SUSTENTATIONS', 'TAUTOMETRICAL', 'THIOSULPHATE', 'UNORDAINED', 'UNORGANISED', 'UNPROFITABLE', 'UNREASONINGLY', 'UTOPIANISED', 'UTOPIANISER', 'VARIOUSNESS', 'VITUPERATION'];

let matches = [];

// foreach word in array
arr.forEach((word, i) => {
  // console.log(`word ${i}: ${word}`);

  // Grab all vowels from word
  this_vowels = word.match(/[AEIOU]/g)

  // if first vowel in set isn't 'A' then jump to next word
  if (this_vowels[0] !== 'A') { return }

  // console.log(`this_vowels = ${this_vowels}`)

  // Foreach vowel in vowel string 
  for (j = 0; j < this_vowels.length; j++) {
    console.log(`j: ${j} | this_vowels[j]: ${this_vowels[j]}`)

    if (this_vowels[1] != 'E') { return }
    if (this_vowels[2] != 'I') { return }
    if (this_vowels[3] != 'O') { return }
    if (this_vowels[4] != 'U') { return }
  }

  matches.push(word);
}); // end foreach word

console.log(matches);