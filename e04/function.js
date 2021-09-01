let Node = function () {
  this.keys = new Map()
  this.end = false
  this.setEnd = function () {
    this.end = true
  }
  this.isEnd = function () {
    return this.end
  }
}

let Trie = function () {
  this.root = new Node()
  this.add = function (input, node = this.root) {
    const path = input.split('').sort().join('')
    for (let letter of path) {
      if (!node.keys.has(letter)) {
        node.keys.set(letter, new Node())
      }
      node = node.keys.get(letter)
    }
    node.setEnd()
    if (!node.word) {
      node.word = input
    }
  }
}

module.exports = Trie
