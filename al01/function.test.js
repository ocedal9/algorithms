const max = require('./function')

describe('Success', () => {
  test('positive numbers', () => {
    const arr = [1110, 100, 5, 7, 3, 7, 9, 3, 1, 5, 7, 11, 45, 67, 4, 3, 5, 7]
    const result = max(arr)
    expect(result).toBe(1110)
  })
})

describe('Success', () => {
  test('negative numbers', () => {
    const arr2 = [-3, -7, -9, -3, -1, -5, -7, -11, -45, -67, -4, -3, -5, -7]
    const result = max(arr2)
    expect(result).toBe(-1)
  })
})

describe('Success', () => {
  test('one number inside array', () => {
    const arr3 = [1]
    const result = max(arr3)
    expect(result).toBe(1)
  })
})

describe('Fail', () => {
  test('empty array', () => {
    const arr4 = []
    function getMax() {
      max(arr4)
    }
    expect(getMax).toThrowError(new Error('input error'))
  })
})

describe('Fail', () => {
  test('string data', () => {
    const arr5 = ['a']
    function getMax() {
      max(arr5)
    }
    expect(getMax).toThrowError(new Error('input error'))
  })
})

describe('Fail', () => {
  test('Nan data', () => {
    const arr6 = ['a', NaN]
    function getMax() {
      max(arr6)
    }
    expect(getMax).toThrowError(new Error('input error'))
  })
})

describe('Fail', () => {
  test('undefined data', () => {
    const arr7 = [undefined, 1]
    function getMax() {
      max(arr7)
    }
    expect(getMax).toThrowError(new Error('input error'))
  })
})

describe('Fail', () => {
  test('different kind of data', () => {
    const arr8 = [1, 'b', NaN, undefined, true]
    function getMax() {
      max(arr8)
    }
    expect(getMax).toThrowError(new Error('input error'))
  })
})
