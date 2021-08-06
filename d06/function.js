function lcs(str1, str2) {
  var matrix = []
  for (var i = 0; i < str1.length + 1; i++) {
    matrix[i] = new Array(str2.length + 1)
  }
  for (let y = 0; y <= str1.length; y++) {
    for (let x = 0; x <= str2.length; x++) {
      y == 0 || x == 0
        ? (matrix[y][x] = 0)
        : str1[y - 1] == str2[x - 1]
        ? (matrix[y][x] = matrix[y - 1][x - 1] + 1)
        : (matrix[y][x] = Math.max(matrix[y - 1][x], matrix[y][x - 1]))
    }
  }
  return matrix[str1.length][str2.length]
}

module.exports = lcs
