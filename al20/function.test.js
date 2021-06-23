const balanced = require('./function')
test('balanced', () => {
  const str = ''
  const result = balanced(str)
  expect(result).toBe(true)
})

test('balanced', () => {
  const str = '(){}[]'
  const result = balanced(str)
  expect(result).toBe(true)
})

test('balanced', () => {
  const str = '({[]})'
  const result = balanced(str)
  expect(result).toBe(true)
})

test('not balanced', () => {
  const str = '{[]})'
  const result = balanced(str)
  expect(result).toBe(false)
})

test('not balanced', () => {
  const str = '([{[]})'
  const result = balanced(str)
  expect(result).toBe(false)
})

test('not balanced', () => {
  const str = '({(]})'
  const result = balanced(str)
  expect(result).toBe(false)
})
