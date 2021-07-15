class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  insertHead(data) {
    this.head = new Node(data, this.head)
    this.size++
  }
  insertLast(data, loopNode = null) {
    let node = new Node(data, loopNode)
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
    this.size++
  }
}

function kth(num, ll) {
  let last = ll.head
  let kth = ll.head
  for (let i = 0; i < num; i++) {
    if (!last.next) return 'the list is shorter than the number'
    last = last.next
  }
  while (last.next) {
    last = last.next ? last.next : undefined
    kth = kth.next ? kth.next : undefined
  }
  return kth
}
module.exports = { LinkedList, kth }
