const AVL = require('./function')
const tree = new AVL()
test('insert 1', () => {
  tree.root = tree.insert(tree.root, 1)
  expect(tree.root.data).toBe(1)
})
test('insert 2', () => {
  tree.root = tree.insert(tree.root, 2)
  expect(tree.root.data).toBe(1)
  expect(tree.root.right.data).toBe(2)
})

test('insert 3', () => {
  tree.root = tree.insert(tree.root, 3)
  expect(tree.root.data).toBe(2)
  expect(tree.root.left.data).toBe(1)
  expect(tree.root.right.data).toBe(3)
})
test('insert 4', () => {
  tree.root = tree.insert(tree.root, 4)
  expect(tree.root.data).toBe(2)
  expect(tree.root.left.data).toBe(1)
  expect(tree.root.right.data).toBe(3)
  expect(tree.root.right.right.data).toBe(4)
})
test('insert 5', () => {
  tree.root = tree.insert(tree.root, 5)
  expect(tree.root.data).toBe(2)
  expect(tree.root.left.data).toBe(1)
  expect(tree.root.right.data).toBe(4)
  expect(tree.root.right.left.data).toBe(3)
  expect(tree.root.right.right.data).toBe(5)
})
test('insert 6', () => {
  tree.root = tree.insert(tree.root, 6)
  expect(tree.root.data).toBe(4)
  expect(tree.root.left.data).toBe(2)
  expect(tree.root.left.left.data).toBe(1)
  expect(tree.root.left.right.data).toBe(3)
  expect(tree.root.right.data).toBe(5)
  expect(tree.root.right.right.data).toBe(6)
})