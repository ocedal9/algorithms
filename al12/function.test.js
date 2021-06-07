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
  test('add fourth item, should re-write items', () => {
    q.add('d')
    expect(q.queue).toStrictEqual(['d', 'b', 'c'])
  })
})

describe('get front item', () => {
  test('get first item', () => {
    const item = q.getItem()
    expect(item).toBe('b')
    expect(q.queue).toStrictEqual(['d', null, 'c'])
  })
})

describe('add item to queue', () => {
  test('add fifth item, shuold fill tail', () => {
    q.add('e')
    expect(q.queue).toStrictEqual(['d', 'e', 'c'])
  })
})

describe('add item to queue', () => {
  test('add six item, should re-write head', () => {
    q.add('f')
    expect(q.queue).toStrictEqual(['d', 'e', 'f'])
  })
})

describe('add item to queue', () => {
  test('add seventh item, should re-write head', () => {
    q.add('g')
    expect(q.queue).toStrictEqual(['g', 'e', 'f'])
  })
})

describe('get front item', () => {
  test('get item', () => {
    const item = q.getItem()
    expect(item).toBe('e')
    expect(q.queue).toStrictEqual(['g', null, 'f'])
  })
})
describe('get front item', () => {
  test('get item', () => {
    const item = q.getItem()
    expect(item).toBe('f')
    expect(q.queue).toStrictEqual(['g', null, null])
  })
})
describe('get front item', () => {
  test('get item', () => {
    const item = q.getItem()
    expect(item).toBe('g')
    expect(q.queue).toStrictEqual([null, null, null])
  })
})

describe('get item of empty queue', () => {
  test('should be error', () => {
    function queueFun() {
      q.getItem()
    }
    expect(q.queue).toStrictEqual([null, null, null])
    expect(queueFun).toThrowError(new Error('empty queue'))
  })
})
