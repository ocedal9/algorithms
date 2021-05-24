function merge(arr1, arr2) {
  var pointer1 = arr1.length - arr2.length - 1
  var pointer2 = arr2.length - 1
  let index = arr1.length - 1
  while (pointer1 >= 0 && pointer2 >= 0) {
    if (
      (index > arr1.length - arr2.length - 1 && arr1[index] != undefined) ||
      typeof arr1[pointer1] != 'number' ||
      typeof arr2[pointer2] != 'number'
    )
      throw new Error('wrong input data')
    arr1[index--] =
      arr1[pointer1] >= arr2[pointer2] ? arr1[pointer1--] : arr2[pointer2--]
  }
  if (pointer1 < 0 && pointer2 >= 0) {
    while (pointer2 >= 0) {
      arr1[pointer2] = arr2[pointer2--]
    }
  }
  return arr1
}

module.exports = merge
