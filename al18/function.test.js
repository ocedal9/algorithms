const sparce = require('./function')

test('numbers', () => {
  const mat = [
    [0, 0, 1, 0, 2],
    [0, 3, 0, 0, 0],
    [0, 0, 0, 4, 5],
    [0, 0, 6, 0, 0],
    [0, 7, 8, 9, 10],
    [11, 0, 0, 0, 0],
  ]
  const result = sparce(mat)
  expect(result).toEqual([
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2, 4, 1, 3, 4, 2, 1, 2, 3, 4, 0],
    [2, 1, 2, 1, 4, 1],
  ])
})

test('letters', () => {
  const mat = [
    [undefined, 0, 'a', 0, 'b'],
    [0, 'c', 0, 'd', 0],
    [0, 0, 'e', 'f', 0],
    ['g', null, 0, '', 0],
    [0, 'h', 'i', 0, 0],
    [0, 'j', 0, 0, ''],
  ]
  const result = sparce(mat)
  expect(result).toEqual([
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
    [2, 4, 1, 3, 2, 3, 0, 1, 2, 1],
    [2, 2, 2, 1, 2, 1],
  ])
})
