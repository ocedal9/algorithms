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
    console.log(this.tail, this.size, this.tail % this.size)
  }
}

const q = new CircularQ(5)
q.add('a')
q.add('b')
q.add('c')
q.add('d')
q.add('e')
q.add('f')
q.add('g')

console.log(q)
