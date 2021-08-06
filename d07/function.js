function lowLexiAndUnique(str) {
  var checked = Array(26).fill(false)
  var outputStr = ''
  for (var i = 0; i < str.length; i++) {
    if (!checked[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]) {
      while (
        outputStr.length > 0 &&
        outputStr[outputStr.length - 1].charCodeAt(0) > str[i].charCodeAt(0)
      ) {
        checked[
          outputStr[outputStr.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)
        ] = false
        outputStr = outputStr.substring(0, outputStr.length - 1)
      }
      outputStr += str[i]
      checked[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = true
    }
  }
  return outputStr
}

module.exports = lowLexiAndUnique
