class Node {
  constructor(data, priority, next = null) {
    this.data = data
    this.prio = priority
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.next = null
    this.size = 0
  }
  insertPrio(data, prio, loopNode = null) {
    let node = new Node(data, prio, loopNode)
    if (this.next === null) {
      this.next = node
    } else {
      if (this.next.prio <= prio) {
        node.next = this.next
        this.next = node
      } else {
        let current = this.next
        while (current.next && prio < current.next.prio) {
          current = current.next
        }
        node.next = current.next
        current.next = node
      }
    }
  }
}

module.exports = { LinkedList }
