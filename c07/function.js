class Node {
  constructor(data, priority, next = null) {
    this.data = data
    this.prio = priority
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  insertHead(data, prio) {
    this.head = new Node(data, prio, this.head)
  }
  insertPrio(data, prio, loopNode = null) {
    let node = new Node(data, prio, loopNode)
    if (this.head.prio <= prio) {
      node.next = this.head
      this.head = node
    } else {
      let current = this.head
      while (current.next && prio < current.next.prio) {
        current = current.next
      }
      node.next = current.next
      current.next = node
    }
  }
}

module.exports = { LinkedList }
