const shuffle = require('./function')

test('numbers', () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const result = shuffle(array)
  for (let i = 0; i < array.length; i++) {
    expect(result).toContain(array[i])
  }
  expect(result.length).toBe(array.length)
})

test('mixed values', () => {
  const array = [15, true, -45, undefined, 0.0089, -0.09, 'aaa']
  const result = shuffle(array)
  for (let i = 0; i < array.length; i++) {
    expect(result).toContain(array[i])
  }
  expect(result.length).toBe(array.length)
})
