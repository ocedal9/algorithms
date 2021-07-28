function second(arr) {
  let first = arr[0]
  let second = null
  for (let i = 1; i < arr.length; i++) {
    // console.log(first, second)
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

// let arr = [12, 1, 36, 10, 34, 1, 36]
// console.log(second(arr))
module.exports = { second }
