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
function palindrome(ll) {
  let pointer = ll.head
  let stack = []

  while (pointer) {
    stack.push(pointer.data)
    pointer = pointer.next
  }
  let pal = true
  pointer = ll.head
  while (pal && pointer) {
    const data = stack.pop()
    if (data !== pointer.data) return false
    pointer = pointer.next
  }
  return true
}

module.exports = { LinkedList, palindrome }
