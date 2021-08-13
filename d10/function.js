function findMayority(arr) {
  let count = Array(10).fill(0)
  let mayority = arr.length / 2
  for (let i = 0; i < arr.length; i++) {
    if (++count[arr[i]] > mayority) return arr[i]
  }
  return false
}
module.exports = findMayority
