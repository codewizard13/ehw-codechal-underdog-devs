/*
IMPLEMENTING my "indexOf" function from scratch in vanilla JS

Programmer: Eric Hepperle
Date Created: 2022-12-21

V2
*/


function main() {

  const word = "ATENTH"
  const needle = "TH"

  // const testWords = [
  //   "ATENTH", "TOTT", "TOTTTHTTT", "BB", "ITHE", "JOHN", "JOHNT"
  // ]
  const testWords = ["TOTT"]

  let filteredWords = testWords.filter(word => substringOf(word, needle))

  console.log(`MATCHED WORDS:\n`)
  console.log(filteredWords)

}
main()


function substringOf(word, needle) {

  let needleCharsFound = ''
  let foundNeedle = false
  let needleFirstChar = needle[0]
  let wordLettersChecked = ''
  let nonMatchingNeedleCharFound = false

  console.log(`WORD:\t${word},\tword.length: ${word.length}`)

  // LOOP through each word char as long as we haven't found the needle yet
  for (let i = 0; i < word.length && !foundNeedle; i++) {

    console.log({i})
    
    let currentWordChar = word[i]
    console.log({currentWordChar})

    // Found first needle char
    if (currentWordChar === needleFirstChar) {

      // Check rest of needle chars from index 1 (2nd char) until foundNeedle is true
      for (let j=1; j < needle.length && !nonMatchingNeedleCharFound; j++) {

        if (word[i+1] === needle[j]) {

          console.log(`word[${i+1}] and needle[${j}] are both ${word[i]}`)

        } else {
          console.error(`Found non matching word char: ${word[i+1]} doesn't equal ${needle[j]}`)
          j = 0
          nonMatchingNeedleCharFound = true
        }

      }

      // If we get here without early return, set found needle to true because we have tested
      //  all needle char values in order and not failed even one
      foundNeedle = true

    } // ELSE 


  } // END word chars loop


return foundNeedle

}

/*
needleCharsMatch()

Increment wordIndex by 1
if wordChar at wordIndex same as needleChar at needleIndex


    if (foundFirstNeedleChar) {

      // Check rest of needle chars
      if (needleCharsMatch()) {

        foundNeedle = true

      }

    }



*/