function opt(matrix) {
  if (
    typeof matrix !== 'object' ||
    matrix.length == 0 ||
    matrix.length == undefined
  )
    return 'wrong input data'
  let arr = new Array()
  let k = 1
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length !== matrix.length) return 'not a square matrix'
    for (let j = k; j < matrix.length; j++) {
      if (matrix[i][j] == matrix[j][i]) {
        arr.push(matrix[i][j])
      } else {
        return 'non symetric'
      }
    }
    k++
  }
  return arr
}
module.exports = opt
