const passes = require('./function')

test('7 times the cars pass each other', () => {
  const cars = [1, -1, 1, 1, -1, -1, 1]
  const result = passes(cars)
  expect(result).toBe(7)
})

test('14 times the cars pass each other', () => {
  const cars = [1, -1, 1, 1, -1, 1, 1, -1, -1, 1]
  const result = passes(cars)
  expect(result).toBe(14)
})

test('all cars go on same direction', () => {
  const cars = [1, 1, 1, 1, 1, 1, 1, 1, 1]
  const result = passes(cars)
  expect(result).toBe(0)
})

test('1 car passes all of the rest', () => {
  const cars = [1, 1, 1, 1, 1, 1, 1, 1, 1, -1]
  const result = passes(cars)
  expect(result).toBe(9)
})

test('no cars', () => {
  const cars = []
  const result = passes(cars)
  expect(result).toBe(0)
})

test('2 cars', () => {
  const cars = [1, -1]
  const result = passes(cars)
  expect(result).toBe(1)
})

test('2 cars already passed by each other', () => {
  const cars = [-1, 1]
  const result = passes(cars)
  expect(result).toBe(0)
})
