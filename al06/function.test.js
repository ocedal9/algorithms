const merge = require('./function')

describe('Success', () => {
  test('positive numbers', () => {
    const array1 = [2, 6, 9, , , ,]
    const array2 = [4, 7, 8]
    const result = merge(array1, array2)
    expect(result).toStrictEqual([2, 4, 6, 7, 8, 9])
  })
})

describe('Success', () => {
  test('negative numbers', () => {
    const array1 = [-2, -0.1, -0.001, , , ,]
    const array2 = [-4, -0.66, -0.00009]
    const result = merge(array1, array2)
    expect(result).toStrictEqual([-4, -2, -0.66, -0.1, -0.001, -0.00009])
  })
})

describe('Success', () => {
  test('mixed numbers', () => {
    const array1 = [-2, 0, 9.1, , , , , ,]
    const array2 = [-8, -6, -4, -0.66, 8]
    const result = merge(array1, array2)
    expect(result).toStrictEqual([-8, -6, -4, -2, -0.66, 0, 8, 9.1])
  })
})

describe('Fail', () => {
  test('extra long empty space', () => {
    const array1 = [2, 6, 9, , , , ,]
    const array2 = [4, 7, 8]
    function mergeArr() {
      merge(array1, array2)
    }
    expect(mergeArr).toThrowError(new Error('wrong input data'))
  })
})
describe('Fail', () => {
  test('short empty space', () => {
    const array1 = [2, 6, 9, , ,]
    const array2 = [4, 7, 8]
    function mergeArr() {
      merge(array1, array2)
    }
    expect(mergeArr).toThrowError(new Error('wrong input data'))
  })
})
