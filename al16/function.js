function sumBalance(input) {
  let left = 0
  let rigth = input.length - 1
  let leftSum = input[left]
  let rigthSum = input[rigth]
  while (left < rigth - 1) {
    leftSum <= rigthSum
      ? (leftSum += input[++left])
      : (rigthSum += input[--rigth])
  }
  return leftSum !== rigthSum || input.length <= 1 ? -1 : left
}
module.exports = sumBalance
