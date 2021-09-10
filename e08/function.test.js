const search = require('./function')
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
let root = new Node(5)
root.left = new Node(3)
root.right = new Node(7)
root.left.left = new Node(2)
root.left.right = new Node(4)
root.right.left = new Node(6)
root.right.right = new Node(8)

test('search 5', () => {
  const result = search(root, 5)
  expect(result.data).toBe(5)
})
test('search 3', () => {
  const result = search(root, 3)
  expect(result.data).toBe(3)
})
test('search 7', () => {
  const result = search(root, 7)
  expect(result.data).toBe(7)
})
test('search 2', () => {
  const result = search(root, 2)
  expect(result.data).toBe(2)
})
test('search 4', () => {
  const result = search(root, 4)
  expect(result.data).toBe(4)
})
test('search 6', () => {
  const result = search(root, 6)
  expect(result.data).toBe(6)
})
test('search 8', () => {
  const result = search(root, 8)
  expect(result.data).toBe(8)
})
