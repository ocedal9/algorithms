const LCA = require('./function')
class Node {
  constructor(data) {
    this.left = null
    this.right = null
    this.data = data
  }
}
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)
test('should be 1', () => {
  const result = LCA(root, 1, 2)
  expect(result.data).toBe(1)
})

test('should be 1', () => {
  const result = LCA(root, 1, 3)
  expect(result.data).toBe(1)
})

test('should be 1', () => {
  const result = LCA(root, 4, 6)
  expect(result.data).toBe(1)
})

test('should be 1', () => {
  const result = LCA(root, 4, 3)
  expect(result.data).toBe(1)
})

test('should be 2', () => {
  const result = LCA(root, 4, 5)
  expect(result.data).toBe(2)
})

test('should be 2', () => {
  const result = LCA(root, 4, 2)
  expect(result.data).toBe(2)
})

test('should be 3', () => {
  const result = LCA(root, 6, 7)
  expect(result.data).toBe(3)
})

test('should be 3', () => {
  const result = LCA(root, 7, 3)
  expect(result.data).toBe(3)
})
