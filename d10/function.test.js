const findMayority = require('./function')

test('should be false', () => {
  const result = findMayority([1, 2, 3, 4, 5, 6])
  expect(result).toBeFalsy()
})
test('should be false', () => {
  const result = findMayority([1, 1, 1, 4, 5, 6])
  expect(result).toBeFalsy()
})
test('should be 1', () => {
  const result = findMayority([1, 1, 1, 1, 5, 6])
  expect(result).toBe(1)
})
