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
function range(node, k1, k2) {
  let count = 0
  function recursive(node, k1, k2) {
    if (node == null) {
      return 0
    }
    if (k1 < node.data) {
      recursive(node.left, k1, k2)
    }
    if (k1 <= node.data && k2 >= node.data) {
      count++
    }
    recursive(node.right, k1, k2)
  }
  recursive(node, k1, k2)
  return count
}

class Point {
  constructor(x, y, line, isLeft = false) {
    this.x = x
    this.y = y
    this.isLeft = isLeft
    this.line = line
  }
}
function intersections(lines) {
  let pointsArr = []
  let segment = []
  for (let i = 0; i < lines.length; i++) {
    let line = [...lines[i]]
    if (line[0][0] > line[1][0]) {
      ;[line[0], line[1]] = [line[1], line[0]]
    }
    segment.push(line)
    for (let j = 0; j < 2; j++) {
      let point
      if (j == 0) {
        point = new Point(line[0][0], line[0][1], i, true)
      } else {
        point = new Point(line[1][0], line[1][1], i)
      }
      pointsArr.push(point)
    }
  }
  const sortedPoints = pointsArr.sort((a, b) => {
    return a.x - b.x
  })
  let root = null
  let count = 0
  for (let i = 0; i < sortedPoints.length; i++) {
    const point = sortedPoints[i]
    if (point.isLeft) {
      if (
        point.line == sortedPoints[i + 1].line &&
        point.x == sortedPoints[i + 1].x
      ) {
        const rangeVer = [point.y, sortedPoints[i + 1].y]
        const ranVerSort = rangeVer.sort()
        const result = range(root, ranVerSort[0], ranVerSort[1])
        count += result
        i++
      } else {
        root = insert(root, point.y)
      }
    } else {
      root = deleteFun(root, point.y)
    }
  }
  return count
}
module.exports = intersections
