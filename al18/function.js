function sparce(mat) {
  let value = []
  let cols = []
  let elemPerRow = []
  for (let i = 0; i < mat.length; i++) {
    let count = 0
    for (let j = 0; j < mat[i].length; j++) {
      if (
        mat[i][j] !== 0 &&
        mat[i][j] !== null &&
        mat[i][j] !== undefined &&
        mat[i][j] !== ''
      ) {
        value.push(mat[i][j])
        cols.push(j)
        count++
      }
    }
    elemPerRow.push(count)
  }
  return [value, cols, elemPerRow]
}

module.exports = sparce
