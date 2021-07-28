const { getLongestWord } = require('./function')

test('test aannt', () => {
  const letters = ['a', 'n', 'a', 'n', 't']
  const result = getLongestWord(letters)
  expect(result).toBe('annat')
})

test('test benefic', () => {
  const letters = ['a', 'b', 'c', 'e', 'e', 'f', 'i', 'j', 'n']
  const result = getLongestWord(letters)
  expect(result).toBe('benefic')
})

test('test dermatoglyphics', () => {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  const result = getLongestWord(letters)
  expect(result).toBe('dermatoglyphics')
})
