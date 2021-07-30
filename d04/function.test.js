const { kthLargest } = require('./function')

test('1st largest must be 9', () => {
  const arr = [1, 9, 4, 7, 0, 6, 5, 2, 3, 8]
  const result = kthLargest(arr, 1)
  expect(result).toBe(9)
})

test('2nd largest must be 8', () => {
  const arr = [1, 9, 4, 7, 0, 6, 5, 2, 3, 8]
  const result = kthLargest(arr, 2)
  expect(result).toBe(8)
})

test('3rd largest must be 7', () => {
  const arr = [1, 9, 4, 7, 0, 6, 5, 2, 3, 8]
  const result = kthLargest(arr, 3)
  expect(result).toBe(7)
})

test('4th largest must be 6', () => {
  const arr = [1, 9, 4, 7, 0, 6, 5, 2, 3, 8]
  const result = kthLargest(arr, 4)
  expect(result).toBe(6)
})

test('5th largest must be 5', () => {
  const arr = [1, 9, 4, 7, 0, 6, 5, 2, 3, 8]
  const result = kthLargest(arr, 5)
  expect(result).toBe(5)
})
