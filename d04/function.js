class MaxHeap {
  constructor() {
    this.values = []
  }

  parent(index) {
    return Math.floor((index - 1) / 2)
  }

  leftChild(index) {
    return index * 2 + 1
  }

  rightChild(index) {
    return index * 2 + 2
  }

  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    )
  }

  swap(index1, index2) {
    ;[this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ]
  }

  heapifyUp(index) {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex)

    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex)
      currentIndex = parentIndex
      parentIndex = this.parent(parentIndex)
    }
  }

  add(element) {
    this.values.push(element)
    this.heapifyUp(this.values.length - 1)
  }

  heapifyDown(index) {
    if (!this.isLeaf(index)) {
      let leftChildIndex = this.leftChild(index),
        rightChildIndex = this.rightChild(index),
        largestIndex = index
      if (this.values[leftChildIndex] > this.values[largestIndex]) {
        largestIndex = leftChildIndex
      }
      if (this.values[rightChildIndex] >= this.values[largestIndex]) {
        largestIndex = rightChildIndex
      }

      if (largestIndex !== index) {
        this.swap(index, largestIndex)
        this.heapifyDown(largestIndex)
      }
    }
  }

  extractMax() {
    if (this.values.length < 1) return 'heap is empty'
    const max = this.values[0]
    const end = this.values.pop()
    this.values[0] = end
    this.heapifyDown(0)
    return max
  }
}

function kthLargest(arr, num) {
  const heap = new MaxHeap()
  for (item of arr) {
    heap.add(item)
  }
  for (let i = 0; i < num - 1; i++) {
    heap.extractMax()
  }
  return heap.extractMax()
}

module.exports = { kthLargest }
