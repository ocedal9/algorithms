function reverseBlocks(arr, blockSize) {
  if (blockSize <= 0) throw Error('block size must be at least one')
  let completeBlocks = Math.trunc(arr.length / blockSize)
  let lastBlockSize = arr.length - completeBlocks * blockSize
  let size = blockSize
  let blockTurn = 0
  while (blockTurn <= completeBlocks) {
    if (blockTurn == completeBlocks && lastBlockSize < 1) return arr
    if (blockTurn == completeBlocks) size = lastBlockSize
    let leftElement = blockTurn++ * blockSize
    let rigthElement = leftElement + size - 1
    while (leftElement < rigthElement) {
      let leftTemp = arr[leftElement]
      arr[leftElement++] = arr[rigthElement]
      arr[rigthElement--] = leftTemp
    }
  }
  return arr
}
// const arr = [0, 1]
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// const blockSize = 0
// const result = reverseBlocks(arr, blockSize)
// console.log(result)
module.exports = reverseBlocks
