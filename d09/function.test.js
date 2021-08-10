const getLongest = require('./function')

test('should be 1121222', () => {
  const result = getLongest('1212223311212223')
  expect(result).toMatch('1121222')
})

test('should be 111', () => {
  const result = getLongest('111')
  expect(result).toMatch('111')
})

test('should be 566556', () => {
  const result = getLongest('10054789845665562144184665411178')
  expect(result).toMatch('566556')
})

test('should be 33334444', () => {
  const result = getLongest('1111222233334444')
  expect(result).toMatch('33334444')
})
