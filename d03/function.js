let fs = require('fs')
var myStream = fs.createReadStream(__dirname + '/stream.txt', {
  highWaterMark: 1,
  encoding: 'utf8',
})
var myStream2 = fs.createReadStream(__dirname + '/stream2.txt', {
  highWaterMark: 1,
  encoding: 'utf8',
})
myStream.on('data', function (chunk) {
  let num = parseInt(chunk, 10)
  getSecondLast(num)
})

myStream2.on('data', function (chunk) {
  let num = parseInt(chunk, 10)
  getSecondLast(num)
})

myStream2.on('end', () => {
  console.log(res.second)
})

class Pair {
  constructor() {
    this.first = null
    this.second = null
  }
  setFirst(num) {
    this.first = num
  }
  setSecond(num) {
    this.second = num
  }
}

const res = new Pair()

function getSecondLast(num) {
  if (!isNaN(num)) {
    let first = res.first
    let second = res.second
    if (num > first) {
      res.setSecond(first)
      res.setFirst(num)
    }
    if (num > second && num < first) {
      res.setSecond(num)
    }
  }
}
