const hotPotato = require('./function')
test('1 participant', () => {
  const participants = 1
  const result = hotPotato(participants)
  expect(result).toMatch('A')
  expect(result).toHaveLength(1)
})
test('5 participants', () => {
  const participants = 5
  const result = hotPotato(participants)
  expect(result).toMatch(/A|B|C|D|E/)
  expect(result).toHaveLength(1)
})

test('10 participants', () => {
  const participants = 10
  const result = hotPotato(participants)
  expect(result).toMatch(/A|B|C|D|E|F|G|H|I|J/)
  expect(result).toHaveLength(1)
})

test('26 participants', () => {
  const participants = 26
  const result = hotPotato(participants)
  expect(result).toMatch(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/)
  expect(result).toHaveLength(1)
})
