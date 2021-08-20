function interleaved(a, b, c) {
  if (a.length + b.length !== c.length) return false
  let queueA = a.split('')
  let queueB = b.split('')
  for (let i = 0; i < c.length; i++) {
    let take = false
    if (queueA[0] == c[i]) {
      queueA.shift()
      take = true
    } else if (!take && queueB[0] == c[i]) {
      queueB.shift()
    } else {
      return false
    }
  }
  return true
}

module.exports = interleaved
