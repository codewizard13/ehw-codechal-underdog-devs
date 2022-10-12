/* Read write to file from file with pipe */

const fs = require('fs')
const readStream = fs.createReadStream('sowpods.txt', 'utf8')
const writeStream = fs.createWriteStream('results.txt')

// readStream.on('data', (chunk) => {
//   // console.log(chunk)
//   writeStream.write(chunk)
// })

readStream.pipe(writeStream)