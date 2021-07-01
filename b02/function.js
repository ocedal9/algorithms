function levenshtein(str1, str2) {
  let matrix = []
  for (let row = 0; row <= str1.length; row++) {
    for (let col = 0; col <= str2.length; col++) {
      if (col === 0) matrix[row] = [row]
      if (row === 0) matrix[row][col] = col
      if (row > 0 && col > 0) {
        if (str2[row - 1] === str1[col - 1]) {
          matrix[row][col] = matrix[row - 1][col - 1]
        } else {
          matrix[row][col] = Math.min(
            matrix[row - 1][col - 1] + 1,
            matrix[row - 1][col] + 1,
            matrix[row][col - 1] + 1
          )
        }
      }
    }
  }
  return matrix[str1.length][str2.length]
}
module.exports = levenshtein
