function sort(str) {
  let charactersCount = new Array(126 - 33).fill(0)
  for (let i = 0; i < str.length; i++) {
    charactersCount[str[i].charCodeAt() - 33]++
  }
  let sortedString = ''
  for (let j = 0; j < charactersCount.length; j++) {
    for (let k = 0; k < charactersCount[j]; k++) {
      sortedString += String.fromCharCode(j + 33)
    }
  }
  return sortedString
}
module.exports = sort
