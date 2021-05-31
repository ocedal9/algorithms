const swap = require('./function')
test('1.-', () => {
  const array = [2, 4, 6, 0, 7, 5, 8, 3, 1]
  const result = swap(array)
  expect(result).toStrictEqual([0, 7, 2, 3, 4, 5, 1, 6, 8])
})

test('2.-', () => {
  const array = [0, 1, 2, 3, 4]
  const result = swap(array)
  expect(result).toStrictEqual([0, 1, 2, 3, 4])
})

test('3.-', () => {
  const array = [6, 5, 4, 3, 2, 1, 0]
  const result = swap(array)
  expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6])
})

test('4.-', () => {
  const array = [7, 5, 2, 4, 0, 3, 1, 6]
  const result = swap(array)
  expect(result).toStrictEqual([6, 1, 2, 0, 4, 5, 3, 7])
})
