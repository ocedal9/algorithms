function converter(num, base) {
  let stack = []
  while (num > 0) {
    let val = num % base
    const char = val > 9 ? String.fromCharCode(val + 55) : String(val)
    stack.push(char)
    num = (num - (num % base)) / base
  }
  let result = ''
  while (stack.length > 0) {
    result += stack.pop()
  }
  return result || '0'
}

module.exports = converter
