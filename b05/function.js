function isPermutation(s1, s2) {
  if (s1.length !== s2.length) return false
  function charCount(str) {
    let countArray = new Array(123 - 97).fill(0)
    for (let i = 0; i < str.length; i++) {
      countArray[str[i].charCodeAt() - 97]++
    }
    return countArray
  }
  const arr1 = charCount(s1.toLowerCase())
  const arr2 = charCount(s2.toLowerCase())
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] !== arr2[j]) return false
  }
  return true
}
module.exports = isPermutation
