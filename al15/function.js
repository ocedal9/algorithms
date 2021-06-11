function find(matrix, num) {
  let row = 0
  let col = matrix[0].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] == num) return [row, col]
    matrix[row][col] > num ? col-- : row++
  }
  return 'The number is not in the matrix'
}
module.exports = find
