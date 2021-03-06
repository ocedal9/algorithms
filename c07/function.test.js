const { LinkedList } = require('./function')

test('higher number, higher priority', () => {
  const ll = new LinkedList()
  ll.insertPrio('e', 3)
  ll.insertPrio('c', 5)
  ll.insertPrio('g', 1)
  ll.insertPrio('b', 6)
  ll.insertPrio('d', 4)
  ll.insertPrio('a', 7)
  ll.insertPrio('f', 2)
  expect(ll.next.data).toMatch('a')
  expect(ll.next.next.data).toMatch('b')
  expect(ll.next.next.next.data).toMatch('c')
  expect(ll.next.next.next.next.data).toMatch('d')
  expect(ll.next.next.next.next.next.data).toMatch('e')
  expect(ll.next.next.next.next.next.next.data).toMatch('f')
  expect(ll.next.next.next.next.next.next.next.data).toMatch('g')
})
