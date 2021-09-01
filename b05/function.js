function isPermutation(s1, s2) {
  if (s1.length !== s2.length) return false
  function charCount(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
      !obj[str[i]] ? (obj[str[i]] = 1) : obj[str[i]]++
    }
    return obj
  }
  const arr1 = charCount(s1)
  const arr2 = charCount(s2)
  const keys = Object.keys(arr1)
  for (let j = 0; j < keys.length; j++) {
    if (arr1[keys[j]] !== arr2[keys[j]]) return false
  }
  return true
}

module.exports = isPermutation
