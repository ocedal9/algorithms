const { flattenRecursive, flattenIterative } = require('./function')
describe('Recursive', () => {
  test('test case', () => {
    const input = [1, [2, 3, [4], [5, 6, [[7]]], 8], 9, 10]
    const result = flattenRecursive(input)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('Recursive', () => {
  test('test case with nested array', () => {
    const input = [[[[[[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]]]]]]
    const result = flattenRecursive(input)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('Recursive', () => {
  test('test case with diferent value types', () => {
    const input = [
      null,
      undefined,
      3,
      ['string', {}, [true, [[7.84]], 8]],
      [9, 10],
    ]
    const result = flattenRecursive(input)
    expect(result).toEqual([
      null,
      undefined,
      3,
      'string',
      {},
      true,
      7.84,
      8,
      9,
      10,
    ])
  })
})

describe('Recursive', () => {
  test('test case with simple array', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = flattenRecursive(input)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('Iterative', () => {
  test('test case', () => {
    const input = [1, [2, 3, [4], [5, 6, [[7]]], 8], 9, 10]
    const result = flattenIterative(input)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('Iterative', () => {
  test('test case with nested array', () => {
    const input = [[[[[[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]]]]]]
    const result = flattenIterative(input)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('Iterative', () => {
  test('test case with diferent value types', () => {
    const input = [
      null,
      undefined,
      3,
      ['string', {}, [true, [[7.84]], 8]],
      [9, 10],
    ]
    const result = flattenIterative(input)
    expect(result).toEqual([
      null,
      undefined,
      3,
      'string',
      {},
      true,
      7.84,
      8,
      9,
      10,
    ])
  })
})

describe('Iterative', () => {
  test('test case with simple array', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = flattenIterative(input)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
