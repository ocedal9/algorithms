function search(root, data) {
  return root == null || root.data == data
    ? root
    : root.data > data
    ? search(root.left, data)
    : search(root.right, data)
}

module.exports = search
