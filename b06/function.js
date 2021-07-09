function reverseOdd(str) {
  const arr = str.split(' ')
  for (let i = 0; i < arr.length; i += 2) {
    let word = arr[i].split('')
    let newWord = ''
    for (let j = word.length - 1; j >= 0; j--) {
      newWord += word[j]
    }
    arr[i] = newWord
  }
  return arr.join(' ')
}

module.exports = reverseOdd
