function fishEaters(fishes) {
  const stack = []
  for (let i = 0; i < fishes.length; i++) {
    if (
      fishes[i] > 0 ||
      (fishes[i] < 0 && stack[stack.length - 1] < 0) ||
      stack.length === 0
    ) {
      stack.push(fishes[i])
    }
    if (
      stack[stack.length - 1] > 0 &&
      -1 * fishes[i] > stack[stack.length - 1]
    ) {
      stack.pop()
      i--
    }
  }
  return stack.length
}
module.exports = fishEaters
