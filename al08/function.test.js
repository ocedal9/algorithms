const add = require('./function')

test('first longer than second', () => {
  const array1 = [9, 9, 9, 4, 8]
  const array2 = [9, 9, 6]
  const result = add(array1, array2)
  expect(result).toStrictEqual([1, 0, 0, 9, 4, 4])
})

test('second longer than first', () => {
  const array1 = [9, 9, 6]
  const array2 = [9, 9, 9, 4, 8]
  const result = add(array1, array2)
  expect(result).toStrictEqual([1, 0, 0, 9, 4, 4])
})

test('same length', () => {
  const array1 = [5, 9, 6]
  const array2 = [3, 4, 8]
  const result = add(array1, array2)
  expect(result).toStrictEqual([9, 4, 4])
})
