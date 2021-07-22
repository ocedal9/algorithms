const { LinkedList, reverse } = require('./function')

test('reversed', () => {
  const ll = new LinkedList()
  ll.insertHead(1)
  ll.insertLast(2)
  ll.insertLast(3)
  ll.insertLast(4)
  ll.insertLast(5)
  ll.insertLast(6)
  ll.insertLast(7)
  ll.insertLast(8)
  ll.insertLast(9)
  ll.insertLast(10)
  const result = reverse(ll)
  expect(result.data).toBe(10)
  expect(result.next.data).toBe(9)
  expect(result.next.next.data).toBe(8)
  expect(result.next.next.next.data).toBe(7)
  expect(result.next.next.next.next.data).toBe(6)
  expect(result.next.next.next.next.next.data).toBe(5)
  expect(result.next.next.next.next.next.next.data).toBe(4)
  expect(result.next.next.next.next.next.next.next.data).toBe(3)
  expect(result.next.next.next.next.next.next.next.next.data).toBe(2)
  expect(result.next.next.next.next.next.next.next.next.next.data).toBe(1)
})
