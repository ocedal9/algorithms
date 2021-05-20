const matrixFactory = require('./matrixFactory')

function getGroups(mat) {
  var num = 0
  var matrix = mat.map(function (arr) {
    return arr.slice()
  })
  function search(row, col) {
    if (
      row >= matrix.length ||
      row < 0 ||
      col >= matrix[0].length ||
      col < 0 ||
      matrix[row][col] == 0
    ) {
      return
    }
    matrix[row][col] = 0
    search(row - 1, col)
    search(row + 1, col)
    search(row, col - 1)
    search(row, col + 1)
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        num++
        search(i, j)
      }
    }
  }
  return num
}
const mat = matrixFactory(5, 6)
console.log(mat, getGroups(mat))
