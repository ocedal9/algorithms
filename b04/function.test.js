const isRotation = require('./function')

test('pots, spot', () => {
  const result = isRotation('pots', 'spot')
  expect(result).toBeTruthy()
})

test('spot, spot', () => {
  const result = isRotation('spot', 'spot')
  expect(result).toBeTruthy()
})

test('s, s', () => {
  const result = isRotation('s', 's')
  expect(result).toBeTruthy()
})

test('constitution, titutioncons', () => {
  const result = isRotation('constitution', 'titutioncons')
  expect(result).toBeTruthy()
})

test('potts, spot', () => {
  const result = isRotation('potts', 'spot')
  expect(result).toBeFalsy()
})

test('post, spot', () => {
  const result = isRotation('post', 'spot')
  expect(result).toBeFalsy()
})
