function second(arr) {
  let first = arr[0]
  let second = null
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first
      first = arr[i]
    }
    if (arr[i] > second && arr[i] < first) {
      second = arr[i]
    }
  }
  return second
}

module.exports = { second }
