const converter = require('./function')

test('digits to base 16', () => {
  const num1 = '9'
  const num2 = '11'
  const num3 = '14'
  const num4 = '16'
  const result1 = converter(num1, 16)
  const result2 = converter(num2, 16)
  const result3 = converter(num3, 16)
  const result4 = converter(num4, 16)
  expect(result1).toBe('9')
  expect(result2).toBe('B')
  expect(result3).toBe('E')
  expect(result4).toBe('10')
})

test('123456 to binary', () => {
  const num = '123456'
  const result = converter(num, 2)
  expect(result).toBe('11110001001000000')
})

test('123456 to base 8', () => {
  const num = '123456'
  const result = converter(num, 8)
  expect(result).toBe('361100')
})

test('123456 to base 20', () => {
  const num = '123456'
  const result = converter(num, 20)
  expect(result).toBe('F8CG')
})

test('0 to base 12', () => {
  const num = '0'
  const result = converter(num, 12)
  expect(result).toBe('0')
})
