function shuffle(a) {
  var temp
  for (let n = 0; n < a.length; n++) {
    temp = Math.trunc(Math.random() * a.length)
    ;[a[n], a[temp]] = [a[temp], a[n]]
  }
  return a
}

module.exports = shuffle
