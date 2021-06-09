const routes = require('./function')

test('rows=2, colums=2, espected=2', () => {
  const result = routes(2, 2)
  expect(result).toBe(2)
})

test('rows=3, colums=2, expected=3', () => {
  const result = routes(3, 2)
  expect(result).toBe(3)
})

test('rows=2, colums=3, expected=3', () => {
  const result = routes(2, 3)
  expect(result).toBe(3)
})

test('rows=3, colums=3, expected=3', () => {
  const result = routes(3, 3)
  expect(result).toBe(6)
})

test('rows=5, colums=3, expected=15', () => {
  const result = routes(5, 3)
  expect(result).toBe(15)
})

test('rows=5, colums=4, expected=35', () => {
  const result = routes(5, 4)
  expect(result).toBe(35)
})

test('rows=5, colums=5, expected=70', () => {
  const result = routes(5, 5)
  expect(result).toBe(70)
})

test('rows=6, colums=6, expected=252', () => {
  const result = routes(6, 6)
  expect(result).toBe(252)
})
