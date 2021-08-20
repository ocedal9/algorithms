const interleaved = require('./function')

test('a:abcd, b:abcd, c:aabcbcdd', () => {
  const a = 'abcd'
  const b = 'abcd'
  const c = 'aabcbcdd'
  const result = interleaved(a, b, c)
  expect(result).toBeTruthy()
})

test('a:abcdef, b:abcdef, c:aabcbcddeeff', () => {
  const a = 'abcdef'
  const b = 'abcdef'
  const c = 'aabcbcddeeff'
  const result = interleaved(a, b, c)
  expect(result).toBeTruthy()
})

test('a:abcde, b:abcd, c:aabcbcdd', () => {
  const a = 'abcde'
  const b = 'abcd'
  const c = 'aabcbcdd'
  const result = interleaved(a, b, c)
  expect(result).toBeFalsy()
})

test('a:abed, b:abcd, c:aabcbcdd', () => {
  const a = 'abed'
  const b = 'abcd'
  const c = 'aabcbcdd'
  const result = interleaved(a, b, c)
  expect(result).toBeFalsy()
})

test('a:dcba, b:abcd, c:aabcbcdd', () => {
  const a = 'dcba'
  const b = 'abcd'
  const c = 'aabcbcdd'
  const result = interleaved(a, b, c)
  expect(result).toBeFalsy()
})
