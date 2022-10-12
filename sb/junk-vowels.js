/* 

Filename: junk-vowels.js

Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words that have all 5 vowels, in any order?
Date Completed: 10/12/22

Working out the vowel processing code

*/

let arr = ['QUADRIPOLE', 'QUADRISECTIONS', 'QUESTIONABILITY', 'RATATOUILLE', 'SEQUACIOUSLY', 'SEQUESTRATION', 'SUBCATEGORIZING', 'SUPERNATATION', 'SUPEROVULATING', 'SUSTENTATIONS', 'TAUTOMETRICAL', 'THIOSULPHATE', 'UNORDAINED', 'UNORGANISED', 'UNPROFITABLE', 'UNREASONINGLY', 'UTOPIANISED', 'UTOPIANISER', 'VARIOUSNESS', 'VITUPERATION'];

let matches = [];

// foreach word in array
arr.forEach((word, i) => {
  // console.log(`word ${i}: ${word}`);
  // Grab all vowels

  this_vowels = word.match(/[AEIOU]/g)
  console.log(`this_vowels = ${this_vowels}`)

  let len = word.length;
  let c = String.fromCharCode(64);

  // split the current word into char array
  word.split("").forEach((char) => {
    // Is the character a vowel?
    if (
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      // console.log(`${char}: VOWEL`)

      if (char < c) {
        return false;
      }
    } else {
      // console.log(char)
      c = char;
    } // end if vowel


  }); // end foreach char
  matches.push(word);
}); // end foreach word


console.log(matches);


let str = "Hello World";

let res = str.match(/[aeiou]/ig).join("");
console.log(res);

let res2 = str.match(/[^aeiou]/ig).join("");
console.log(res2);