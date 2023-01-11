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
  //   "ATENTH", "TOTT", "TOTTTHTTT", "BB", "ITHE", "JOHN"
  // ]

  // testWords.forEach(word => console.log(substringOf(word, needle)))

  console.log(substringOf(word, needle))

}
main()


function substringOf(word, needle) {

  let needleCharsFound = ''
  let foundNeedle = false
  let needleFirstChar = needle[0]
  let wordLettersChecked = ''

  for (let i = 0; i < word.length && !foundNeedle; i++) {

    let wordChar = word[i]

    wordLettersChecked += wordChar
    console.log(`WORD CHAR @ INDEX ${i}: ${wordChar},   wordLettersChecked: ${wordLettersChecked}`)

    // IF we find the needleFirstChar, then test for needle
    if (wordChar === needleFirstChar) {

      // CHECK FOR REST OF NEEDLE CHARS
      for (let j = 0; j < needle.length && !foundNeedle; j++) {

        if (word[i+1] !== needle[j]) {
          needleCharsFound = ''
          break
        }

        console.log(`wordChar and needle[${j}] are both ${wordChar}`)

        needleCharsFound += needle[j]
        console.log(`needleCharsFound: ${needleCharsFound}`)

        if (needleCharsFound === needle) {
          console.log(`${needle} IS a substring of ${word}`)
          foundNeedle = true
        }

      }


    }



    // console.log(`needleCharsFound: ${needleCharsFound}, needle: ${needle}`)
    // if (needleCharsFound === needle) {
    //   return true
    // }

  }

  return foundNeedle
}
