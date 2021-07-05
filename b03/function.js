const fs = require('fs')
const wordListPath = require('word-list')
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n')

function getAnagrams(str) {
  const string = str.split('').sort().join('')
  let set = []
  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i].split('').sort().join('')
    if (word === string) set.push(wordArray[i])
  }
  return set.length > 0 ? set : 'no anagrams found'
}
module.exports = getAnagrams
