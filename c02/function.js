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
function hasLoop(ll) {
  let slow = ll.head ? (ll.head.next ? ll.head.next : undefined) : undefined
  let fast = slow ? slow.next : undefined
  while (fast && slow !== fast) {
    slow = slow.next
    fast = fast.next ? (fast.next.next ? fast.next.next : undefined) : undefined
  }
  if (!fast) return false
  slow = ll.head
  while (slow != fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
module.exports = { LinkedList, hasLoop }
