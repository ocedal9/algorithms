function balanced(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') count++
    if (str[i] == ')') count--
  }
  return count === 0
    ? 'balanced'
    : count > 0
    ? `${count} missing closing parentheses`
    : `${-1 * count} missing open parentheses`
}
module.exports = balanced
