/* Read file with readline */

var fs = require('fs')
var readline = require('readline')
const { resourceLimits } = require('worker_threads')

var readlineInterface = readline.createInterface({
  input: fs.createReadStream('sowpods.txt'),
  output: fs.createWriteStream('results.txt'),
  console: false
})


readlineInterface.on('line', function (line) {
  console.log(line)
  process.exit(0)
})

readlineInterface.on('SIGINT', function () {
  console.error('Signal Interrupted')
})

readlineInterface.on('close', function () {
  console.log('Interface closed.')
})