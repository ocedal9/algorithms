const { missing } = require('./function')

test('5 is missing', () => {
  const arr = [3, 1, 6, 2, 4]
  const result = missing(arr)
  expect(result).toBe(5)
})

test('8 is missing', () => {
  const arr = [7, 3, 5, 1, 9, 6, 2, 4]
  const result = missing(arr)
  expect(result).toBe(8)
})

test('1 is missing', () => {
  const arr = [4, 7, 2, 8, 5, 6, 9, 3]
  const result = missing(arr)
  expect(result).toBe(1)
})
