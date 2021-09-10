class Node {
  constructor(data) {
    this.data = data
    this.height = 1
    this.left = null
    this.right = null
  }
}
class AVL {
  constructor() {
    this.root = null
  }
  height(node) {
    return node == null ? 0 : node.height
  }
  balance(node) {
    return node == null ? 0 : this.height(node.left) - this.height(node.right)
  }
  rightRotation(y) {
    var x = y.left
    var sub2 = x.right
    x.right = y
    y.left = sub2
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1
    return x
  }
  leftRotation(x) {
    var y = x.right
    var sub2 = y.left
    y.left = x
    x.right = sub2
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1
    return y
  }
  insert(node, data) {
    if (node == null) return new Node(data)
    if (data < node.data) node.left = this.insert(node.left, data)
    else if (data > node.data) node.right = this.insert(node.right, data)
    else return node
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right))
    var balance = this.balance(node)
    if (balance > 1 && data < node.left.data) return this.rightRotation(node)
    if (balance < -1 && data > node.right.data) return this.leftRotation(node)
    if (balance > 1 && data > node.left.data) {
      node.left = this.leftRotation(node.left)
      return this.rightRotation(node)
    }
    if (balance < -1 && data < node.right.data) {
      node.right = this.rightRotation(node.right)
      return this.leftRotation(node)
    }
    return node
  }
}

module.exports = AVL
