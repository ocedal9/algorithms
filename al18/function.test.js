const sparce = require('./function')

test('numbers', () => {
  const mat = [
    [0, 0, 1, 0, 2],
    [0, 0, 0, 0, 0],
    [0, 0, 3, 4, 0],
    [0, 0, 0, 0, 0],
    [0, 5, 6, 0, 0],
    [0, 0, 0, 0, 0],
  ]
  const result = sparce(mat)
  expect(result).toEqual([
    [0, 2, 1],
    [0, 4, 2],
    [2, 2, 3],
    [2, 3, 4],
    [4, 1, 5],
    [4, 2, 6],
  ])
})

test('letters', () => {
  const mat = [
    [undefined, 0, 'a', 0, 'b'],
    [0, 0, 0, 0, 0],
    [0, 0, 'c', 'd', 0],
    [0, null, 0, '', 0],
    [0, 'e', 'f', 0, 0],
    [0, 0, 0, 0, ''],
  ]
  const result = sparce(mat)
  expect(result).toEqual([
    [0, 2, 'a'],
    [0, 4, 'b'],
    [2, 2, 'c'],
    [2, 3, 'd'],
    [4, 1, 'e'],
    [4, 2, 'f'],
  ])
})
