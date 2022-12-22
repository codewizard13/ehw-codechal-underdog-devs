/*
IMPLEMENTING my "indexOf" function from scratch in vanilla JS

Programmer: Eric Hepperle
Date Created: 2022-12-21

V4
*/


function main() {

  const word = "ATENTH"
  const substring = "TH"

  const testWords = [
    "ATENTH", "TOTT", "TOTTTHTTT", "BB", "ITHE", "JOHN", "JOHNT"
  ]
  // const testWords = ["TOTT"]

  // let filteredWords = testWords.filter(word => substringOf(word, substring))

  const testObj = {
    words: ["ATENTH", "TOTT", "TOTTTHTTT", "BB", "ITHE", "JOHN", "JOHNT"],
    needles: ["TH", "BB", "OH", "THE", "TEN"]
  }

  testHarness(testObj)

  // console.log(`\nMATCHED WORDS:\n`)
  // console.table(filteredWords)

}
main()



function testHarness(argsObj) {

  const [wordSet, needleSet] = [argsObj.words, argsObj.needles]

  wordSet.forEach(word => {
    console.log('#'.repeat(30))

    needleSet.forEach(needle => {


      if (substringOf(word, needle)) {
        console.log(`NEEDLE ${needle} found in ${word}`)
      }

    })

  })

}




function substringOf(word, needle) {

  let needleCharsFound = ''
  const firstNeedleChar = needle[0]

  // LOOP over word chars
  for (let i=0; i < word.length; i++) {

    let currentWordChar = word[i]

    // IF curentWord char is same as firstNeedleChar, then start testing
    //  here for needle string.
    if (currentWordChar === firstNeedleChar) {

      needleCharsFound = firstNeedleChar
      let nextWordCharIndex = i + 1

      // LOOP through needle chars from 2nd char to end
      for (let j=1; j < needle.length; j++) {

        let currentNeedleChar = needle[j]
        let nextWordChar = word[nextWordCharIndex]

        if (nextWordChar !== currentNeedleChar) {
          needleCharsFound = ''
          break
        } else {
          needleCharsFound += nextWordChar
          nextWordCharIndex++
        }

        if (needleCharsFound === needle) { return true }

      }

    } // END testing for firstNeedleChar

  } // END word char loop

  return false
}