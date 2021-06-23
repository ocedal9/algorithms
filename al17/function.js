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

function getByCoordinates(array, rowP, colP) {
  if (rowP === colP) return 'pincipal diagonal'
  let col, row
  if (colP > rowP) {
    col = colP
    row = rowP
  } else {
    row = colP
    col = rowP
  }
  let len = array.length
  let numOfRows = 1
  while (len > 0) {
    len -= numOfRows++
  }
  if (col >= numOfRows || row >= numOfRows) throw new Error('not inside matrix')
  let i = 0
  let j = 1
  let index = -1
  while (i < row) {
    index += numOfRows - j
    j++
    i++
  }
  index += col + 1 - j
  return array[index]
}
module.exports = { opt, getByCoordinates }
