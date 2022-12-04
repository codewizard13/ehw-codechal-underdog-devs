import init from '../../../modules/init.js'
// import fs from 'fs'
// import * as fs from 'fs.js'

// const fs = require('fs')

let filename = init.fileCountries

function slurpFile (filename) {

  console.log(filename)

  // const fs = require('fs')


  const buffer = fs.readFileSync(filename)
  const fileStr = buffer.toString()
  const wordsArray = fileStr.split('\n') // make array

  return wordsArray

}