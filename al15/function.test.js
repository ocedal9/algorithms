const find = require('./function')

test('must be in row 0, column 0', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 0)
  expect(result).toEqual([0, 0])
})

test('must be in row 0, column 1', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 5)
  expect(result).toEqual([0, 1])
})

test('must be in row 0, column 2', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 10)
  expect(result).toEqual([0, 2])
})
test('must be in row 1, column 0', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 2)
  expect(result).toEqual([1, 0])
})
test('must be in row 1, column 1', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 7)
  expect(result).toEqual([1, 1])
})
test('must be in row 1, column 2', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 12)
  expect(result).toEqual([1, 2])
})
test('must be in row 2, column 0', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 4)
  expect(result).toEqual([2, 0])
})
test('must be in row 2, column 1', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 9)
  expect(result).toEqual([2, 1])
})
test('must be in row 2, column 2', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 14)
  expect(result).toEqual([2, 2])
})
test('must be in row 3, column 0', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 6)
  expect(result).toEqual([3, 0])
})
test('must be in row 3, column 1', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 11)
  expect(result).toEqual([3, 1])
})
test('must be in row 3, column 2', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 16)
  expect(result).toEqual([3, 2])
})
test('test', () => {
  const matrix = [
    [0, 5, 10],
    [2, 7, 12],
    [4, 9, 14],
    [6, 11, 16],
  ]
  const result = find(matrix, 78)
  expect(result).toMatch('The number is not in the matrix')
})
