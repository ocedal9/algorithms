const fun = require('./function')

test('should be abc', () => {
  const str = 'asdefaasbc'
  const result = fun(str)
  expect(result).toMatch('abc')
})

test('should be abcd', () => {
  const str = 'tyueajkubpocjkld'
  const result = fun(str)
  expect(result).toMatch('abcd')
})

test('should be abcde', () => {
  const str = 'abckjdslefghde'
  const result = fun(str)
  expect(result).toMatch('abcde')
})
