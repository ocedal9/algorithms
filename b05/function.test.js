const permutation = require('./function')

test('empty strings', () => {
  const result = permutation('', '')
  expect(result).toBeTruthy()
})

test('same letter', () => {
  const result = permutation('a', 'a')
  expect(result).toBeTruthy()
})

test('lowercase and uppercase', () => {
  const result = permutation('a', 'A')
  expect(result).toBeFalsy()
})

test('mixed letters, uppercase and lowercase', () => {
  const result = permutation('AZqwerty', 'ytrewqAZ')
  expect(result).toBeTruthy()
})

test('different lengths', () => {
  const result = permutation('a', 'aa')
  expect(result).toBeFalsy()
})

test('different letters', () => {
  const result = permutation('abc', 'aba')
  expect(result).toBeFalsy()
})
