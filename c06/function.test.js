const { LinkedList, palindrome } = require('./function')

test('is palindrome', () => {
  const ll = new LinkedList()
  ll.insertHead(8)
  ll.insertLast(3)
  ll.insertLast(5)
  ll.insertLast(9)
  ll.insertLast(1)
  ll.insertLast(9)
  ll.insertLast(5)
  ll.insertLast(3)
  ll.insertLast(8)
  const result = palindrome(ll)
  expect(result).toBeTruthy()
})

test('is not palindrome', () => {
  const ll = new LinkedList()
  ll.insertHead(8)
  ll.insertLast(3)
  ll.insertLast(5)
  ll.insertLast(9)
  ll.insertLast(1)
  ll.insertLast(9)
  ll.insertLast(5)
  ll.insertLast(3)
  ll.insertLast(9)
  const result = palindrome(ll)
  expect(result).toBeFalsy()
})