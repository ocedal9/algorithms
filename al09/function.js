function swap(a) {
  let temp
  for (let n = 0; n < a.length; n++) {
    temp = a[n]
    ;[a[n], a[temp]] = [a[temp], a[n]]
  }
  return a
}
module.exports = swap
