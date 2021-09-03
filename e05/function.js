function isMirrored(sub1, sub2 = sub1) {
  if (sub1 == null && sub2 == null) return true
  if (sub1.data == sub2.data)
    return (
      isMirrored(sub1.left, sub2.right) && isMirrored(sub1.right, sub2.left)
    )
  return false
}
module.exports = isMirrored
