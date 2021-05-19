const matrixFactory = require('./matrixFactory')

function maxRec(matrix) {
  // console.log(matrix)
  let max = 0
  let heights = []
  for (let row = 0; row < matrix.length; row++) {
    let stack = []
    for (let col = 0; col <= matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        heights[col] = row === 0 ? 1 : heights[col] + 1
      } else {
        heights[col] = 0
      }
      while (stack.length && heights[col] <= heights[stack[stack.length - 1]]) {
        var rectHeigth = heights[stack.pop()]
        var rectwidth =
          stack.length === 0 ? col : col - stack[stack.length - 1] - 1
        max = Math.max(max, rectHeigth * rectwidth)
      }
      stack.push(col)
    }
  }
  return max
}

const matrix = matrixFactory(5, 6)
const area = maxRec(matrix)
console.log(matrix)
console.log('maximum area = ', area)
