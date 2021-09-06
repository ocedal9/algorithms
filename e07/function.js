class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
function insert(root, data) {
  if (root == null) {
    root = new Node(data)
    return root
  }
  if (data < root.data) {
    root.left = insert(root.left, data)
  } else if (data > root.data) {
    root.right = insert(root.right, data)
  }
  return root
}
function deleteFun(root, data) {
  if (root == null) return root
  if (data < root.data) root.left = deleteFun(root.left, data)
  else if (data > root.data) root.right = deleteFun(root.right, data)
  else {
    if (root.left == null) return root.right
    else if (root.right == null) return root.left
    root.data = minval(root.right)
    root.right = deleteFun(root.right, root.data)
  }
  return root
}
function minval(root) {
  let minv = root.data
  while (root.left != null) {
    minv = root.left.data
    root = root.left
  }
  return minv
}
module.exports = { insert, deleteFun }
