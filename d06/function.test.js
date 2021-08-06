const lcs = require('./function')

test('shoulb be 4', () => {
  const str1 = 'abcdef'
  const str2 = 'ancdife'
  const result = lcs(str1, str2)
  expect(result).toBe(4)
})

test('shoulb be 5', () => {
  const str1 = 'abcdef'
  const str2 = 'ancdief'
  const result = lcs(str1, str2)
  expect(result).toBe(5)
})

test('shoulb be 1', () => {
  const str1 = 'abcdef'
  const str2 = 'fedcba'
  const result = lcs(str1, str2)
  expect(result).toBe(1)
})

test('shoulb be 0', () => {
  const str1 = 'abcd'
  const str2 = 'efgh'
  const result = lcs(str1, str2)
  expect(result).toBe(0)
})
