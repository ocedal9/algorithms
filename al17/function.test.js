const opt = require('./function.js')

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
    [0, 1, 2, 3],
    [1, 0, 4, 5],
    [2, 4, 0, 6],
    [3, 5, 6, 0],
  ]
  const result = opt(mat)
  expect(result).toEqual([1, 2, 3, 4, 5, 6])
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
