const { LinkedList, getMiddle } = require('./function')

test('empty linked list', () => {
  const ll = new LinkedList()
  const result = getMiddle(ll)
  expect(result).toBe(null)
})

test('just head', () => {
  const ll = new LinkedList()
  ll.insertHead(0)
  const result = getMiddle(ll)
  expect(result.data).toBe(0)
})

test('size 2', () => {
  const ll = new LinkedList()
  ll.insertHead(0)
  ll.insertLast(1)
  const result = getMiddle(ll)
  expect(result.data).toBe(0)
})

test('size 3', () => {
  const ll = new LinkedList()
  ll.insertHead(0)
  ll.insertLast(1)
  ll.insertLast(2)
  const result = getMiddle(ll)
  expect(result.data).toBe(1)
})

test('size 4', () => {
  const ll = new LinkedList()
  ll.insertHead(0)
  ll.insertLast(1)
  ll.insertLast(2)
  ll.insertLast(3)
  const result = getMiddle(ll)
  expect(result.data).toBe(2)
})

test('size 5', () => {
  const ll = new LinkedList()
  ll.insertHead(0)
  ll.insertLast(1)
  ll.insertLast(2)
  ll.insertLast(3)
  ll.insertLast(4)
  const result = getMiddle(ll)
  expect(result.data).toBe(2)
})

test('size 6', () => {
  const ll = new LinkedList()
  ll.insertHead(0)
  ll.insertLast(1)
  ll.insertLast(2)
  ll.insertLast(3)
  ll.insertLast(4)
  ll.insertLast(5)
  const result = getMiddle(ll)
  expect(result.data).toBe(3)
})

test('size 7', () => {
  const ll = new LinkedList()
  ll.insertHead(0)
  ll.insertLast(1)
  ll.insertLast(2)
  ll.insertLast(3)
  ll.insertLast(4)
  ll.insertLast(5)
  ll.insertLast(6)
  const result = getMiddle(ll)
  expect(result.data).toBe(3)
})
