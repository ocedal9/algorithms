class Node {
  constructor(data, priority) {
    this.data = data
    this.priority = priority
  }
}
class PriorityQ {
  constructor() {
    this.heap = []
  }
  insert(data, priority) {
    const node = new Node(data, priority)
    this.heap.push(node)
    let currentNodeIdx = this.heap.length - 1
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2)
    while (
      this.heap[currentNodeParentIdx] &&
      node.priority > this.heap[currentNodeParentIdx].priority
    ) {
      const parent = this.heap[currentNodeParentIdx]
      this.heap[currentNodeParentIdx] = node
      this.heap[currentNodeIdx] = parent
      currentNodeIdx = currentNodeParentIdx
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2)
    }
    if (
      this.heap.length >= 2 &&
      this.heap[this.heap.length - 1].priority >
        this.heap[this.heap.length - 2].priority
    ) {
      ;[this.heap[this.heap.length - 1], this.heap[this.heap.length - 2]] = [
        this.heap[this.heap.length - 2],
        this.heap[this.heap.length - 1],
      ]
    }
  }
}
module.exports = PriorityQ
