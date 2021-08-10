function getLongest(input) {
  let count = Array(10).fill(0)
  let first = 0
  let last = 0
  let digits = 0
  let pointer = 0
  for (var i = 0; i < input.length; i++) {
    count[input[i]]++
    if (count[input[i]] == 1) digits++
    while (digits > 2) {
      count[input[pointer]]--
      if (count[input[pointer]] == 0) digits--
      pointer++
    }
    if (i - pointer >= last - first) {
      first = pointer
      last = i
    }
  }
  return input.slice(first, last + 1)
}
module.exports = getLongest
