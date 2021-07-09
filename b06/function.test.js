const reverseOdd = require('./function')

test('reversing the odd words of a string', () => {
  const str = 'reversing the odd words of a string'
  const result = reverseOdd(str)
  expect(result).toMatch('gnisrever the ddo words fo a gnirts')
})

test('1234qwer', () => {
  const str = '1234qwer'
  const result = reverseOdd(str)
  expect(result).toMatch('rewq4321')
})
