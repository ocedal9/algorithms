function findLCA(node, num1, num2) {
  if (!node) return null
  if (node.data == num1 || node.data == num2) return node
  let left = findLCA(node.left, num1, num2)
  let right = findLCA(node.right, num1, num2)
  if (left && right) return node
  return left ? left : right
}
module.exports = findLCA
