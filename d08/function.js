function targetSum(target) {
  let sum = 1
  let start = 1
  let end = 1
  let result = []
  while (start <= target / 2) {
    if (sum < target) {
      end += 1
      sum += end
    } else if (sum > target) {
      sum -= start
      start += 1
    } else {
      let sequence = []
      for (let i = start; i <= end; i++) sequence.push(i)
      result.push(sequence)
      sum -= start
      start += 1
    }
  }
  return result
}
module.exports = targetSum
