const { second } = require('./function')

test('should be 7', () => {
  let arr = [3, 5, 9, 1, 4, 7, 3, 1, 0]
  let result = second(arr)
  expect(result).toBe(7)
})
test('should be 7', () => {
  let arr = [8, 8, 8, 8, 8, 8, 8, 8, 7, 8, 8, 8, 8, 8]
  let result = second(arr)
  expect(result).toBe(7)
})
test('should be 7', () => {
  let arr = [8, 8, 8, 8, 8, 7, 7, 7, 7, 8, 8, 8, 8, 8]
  let result = second(arr)
  expect(result).toBe(7)
})
test('should be null', () => {
  let arr = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
  let result = second(arr)
  expect(result).toBe(null)
})
