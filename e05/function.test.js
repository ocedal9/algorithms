const isMirrored = require('./function')

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
test('true, 2 levels', () => {
  let root = new Node(1)
  root.left = new Node(2)
  root.right = new Node(2)
  const result = isMirrored(root)
  expect(result).toBeTruthy()
})

test('true, 3 levels', () => {
  let root = new Node(1)
  root.left = new Node(2)
  root.right = new Node(2)
  root.left.left = new Node(3)
  root.left.right = new Node(4)
  root.right.left = new Node(4)
  root.right.right = new Node(3)
  const result = isMirrored(root)
  expect(result).toBeTruthy()
})

test('true, 4 levels', () => {
  let root = new Node(1)
  root.left = new Node(2)
  root.right = new Node(2)
  root.left.left = new Node(3)
  root.left.right = new Node(4)
  root.right.left = new Node(4)
  root.right.right = new Node(3)
  root.left.left.left = new Node(5)
  root.left.left.right = new Node(6)
  root.left.right.left = new Node(7)
  root.left.right.right = new Node(8)
  root.right.left.left = new Node(8)
  root.right.left.right = new Node(7)
  root.right.right.left = new Node(6)
  root.right.right.right = new Node(5)
  const result = isMirrored(root)
  expect(result).toBeTruthy()
})

test('false, 2 levels', () => {
  let root = new Node(1)
  root.left = new Node(2)
  root.right = new Node(3)
  const result = isMirrored(root)
  expect(result).toBeFalsy()
})

test('false, 3 levels', () => {
  let root = new Node(1)
  root.left = new Node(2)
  root.right = new Node(2)
  root.left.left = new Node(3)
  root.left.right = new Node(4)
  root.right.left = new Node(3)
  root.right.right = new Node(3)
  const result = isMirrored(root)
  expect(result).toBeFalsy()
})

test('false, 4 levels', () => {
  let root = new Node(1)
  root.left = new Node(2)
  root.right = new Node(2)
  root.left.left = new Node(3)
  root.left.right = new Node(4)
  root.right.left = new Node(4)
  root.right.right = new Node(3)
  root.left.left.left = new Node(5)
  root.left.left.right = new Node(6)
  root.left.right.left = new Node(7)
  root.left.right.right = new Node(8)
  root.right.left.left = new Node(8)
  root.right.left.right = new Node(7)
  root.right.right.left = new Node(6)
  root.right.right.right = new Node(6)
  const result = isMirrored(root)
  expect(result).toBeFalsy()
})
