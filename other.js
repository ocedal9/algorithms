/* Searches the element x in mat[][]. If the
element is found, then prints its position
and returns true, otherwise prints "not found"
and returns false */
function search(mat, n, x) {
  // set indexes for top right
  let i = 0,
    j = n - 1
  // element

  while (i < n && j >= 0) {
    if (mat[i][j] == x) {
      console.log('n Found at ' + i + ' ' + j)
      return
    }
    if (mat[i][j] > x) j--
    // if mat[i][j] < x
    else i++
  }

  console.log('n Element not found')
  return // if ( i==n || j== -1 )
}
// driver program to test above function

let mat = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
]

search(mat, 4, 29)
