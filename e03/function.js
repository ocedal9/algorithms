function sameDepth(root, n1, n2) {
  function getData(node, n) {
    let depth = []
    function getLvl(node, n, lvl = 0) {
      if (!node) return null
      if (!depth[lvl]) depth[lvl] = false
      if (node.data == n) depth[lvl] = true
      lvl++
      getLvl(node.left, n, lvl)
      getLvl(node.right, n, lvl)
    }
    getLvl(node, n)
    return depth
  }
  const lvl1 = getData(root, n1)
  const lvl2 = getData(root, n2)
  for (let i = 0; i < lvl1.length; i++) {
    if (lvl1[i] && lvl2[i]) return true
  }
  return false
}
module.exports = sameDepth
