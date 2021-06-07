class CircularQ {
  constructor(size) {
    this.size = size
    this.queue = []
    this.head = 0
    this.tail = -1
    this.length = 0
  }
  add(item) {
    this.tail++
    if (
      this.length + 1 > this.size &&
      this.queue[this.tail % this.size] != null
    )
      this.head++
    this.queue[this.tail % this.size] = item
    this.length++
  }
  getItem() {
    const item = this.queue[this.head % this.size]
    if (item == null) throw new Error('empty queue')
    this.queue[this.head % this.size] = null
    this.head++
    this.length--
    return item
  }
}

module.exports = CircularQ
