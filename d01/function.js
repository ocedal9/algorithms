const fs = require('fs')
const wordListPath = require('word-list')
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n')

function Node() {
  this.keys = new Map()
  this.end = false
  this.setEnd = function () {
    this.end = true
  }
  this.isEnd = function () {
    return this.end
  }
}

function Trie() {
  this.root = new Node()
  this.longest = ''
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
  this.getLongest = function (array, str = '', node = this.root, idx = 0) {
    if (node.isEnd() && node.word.length >= str.length) {
      if (node.word.length == str.length) {
        let momArray = [str, node.word].sort()
        this.longest = momArray[0]
      } else {
        str = node.word
        this.longest = str
      }
    }
    for (let [key, child] of node.keys) {
      const pos = array.indexOf(key, idx)
      if (pos !== -1) {
        const word = this.getLongest(array, str, child, pos + 1)
        if (word.length > str.length) str = word
      }
    }
    return str
  }
}
let myTrie = new Trie()
wordArray.forEach((word) => {
  myTrie.add(word)
})

let getLongestWord = function (letters) {
  myTrie.longest = ''
  const arr = letters.sort()
  myTrie.getLongest(arr)
  return myTrie.longest
}

module.exports = { getLongestWord }
