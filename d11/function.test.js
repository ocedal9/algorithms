const getSub = require('./function')

test('should be abcdefghijk', () => {
  const S = 'abcdefghijk'
  const T = 'ak'
  const result = getSub(S, T)
  expect(result).toMatch('abcdefghijk')
})

test('should be defgh', () => {
  const S = 'abcdefghijk'
  const T = 'dh'
  const result = getSub(S, T)
  expect(result).toMatch('defgh')
})

test('should be fg', () => {
  const S = 'abcdefghijk'
  const T = 'fg'
  const result = getSub(S, T)
  expect(result).toMatch('fg')
})
