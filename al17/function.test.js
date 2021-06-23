const { opt, getByCoordinates } = require('./function.js')

test('symetric', () => {
  const mat = [
    [0, 1],
    [1, 0],
  ]
  const result = opt(mat)
  expect(result).toEqual([1])
})

test('symetric', () => {
  const mat = [
    [0, 1, 2, 3, 4],
    [1, 0, 5, 6, 7],
    [2, 5, 0, 8, 9],
    [3, 6, 8, 0, 10],
    [4, 7, 9, 10, 0],
  ]
  const result = opt(mat)
  const value1 = getByCoordinates(result, 0, 1)
  const value2 = getByCoordinates(result, 0, 2)
  const value3 = getByCoordinates(result, 0, 3)
  const value4 = getByCoordinates(result, 0, 4)
  const value5 = getByCoordinates(result, 1, 2)
  const value6 = getByCoordinates(result, 1, 3)
  const value7 = getByCoordinates(result, 1, 4)
  const value8 = getByCoordinates(result, 2, 3)
  const value9 = getByCoordinates(result, 2, 4)
  const value10 = getByCoordinates(result, 3, 4)
  const value11 = getByCoordinates(result, 3, 1)
  const value12 = getByCoordinates(result, 4, 1)
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(value1).toBe(1)
  expect(value2).toBe(2)
  expect(value3).toBe(3)
  expect(value4).toBe(4)
  expect(value5).toBe(5)
  expect(value6).toBe(6)
  expect(value7).toBe(7)
  expect(value8).toBe(8)
  expect(value9).toBe(9)
  expect(value10).toBe(10)
  expect(value11).toBe(6)
  expect(value12).toBe(7)
})

test('non symetric', () => {
  const mat = [
    [0, 11, 2, 3],
    [1, 0, 4, 5],
    [2, 4, 0, 6],
    [3, 5, 6, 0],
  ]
  const result = opt(mat)
  expect(result).toMatch('non symetric')
})

test('not square matrix', () => {
  const mat = [
    [0, 1, 2, 3, 4],
    [1, 0, 4, 5, 4],
    [2, 4, 0, 6, 4],
    [3, 5, 6, 0, 4],
  ]
  const result = opt(mat)
  expect(result).toMatch('not a square matrix')
})

test('not square matrix', () => {
  const mat = [
    [0, 1, 2, 3],
    [1, 0, 4, 5],
    [2, 4, 0, 6],
    [3, 5, 6, 0],
    [3, 5, 6, 0],
  ]
  const result = opt(mat)
  expect(result).toMatch('not a square matrix')
})
