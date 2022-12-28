const {filenameToLines} = require('../../../common/io')
const {filterWords, isVowel} = require('./wordplay-only-u-03')
const process = require('process');

/**
 * Main: The main function; controller.
 */
 function main() {
  const scrabbleWordsFile = `${__dirname}/../../../docs/sowpods.txt`
  const scrabbleWords = filenameToLines(scrabbleWordsFile)
  // BECAUSE process[0] is node and process[1] is the filename,
  // process[2] is the argument   
  const maybeVowel = process.argv[2].toUpperCase()
  
  if (isVowel(maybeVowel)) {
    const matchedWords = filterWords(scrabbleWords, maybeVowel)
    console.log(`\nMATCHED WORDS:`)
    console.table(matchedWords)
    console.log(`\nOut of`, scrabbleWords.length, `scrabbleWords`, matchedWords.length, `contain only ${maybeVowel} for VOWELS.`)
    
    // process.exit(0) means ended successfully, any other return code means failure
    process.exit(0) 

  } else {
    console.error(`${maybeVowel} is not a vowel!`)
    process.exit(1)

    // echo $? shows return code of last run process
  }
}

main()