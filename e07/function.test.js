const { insert, deleteFun } = require('./function')

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

test('insert 5', () => {
  const root = null
  const result = insert(root, 5)
  expect(result.data).toBe(5)
})

test('insert 3', () => {
  let root = new Node(5)
  const result = insert(root, 3)
  expect(result.left.data).toBe(3)
})

test('insert 4', () => {
  let root = new Node(5)
  root.left = new Node(3)
  const result = insert(root, 4)
  expect(result.left.right.data).toBe(4)
})

test('insert 2', () => {
  let root = new Node(5)
  root.left = new Node(3)
  const result = insert(root, 2)
  expect(result.left.left.data).toBe(2)
})
test('delete 2', () => {
  let root = new Node(5)
  root.left = new Node(3)
  root.right = new Node(7)
  root.left.left = new Node(2)
  root.left.right = new Node(4)
  root.right.left = new Node(6)
  root.right.right = new Node(8)
  const result = deleteFun(root, 2)
  expect(result.left.left).toBe(null)
})

test('delete 2', () => {
  let root = new Node(5)
  root.left = new Node(3)
  root.right = new Node(7)
  root.left.left = new Node(2)
  root.left.right = new Node(4)
  root.right.left = new Node(6)
  root.right.right = new Node(8)
  const result = deleteFun(root, 4)
  expect(result.left.right).toBe(null)
})

test('delete 3', () => {
  let root = new Node(5)
  root.left = new Node(3)
  root.right = new Node(7)
  root.left.left = new Node(2)
  root.left.right = new Node(4)
  root.right.left = new Node(6)
  root.right.right = new Node(8)
  const result = deleteFun(root, 3)
  expect(result.left.data).toBe(4)
})

test('delete 7', () => {
  let root = new Node(5)
  root.left = new Node(3)
  root.right = new Node(7)
  root.left.left = new Node(2)
  root.left.right = new Node(4)
  root.right.left = new Node(6)
  root.right.right = new Node(8)
  const result = deleteFun(root, 7)
  expect(result.right.data).toBe(8)
})

test('delete 5', () => {
  let root = new Node(5)
  root.left = new Node(3)
  root.right = new Node(7)
  root.left.left = new Node(2)
  root.left.right = new Node(4)
  root.right.left = new Node(6)
  root.right.right = new Node(8)
  const result = deleteFun(root, 5)
  expect(result.data).toBe(6)
})
