function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false
  let queue = s1.split('')
  for (let i = 0; i < s2.length; i++) {
    let item = queue.shift()
    queue.push(item)
    let word = queue.join('')
    if (word === s2) return true
  }
  return false
}
module.exports = isRotation
