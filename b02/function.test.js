const distance = require('./function')

test('1 empty string, 1 character', () => {
  const result = distance('', 'a')
  expect(result).toBe(1)
})

test('2 charactera, empty string', () => {
  const result = distance('bb', '')
  expect(result).toBe(2)
})

test('2 empty strings', () => {
  const result = distance('', '')
  expect(result).toBe(0)
})

test('2 equal strings', () => {
  const result = distance('fun', 'fun')
  expect(result).toBe(0)
})

test('competition, completition', () => {
  const result = distance('competition', 'completition')
  expect(result).toBe(3)
})

test('algorithm, logarithm', () => {
  const result = distance('algorithm', 'logarithm')
  expect(result).toBe(3)
})

test('working, manufacturing', () => {
  const result = distance('working', 'manufacturing')
  expect(result).toBe(12)
})
