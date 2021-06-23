const find = require('./function')

test('must be in row 0, column 0', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 0)
  expect(result).toEqual([0, 0])
})

test('must be in row 0, column 1', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 5)
  expect(result).toEqual([0, 1])
})

test('must be in row 0, column 2', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 10)
  expect(result).toEqual([0, 2])
})
test('must be in row 1, column 0', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 15)
  expect(result).toEqual([1, 0])
})
test('must be in row 1, column 1', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 20)
  expect(result).toEqual([1, 1])
})
test('must be in row 1, column 2', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 25)
  expect(result).toEqual([1, 2])
})
test('must be in row 2, column 0', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 30)
  expect(result).toEqual([2, 0])
})
test('must be in row 2, column 1', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 35)
  expect(result).toEqual([2, 1])
})
test('must be in row 2, column 2', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 40)
  expect(result).toEqual([2, 2])
})
test('must be in row 3, column 0', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 45)
  expect(result).toEqual([3, 0])
})
test('must be in row 3, column 1', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 50)
  expect(result).toEqual([3, 1])
})
test('must be in row 3, column 2', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  const result = find(matrix, 55)
  expect(result).toEqual([3, 2])
})
test('error, not in matrix', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  function fun() {
    find(matrix, 31)
  }
  expect(fun).toThrowError('not in matrix')
})
test('error, out of matrix', () => {
  const matrix = [
    [0, 5, 10],
    [15, 20, 25],
    [30, 35, 40],
    [45, 50, 55],
  ]
  function fun() {
    find(matrix, 78)
  }
  expect(fun).toThrowError('out of matrix')
})
