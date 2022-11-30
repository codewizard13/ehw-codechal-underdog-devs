
const styles = {
  error:
    `color: red;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
  correct:
    `color: green;` +
    `font-weight: bold;` +
    'font-size: 1.3em'
  ,
}

const codex = {
  "a": "1",
  "b": "2",
  "c": "3",
  "d": "4",
  "e": "5",
  "f": "6",
  "g": "7",
  "h": "8",
  "i": "9",
  "j": "10#",
  "k": "11#",
  "l": "12#",
  "m": "13#",
  "n": "14#",
  "o": "15#",
  "p": "16#",
  "q": "17#",
  "r": "18#",
  "s": "19#",
  "t": "20#",
  "u": "21#",
  "v": "22#",
  "w": "23#",
  "x": "24#",
  "y": "25#",
  "z": "26#",
}

const wordsSet = [
  "10#11#12",
  "1326#",
  "1994"
]

let haystack = wordsSet[1]
let decodedWord = ''

/*
GIVEN: We have at least 3 chars and one is a #



Start on left
Examine first 3 chars slice(0,3)

// Edge cases:
- Odd number of chars in encrypted word

// Let's track a pointer of where we are in the string
// initialize pointer to the first char
let pointer = 0



If current 3-char subs has #
  get hashChar value and add to decodedWord return string
  decodedWord += decodeHashChar(substring)

Return decodedWord


Function decodeSingleChar(substring) {

  // takes 3 chars




}
*/

// function decodeString(s) {

//   const hashCharIndexes = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '#') {
//       hashCharIndexes.push(i);
//     }
//   }

//   console.log(hashCharIndexes); // 👉️ [2, 3, 9]

// }



/*
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

*/
function getObjKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}


// Test haystack: "1326#"
let pointer = 0

console.log(`Haystack [${haystack}] length: ${haystack.length}`)

// Remainder is the substring left from the pointer until the string end
let remainder = haystack.slice(pointer - haystack.length)

// Do-While ensures the loop is run at least once
do {

  // Examine first 3 chars slice(0,3)

  console.log({ haystack })
  console.log({ remainder })
  console.log(`remainder.lenght: ${remainder.length}`)
  console.log(`Remainder ${remainder} length divisible by 3?\t${remainder.length % 3 === 0}`)
  console.log(`remainder.length [${remainder.length}] >= 3 >= 3?\t${remainder.length >= 3}`)

  // if we have less than 3 chars left, or there are no more # in remainder
  //    Loop through each char and process individually
  // Else
  //    process current3 as 1 encoded char

  if (remainder.length < 3 || remainder.indexOf('#') === -1) {

    // process as 3 separate encoded chars
    current3.split('').forEach((char, i) => {
      console.log(`current single char: ${char}`)

      let decodedChar = getObjKey(codex, char)
      console.log({ decodedChar })

    })

  } else {

    // grab current three
    let current3 = remainder.slice(pointer, 3)
    console.log({ current3 })

    // Remainder has # chars and is >= 3
    let decodedChar = getObjKey(codex, current3)

    // let decodedChar = decodeChar(current3)

  }


  // if (remainder.length >= 3) {
  //   // grab current three
  //   let current3 = remainder.slice(pointer, 3)
  //   console.log({ current3 })

  //   if (current3.indexOf('#') === 2) {
  //     console.log("Current three are hash encoded:", current3)
  //     // process as one encoded char
  //   } else {
  //     // process as 3 separate encoded chars
  //     current3.split('').forEach((char, i) => {
  //       console.log(`current single char: ${char}`)
  //     })
  //   }

  // } else {

  // }

  // // grab next three
  // //   let current3 = remainder.slice(pointer, 3)
  //   console.log(current3)


  // increment pointer 3
  pointer += 3

  // Return decodedWord
  break;
} while (pointer < haystack.length)