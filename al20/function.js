function balanced(str) {
  let stack = []
  for (let i = 0; i < str.length; i++) {
    if ('{[('.includes(str[i])) stack.push(str[i])
    if ('}])'.includes(str[i])) {
      if (stack.length === 0) return false
      let last = stack.pop()
      if (str[i] === ')' && last !== '(') return false
      if (str[i] === '}' && last !== '{') return false
      if (str[i] === ']' && last !== '[') return false
    }
  }
  return stack.length === 0
}
module.exports = balanced
