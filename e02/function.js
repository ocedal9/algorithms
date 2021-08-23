function printTree(root) {
  if (!root) return false
  const result = []
  function pushData(node) {
    result.push(node.data)
    if (node.left) pushData(node.left)
    if (node.right) pushData(node.right)
  }
  pushData(root)
  return result
}
module.exports = printTree
