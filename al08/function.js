function add(ar1, ar2) {
  let arr1, arr2
  if (ar1.length > ar2.length) {
    arr1 = ar1
    arr2 = ar2
  } else {
    arr1 = ar2
    arr2 = ar1
  }
  let sumArray = Array(arr1.length + 1)
  var pointer1 = arr1.length - 1
  var pointer2 = arr2.length - 1
  var pointer3 = sumArray.length - 1
  var take = 0
  var sum = 0
  while (pointer2 >= 0) {
    sum = arr1[pointer1--] + arr2[pointer2--] + take
    sumArray[pointer3--] = sum % 10
    take = sum < 10 ? 0 : 1
  }
  while (pointer1 >= 0) {
    sum = arr1[pointer1--] + take
    sumArray[pointer3--] = sum % 10
    take = sum < 10 ? 0 : 1
  }
  take ? (sumArray[0] = 1) : sumArray.shift()
  return sumArray
}

module.exports = add
