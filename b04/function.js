function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false
  let str1 = s1.split('')
  let str2 = s2.split('')
  return recursion(str1, str2)
}
function recursion(s1, s2, t = s1.length) {
  if (t == 0) return false
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      let head = s2.shift()
      s2.push(head)
      return recursion(s1, s2, --t)
    }
  }
  return true
}
module.exports = isRotation
