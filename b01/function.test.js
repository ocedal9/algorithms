const sort = require('./function')

test('empty string', () => {
  const str = ''
  const result = sort(str)
  expect(result).toMatch('')
})

test('just lowercase string', () => {
  const str = 'lskfjdghlskfhgalkj'
  const result = sort(str)
  expect(result).toMatch('adffgghhjjkkklllss')
})

test('lowercase and uppercase string', () => {
  const str = 'jhgjjjJJHGHgHGdjhKJHkkjFAWe'
  const result = sort(str)
  expect(result).toMatch('AFGGHHHHJJJKWdegghhjjjjjjkk')
})

test('numbers, lowercase and uppercase string', () => {
  const str = 'fHd1sfF9R7E5Aq42we'
  const result = sort(str)
  expect(result).toMatch('124579AEFHRdeffqsw')
})

test(' symbols, numbers, lowercase and uppercase string', () => {
  const str = 'fH@#d1$sf&F9)(R7:>?E5A!@<q4></q4>2we'
  const result = sort(str)
  expect(result).toMatch('!#$&()/1244579:<<>>>?@@AEFHRdeffqqsw')
})
