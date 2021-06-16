function sparce(mat) {
  let result = []
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (
        mat[i][j] !== 0 &&
        mat[i][j] !== null &&
        mat[i][j] !== undefined &&
        mat[i][j] !== ''
      ) {
        result.push([i, j, mat[i][j]])
      }
    }
  }
  return result
}

module.exports = sparce
