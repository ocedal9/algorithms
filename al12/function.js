class CircularQ {
  constructor(size) {
    this.size = size
    this.queue = []
    this.head = 0
    this.tail = -1
    this.length = 0
  }
  add(item) {
    if (this.length >= this.size) throw new Error('queue already full')
    this.tail++
    this.queue[this.tail % this.size] = item
    this.length++
  }
  getItem() {
    if (this.length == 0) throw new Error('empty queue')
    const item = this.queue[this.head % this.size]
    this.queue[this.head % this.size] = null
    this.head++
    this.length--
    return item
  }
}
module.exports = CircularQ
