function routes(startX, startY, endX, endY) {
  const rows = endX - startX
  const cols = endY - startY
  if (rows < 0 || cols < 0) throw new Error('End should be greater than start')
  if (rows === 0 || cols === 0) return 1
  let mat = []
  for (let i = 0; i < rows; i++) {
    mat[i] = []
    for (let j = 0; j < cols; j++) {
      mat[i][j] = i == 0 || j == 0 ? 1 : 0
    }
  }
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      mat[row][col] = mat[row - 1][col] + mat[row][col - 1]
    }
  }
  return mat[rows - 1][cols - 1]
}
module.exports = routes
