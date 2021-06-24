const fun = require('./function')

test('proposed values', () => {
  const fishes = [-2, 6, 1, -7, -5, 4, -3]
  const result = fun(fishes)
  expect(result).toBe(4)
})

test('should be 5', () => {
  const fishes = [-2, 8, 6, -9, 1, -7, -5, 4, -3]
  const result = fun(fishes)
  expect(result).toBe(5)
})

test('2 moving in opposite direction without crossing each other', () => {
  const fishes = [-2, 3]
  const result = fun(fishes)
  expect(result).toBe(2)
})

test('2 moving in opposite direction crossing each other', () => {
  const fishes = [2, -3]
  const result = fun(fishes)
  expect(result).toBe(1)
})

test('one fish', () => {
  const fishes = [2]
  const result = fun(fishes)
  expect(result).toBe(1)
})

test('no fish', () => {
  const fishes = []
  const result = fun(fishes)
  expect(result).toBe(0)
})
