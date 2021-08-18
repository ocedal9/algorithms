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

function getMiddle(ll) {
  if (ll.size == 2) return ll.head
  let slow = ll.head
  let fast = ll.head?.next
  while (fast) {
    slow = slow?.next
    fast = fast?.next?.next
  }
  return slow
}

module.exports = { LinkedList, getMiddle }
