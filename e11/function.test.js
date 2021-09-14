const intersections = require('./function')

test('should be 3 intersections', () => {
  const lines = [
    [
      [0, 3],
      [1, 3],
    ],
    [
      [5, 3],
      [2, 3],
    ],
    [
      [4, 2],
      [1, 2],
    ],
    [
      [3, 4],
      [3, 1],
    ],
    [
      [5, 0],
      [5, 2],
    ],
    [
      [4, 1],
      [6, 1],
    ],
    [
      [6, 4],
      [6, 2],
    ],
  ]
  const result = intersections(lines)
  expect(result).toBe(3)
})

test('should be 3 intersections', () => {
  const lines = [
    [
      [1, 1],
      [1, 2],
    ],
    [
      [2, 1],
      [2, 4],
    ],
    [
      [1, 3],
      [3, 3],
    ],
    [
      [1, 4],
      [1, 6],
    ],
    [
      [4, 3],
      [4, 6],
    ],
    [
      [2, 5],
      [5, 5],
    ],
  ]
  const result = intersections(lines)
  expect(result).toBe(2)
})
