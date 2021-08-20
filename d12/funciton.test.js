const getBlood = require('./function')

test('parents:O+,O-, should be O-,O+', () => {
  const string = 'O+  ,O- ,?'
  const result = getBlood(string)
  expect(result).toEqual(['O+', 'O-', ['O-', 'O+']])
})

test('parent:O+ son:O-, should be O-,O+,B+,B-,A+,A-', () => {
  const string = 'O+  ,? ,O-'
  const result = getBlood(string)
  expect(result).toEqual(['O+', ['A-', 'B-', 'O-', 'A+', 'B+', 'O+'], 'O-'])
})

test('parents:AB-, AB+, should be A+, A-, B+, B-, AB+, AB-', () => {
  const string = 'AB-,AB+,?'
  const result = getBlood(string)
  expect(result).toEqual(['AB-', 'AB+', ['A-', 'AB-', 'B-', 'A+', 'AB+', 'B+']])
})

test('parent:AB+ son:O+, should be impossible', () => {
  const string = '    AB+  ,? ,O+'
  const result = getBlood(string)
  expect(result).toEqual(['AB+', 'IMPOSSIBLE', 'O+'])
})
