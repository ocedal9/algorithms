function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false
  let str = s1 + s1
  return str.includes(s2)
}
module.exports = isRotation
