function oneOrZero() {
  const num = Math.random()
  return num > 0.3 ? 1 : 0
}

function matrixFactory(rows, cols) {
  const matrix = []
  for (let r = 0; r < rows; r++) {
    let arr = []
    for (let c = 0; c < cols; c++) {
      arr[c] = oneOrZero()
    }
    matrix.push(arr)
  }
  return matrix
}

module.exports = matrixFactory
