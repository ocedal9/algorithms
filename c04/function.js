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

function mergeSort(head) {
  if (head.next == null) return head
  let mid = middle(head)
  let head2 = mid.next
  mid.next = null
  const ll1 = mergeSort(head)
  const ll2 = mergeSort(head2)
  const merged = merge(ll1, ll2)
  return merged
}

function middle(head) {
  let slow = head
  let fast = head.next
  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

function merge(head1, head2) {
  let start = new Node()
  let newNode = start
  while (head1 != null && head2 != null) {
    if (head1.data < head2.data) {
      newNode.next = head1
      head1 = head1.next
    } else {
      newNode.next = head2
      head2 = head2.next
    }
    newNode = newNode.next
  }
  while (head1 != null) {
    newNode.next = head1
    head1 = head1.next
    newNode = newNode.next
  }
  while (head2 != null) {
    newNode.next = head2
    head2 = head2.next
    newNode = newNode.next
  }
  return start.next
}

module.exports = { LinkedList, mergeSort }
