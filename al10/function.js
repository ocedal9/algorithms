function shuffle(a) {
  var temp
  for (let n = 0; n < a.length; n++) {
    temp = a[Math.trunc(Math.random() * a.length)]
    ;[a[n], a[temp]] = [a[temp], a[n]]
  }
  return a
}
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(shuffle(array))
