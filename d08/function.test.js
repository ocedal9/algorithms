const targetSum = require('./function')

test('no sequence, target = 8', () => {
  const result = targetSum(8)
  expect(result).toEqual([])
})

test('1 sequence, target = 7', () => {
  const result = targetSum(7)
  expect(result).toEqual([[3, 4]])
})

test('2 sequences, target = 9', () => {
  const result = targetSum(9)
  expect(result).toEqual([
    [2, 3, 4],
    [4, 5],
  ])
})

test('3 sequences, target = 15', () => {
  const result = targetSum(15)
  expect(result).toEqual([
    [1, 2, 3, 4, 5],
    [4, 5, 6],
    [7, 8],
  ])
})
