function findMax(arr, pointer = arr.length - 1, max = arr[pointer]) {
  if (arr.length < 1 || typeof arr[pointer] != 'number') {
    throw new Error('input error')
  }
  if (pointer === 0) {
    return max
  }
  if (arr[pointer - 1] > max) {
    max = arr[pointer - 1]
  }
  return findMax(arr, pointer - 1, max)
}

module.exports = findMax
