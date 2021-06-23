function find(matrix, num) {
  let startRow = 0
  let endRow = matrix.length - 1
  let row = null
  if (
    num < matrix[0][0] ||
    num > matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1]
  )
    throw new Error('out of matrix')
  while (row == null) {
    let mid = Math.trunc((endRow - startRow) / 2 + startRow)
    if (matrix[mid][0] == num) return [mid, 0]
    if (num == matrix[mid][matrix[mid].length - 1])
      return [mid, matrix[mid].length - 1]
    if (matrix[mid][0] < num && num < matrix[mid][matrix[mid].length - 1])
      row = mid
    if (num < matrix[mid][0]) endRow = mid
    if (matrix[mid][matrix[mid].length - 1] < num) startRow = mid + 1
  }
  let arr = matrix[row]
  let start = 0
  let end = arr.length - 1
  while (true) {
    let mid = Math.trunc((end - start) / 2 + start)
    if (arr[mid] == num) return [row, mid]
    if (arr[mid] < num) start = mid + 1
    if (num < arr[mid]) end = mid
    if (start === end) throw new Error('not in matrix')
  }
}
module.exports = find
