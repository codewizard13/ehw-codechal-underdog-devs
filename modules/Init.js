
const pathDocs = '../docs'

const fileCountries = `${pathDocs}/countries.txt`
const fileBabyNames2022 = `${pathDocs}/countries.txt`
const fileBabyNames1880 = `${pathDocs}/countries.txt`

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


// console.log(fileCountries)

const init = {
  fileCountries, fileBabyNames1880, fileBabyNames2022,
  abc,

  // slurpFile: (filename) => {
  //   console.log(filename)

  //   // const fs = require('fs')


  //   const buffer = fs.readFileSync(filename)
  //   const fileStr = buffer.toString()
  //   const wordsArray = fileStr.split('\n') // make array

  //   return wordsArray

  // }

}

export default init