const matrixFactory = require('./matrixFactory')
// console.log(matrix(4, 5))
function maxRec(matrix) {
  //   console.log(matrix)
  let max = 0
  let accMatrix = [matrix[0]]
  let leftMatrix = []
  let rightMatrix = []
  for (let r = 1; r < matrix.length; r++) {
    let accArray = []
    for (let c = 0; c < matrix[r].length; c++) {
      matrix[r][c] === 1
        ? (accArray[c] = accMatrix[r - 1][c] + 1)
        : (accArray[c] = 0)
    }
    accMatrix.push(accArray)
  }
  //   console.log('---->', accMatrix)
  for (let h = 2; h < 3; h++) {
    // let arr = accMatrix[h]
    let arr = [2, 1, 5, 6, 2, 3]
    console.log(arr)
    let stack = [0]
    let left = [0]
    for (let b = 1; b < arr.length; b++) {
      console.log('stack', stack)
      //   arr[b] >= arr[b - 1] ? stack.pop() : 0
      if (arr[b] < arr[stack[stack.length - 1]]) {
        stack.pop()
        // left.push(stack[stack.length - 1])
        console.log('left', left)
        // stack.push(b)
      }
      left.push(stack[stack.length - 1] + 1)
      stack.push(b)
    }
  }
}
const mat = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
]
maxRec(mat)
//
