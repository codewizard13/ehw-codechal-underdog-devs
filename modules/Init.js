
const pathDocs = '../docs'

const fileCountries = `${pathDocs}/countries.txt`
const fileScrabble = `${pathDocs}/sowpods.txt`
const fileAnimals = `${pathDocs}/animals.txt`
const fileBabyNames2020 = `${pathDocs}/baby_names_2020_short.txt`
const fileBabyNames1880 = `${pathDocs}/baby_names_1880_short.txt`

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


// console.log(fileCountries)

const init = {
  filePaths: {
    countries: fileCountries,
    scrabble: fileScrabble,
    animals: fileAnimals,
    babyNames1880: fileBabyNames1880,
    babyNames2020: fileBabyNames2020
  },
  abc,

  // slurpFile: (filename) => {
  //   console.log(filename)

  //   const fs = require('fs')


  //   const buffer = fs.readFileSync(filename)
  //   const fileStr = buffer.toString()
  //   const wordsArray = fileStr.split('\n') // make array

  //   return wordsArray

  // }

}

export default init