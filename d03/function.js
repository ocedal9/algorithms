let fs = require('fs')
var myStream = fs.createReadStream(__dirname + '/stream.txt', {
  highWaterMark: 1,
  encoding: 'utf8',
})
let first = null
let second = null
myStream.on('data', function (chunk) {
  let num = parseInt(chunk, 10)
  if (!isNaN(num)) {
    if (num > first) {
      second = first
      first = num
    }
    if (num > second && num < first) {
      second = num
    }
  }
})

myStream.on('end', () => {
  console.log(second)
})
