/*
IMPLEMENTING my "indexOf" function from scratch in vanilla JS

Programmer: Eric Hepperle
Date Created: 2022-12-21

V1
*/


function main() {

  const word = "ATENTH"
  const needle = "TH"

  const testWords = [
    "ATENTH", "TOTT", "TOTTTHTTT", "BB", "ITHE", "JOHN"
  ]

  testWords.forEach(word => console.log(substringOf(word, needle)))

  // console.log(substringOf(word, needle))

}
main()


function substringOf(word, needle) {

  let needleCharsFound = ''
  let foundNeedle = false
  let needleFirstChar = needle[0]

  for (wordIndex = 0; wordIndex < word.length; wordIndex++ ) {

    let wordChar = word[wordIndex]

    if (wordChar === needleFirstChar) {

      needleCharsFound = needleFirstChar

      for (needleIndex = 1; needleIndex < needle.length; needleIndex++ ) {

        if (word[wordIndex + 1] !== needle[needleIndex]) {

          needleCharsFound = ''
          break

        }

      }

      foundNeedle = true

    }

  }

  if (foundNeedle) {
    console.log(`${needle} IS a substring of ${word}`)
    return true
  }

}