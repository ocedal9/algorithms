function zeroFun(mat) {
  var rowToZero = false
  var colToZero = false
  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[i].length; j++) {
      if (i == 0 && mat[i][j] == 0) rowToZero = true
      if (j == 0 && mat[i][j] == 0) colToZero = true
      if (mat[i][j] == 0) {
        mat[0][j] = 0
        mat[i][0] = 0
      }
    }
  }
  for (var k = 1; k < mat.length; k++) {
    for (var l = 1; l < mat[k].length; l++) {
      if (mat[0][l] == 0 || mat[k][0] == 0) {
        mat[k][l] = 0
      }
    }
  }
  if (rowToZero) for (var m = 0; m < mat[0].length; m++) mat[0][m] = 0
  if (colToZero) for (var n = 0; n < mat.length; n++) mat[n][0] = 0
  return mat
}

module.exports = zeroFun
