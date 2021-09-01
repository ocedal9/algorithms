const Trie = require('./function')
const fs = require('fs')
const wordListPath = require('word-list')
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n')
let myTrie = new Trie()
wordArray.forEach((word) => {
  myTrie.add(word)
})

test('aah is word', () => {
  const result = myTrie.root.keys.get('a').keys.get('a').keys.get('h').isEnd()
  expect(result).toBeTruthy()
})
test('spot is word', () => {
  const result = myTrie.root.keys
    .get('o')
    .keys.get('p')
    .keys.get('s')
    .keys.get('t')
    .isEnd()
  expect(result).toBeTruthy()
})
test('power is not a word', () => {
  const result = myTrie.root.keys
    .get('e')
    .keys.get('o')
    .keys.get('p')
    .keys.get('r')
    .keys.get('w')
    .isEnd()
  expect(result).toBeTruthy()
})
test('aaa is not a word', () => {
  const result = myTrie.root.keys.get('a').keys.get('a').keys.get('a').isEnd()
  expect(result).toBeFalsy()
})
