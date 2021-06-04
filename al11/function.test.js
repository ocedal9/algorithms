const reverseBlocks = require('./function')
test('block size 0, ERROR', () => {
  const arr = [0, 1, 2]
  const blockSize = 0
  function reverse() {
    reverseBlocks(arr, blockSize)
  }
  expect(reverse).toThrowError(new Error('block size must be at least one'))
})
test('10 elements, 1 block size', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const blockSize = 1
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})
test('10 elements, 3 block size', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const blockSize = 3
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([2, 1, 0, 5, 4, 3, 8, 7, 6, 9])
})
test('11 elements, 3 block size', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const blockSize = 3
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([2, 1, 0, 5, 4, 3, 8, 7, 6, 10, 9])
})
test('3 elements, 4 block size', () => {
  const arr = [0, 1, 2]
  const blockSize = 4
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([2, 1, 0])
})
test('4 elements, 4 block size', () => {
  const arr = [0, 1, 2, 3]
  const blockSize = 4
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([3, 2, 1, 0])
})
test('5 elements, 4 block size', () => {
  const arr = [0, 1, 2, 3, 4]
  const blockSize = 4
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([3, 2, 1, 0, 4])
})
test('6 elements, 4 block size', () => {
  const arr = [0, 1, 2, 3, 4, 5]
  const blockSize = 4
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([3, 2, 1, 0, 5, 4])
})
test('7 elements, 4 block size', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6]
  const blockSize = 4
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([3, 2, 1, 0, 6, 5, 4])
})
test('8 elements, 4 block size', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const blockSize = 4
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([3, 2, 1, 0, 7, 6, 5, 4])
})
test('10 elements, 4 block size', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const blockSize = 4
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([3, 2, 1, 0, 7, 6, 5, 4, 9, 8])
})
test('11 elements, 4 block size', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const blockSize = 4
  const result = reverseBlocks(arr, blockSize)
  expect(result).toStrictEqual([3, 2, 1, 0, 7, 6, 5, 4, 10, 9, 8])
})
