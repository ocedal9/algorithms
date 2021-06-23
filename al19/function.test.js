const balanced = require('./function')

test('no parentheses', () => {
  const result = balanced('')
  expect(result).toMatch(/balanced/)
})

test('4 pairs of parentheses', () => {
  const result = balanced('()()()()')
  expect(result).toMatch(/balanced/)
})

test('missing 1 open parentheses', () => {
  const result = balanced(')()()()')
  expect(result).toMatch('1 missing open parentheses')
})

test('missing 1 closing parentheses', () => {
  const result = balanced('(()()()')
  expect(result).toMatch('1 missing closing parentheses')
})
