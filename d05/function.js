function missing(arr) {
  const len = arr.length + 1
  let sum = (len * (len + 1)) / 2
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i]
  }
  return sum
}
module.exports = { missing }
