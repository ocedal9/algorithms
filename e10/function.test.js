const priorityQ = require('./function')
const Q = new priorityQ()
test('insert d, priority 3', () => {
  Q.insert('d', 3)
  expect(Q.heap[0].data).toBe('d')
})

test('insert b, priority 5', () => {
  Q.insert('b', 5)
  expect(Q.heap[0].data).toBe('b')
  expect(Q.heap[1].data).toBe('d')
})

test('insert f, priority 1', () => {
  Q.insert('f', 1)
  expect(Q.heap[0].data).toBe('b')
  expect(Q.heap[1].data).toBe('d')
  expect(Q.heap[2].data).toBe('f')
})

test('insert a, priority 6', () => {
  Q.insert('a', 6)
  expect(Q.heap[0].data).toBe('a')
  expect(Q.heap[1].data).toBe('b')
  expect(Q.heap[2].data).toBe('d')
  expect(Q.heap[3].data).toBe('f')
})

test('insert c, priority 4', () => {
  Q.insert('c', 4)
  expect(Q.heap[0].data).toBe('a')
  expect(Q.heap[1].data).toBe('b')
  expect(Q.heap[2].data).toBe('c')
  expect(Q.heap[3].data).toBe('d')
  expect(Q.heap[4].data).toBe('f')
})

test('insert e, priority 2', () => {
  Q.insert('e', 2)
  expect(Q.heap[0].data).toBe('a')
  expect(Q.heap[1].data).toBe('b')
  expect(Q.heap[2].data).toBe('c')
  expect(Q.heap[3].data).toBe('d')
  expect(Q.heap[4].data).toBe('e')
  expect(Q.heap[5].data).toBe('f')
})
