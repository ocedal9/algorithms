function getSub(S, T) {
  let chars = new Array(256).fill(0)
  let subLength = 0
  let start = 0
  let count = T.length
  for (let i = 0; i < T.length; i++) {
    chars[T[i].charCodeAt(0)]++
  }
  let first = 0
  let last = 0
  while (last < S.length) {
    chars[S[last].charCodeAt(0)]--
    if (chars[S[last].charCodeAt(0)] == 0) count--
    if (count == 0) {
      while (count == 0) {
        if (subLength > last - first + 1 || subLength == 0) {
          subLength = last - first + 1
          start = first
        }
        chars[S[first].charCodeAt(0)]++
        if (chars[S[first].charCodeAt(0)] > 0) count++
        first++
      }
    }
    last++
  }
  return subLength > 0 ? S.substring(start, start + subLength) : false
}
module.exports = getSub
