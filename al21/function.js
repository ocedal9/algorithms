function passes(cars) {
  const stack = []
  let count = 0
  for (let i = 0; i < cars.length; i++) {
    cars[i] === 1 ? stack.push(cars[i]) : (count += stack.length)
  }
  return count
}
module.exports = passes
