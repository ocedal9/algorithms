const CircularQ = require('./function')
const q = new CircularQ(3)
describe('add item to queue', () => {
  test('add first item', () => {
    q.add('a')
    expect(q.queue).toStrictEqual(['a'])
  })
})

describe('add item to queue', () => {
  test('add second item', () => {
    q.add('b')
    expect(q.queue).toStrictEqual(['a', 'b'])
  })
})

describe('add item to queue', () => {
  test('add third item', () => {
    q.add('c')
    expect(q.queue).toStrictEqual(['a', 'b', 'c'])
  })
})

describe('add item to queue', () => {
  test('add fourth item, should be error, size excedeed', () => {
    function queueFun() {
      q.add('d')
    }
    expect(queueFun).toThrowError(new Error('queue already full'))
  })
})

describe('get front item', () => {
  test('get first item', () => {
    const item = q.getItem()
    expect(item).toBe('a')
    expect(q.queue).toStrictEqual([null, 'b', 'c'])
  })
})

describe('get front item', () => {
  test('get second item', () => {
    const item = q.getItem()
    expect(item).toBe('b')
    expect(q.queue).toStrictEqual([null, null, 'c'])
  })
})

describe('re-fill queue', () => {
  test('add fourth item', () => {
    q.add('d')
    expect(q.queue).toStrictEqual(['d', null, 'c'])
  })
})

describe('re-fill queue', () => {
  test('add fifth item', () => {
    q.add('e')
    expect(q.queue).toStrictEqual(['d', 'e', 'c'])
  })
})

describe('get item of empty queue', () => {
  test('should be error', () => {
    q.getItem()
    q.getItem()
    q.getItem()
    function queueFun() {
      q.getItem()
    }
    expect(q.queue).toStrictEqual([null, null, null])
    expect(queueFun).toThrowError(new Error('empty queue'))
  })
})
