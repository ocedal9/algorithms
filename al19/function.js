function balanced(str) {
  let open = 0
  let close = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') open++
    if (str[i] == ')') close++
  }
  const dif = open - close
  if (dif === 0) return 'balanced'
  if (dif > 0) return `${dif} missing closing parentheses`
  if (dif < 0) return `${-1 * dif} missing open parentheses`
}
module.exports = balanced
