const sameDepth = require('./function')
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)
root.left.left.left = new Node(8)
root.left.left.right = new Node(9)
root.left.right.left = new Node(10)
root.left.right.right = new Node(11)
root.right.left.left = new Node(12)
root.right.left.right = new Node(13)
root.right.right.left = new Node(14)
root.right.right.right = new Node(15)
describe('true', () => {
  test('2 and 3', () => {
    expect(sameDepth(root, 2, 3)).toBeTruthy()
  })
})
describe('true', () => {
  test('4 and 5', () => {
    expect(sameDepth(root, 4, 5)).toBeTruthy()
  })
})
describe('true', () => {
  test('4 and 7', () => {
    expect(sameDepth(root, 4, 7)).toBeTruthy()
  })
})
describe('true', () => {
  test('9 and 13', () => {
    expect(sameDepth(root, 9, 13)).toBeTruthy()
  })
})
describe('false', () => {
  test('1 and 2', () => {
    expect(sameDepth(root, 1, 2)).toBeFalsy()
  })
})

describe('false', () => {
  test('2 and 4', () => {
    expect(sameDepth(root, 2, 4)).toBeFalsy()
  })
})
describe('false', () => {
  test('7 and 8', () => {
    expect(sameDepth(root, 7, 8)).toBeFalsy()
  })
})
describe('false', () => {
  test('1 and 15', () => {
    expect(sameDepth(root, 1, 15)).toBeFalsy()
  })
})
