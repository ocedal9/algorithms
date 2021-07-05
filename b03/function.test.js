const anagrams = require('./function')

test('sopt', () => {
  const str = 'sopt'
  const result = anagrams(str)
  expect(result).toEqual(['opts', 'post', 'pots', 'spot', 'stop', 'tops'])
})

test('tdeah', () => {
  const str = 'tdeah'
  const result = anagrams(str)
  expect(result).toEqual(['death', 'hated'])
})

test('asdfhytju', () => {
  const str = 'asdfhytju'
  const result = anagrams(str)
  expect(result).toMatch('no anagrams found')
})
