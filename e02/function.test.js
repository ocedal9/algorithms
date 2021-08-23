const printTree = require('./function')
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(5)
root.left.left = new Node(3)
root.left.right = new Node(4)
root.right.left = new Node(6)
root.right.right = new Node(7)
test('should be [1,2,3,4,5,6,7]', () => {
  const result = printTree(root)
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])
})
let root2 = new Node(1)
root2.left = new Node(2)
root2.right = new Node(9)
root2.left.left = new Node(3)
root2.left.right = new Node(6)
root2.right.left = new Node(10)
root2.right.right = new Node(13)
root2.left.left.left = new Node(4)
root2.left.left.right = new Node(5)
root2.left.right.left = new Node(7)
root2.left.right.right = new Node(8)
root2.right.left.left = new Node(11)
root2.right.left.right = new Node(12)
root2.right.right.left = new Node(14)
root2.right.right.right = new Node(15)
test('should be [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]', () => {
  const result2 = printTree(root2)
  expect(result2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
})
const root3 = null
test('should be false', () => {
  const result3 = printTree(root3)
  expect(result3).toBeFalsy()
})
