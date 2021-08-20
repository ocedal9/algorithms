const parentsCreators = {
  A: ['A', 'O'],
  AB: ['A', 'B'],
  B: ['B', 'O'],
  O: ['O'],
}
const formBy = {
  A: ['A', 'AB'],
  B: ['B', 'AB'],
  AB: ['A', 'B'],
  O: ['A', 'B', 'O'],
}
const refArray = ['A-', 'AB-', 'B-', 'O-', 'A+', 'AB+', 'B+', 'O+']
function getBloodType(input) {
  let lookingFor = false
  const array = input.split(',')
  const elem = []
  for (let i = 0; i < array.length; i++) {
    elem[i] = array[i].trim()
    if (elem[i].includes('?')) lookingFor = i
  }
  if (lookingFor == 0) {
    return [lookParent([elem[2], elem[1]]), elem[1], elem[2]]
  } else if (lookingFor == 1) {
    return [elem[0], lookParent([elem[2], elem[0]]), elem[2]]
  } else {
    return [elem[0], elem[1], lookSon([elem[0], elem[1]])]
  }
}

function lookParent(constArr) {
  const sonABO = constArr[0].substring(0, constArr[0].length - 1)
  const parentABO = constArr[1].substring(0, constArr[1].length - 1)
  let possibleArr = []
  if (sonABO == 'A') {
    if (parentABO == 'A' || parentABO == 'AB') {
      possibleArr = formBy.A.concat(formBy.O)
    } else if (parentABO == 'O' || parentABO == 'B') {
      possibleArr = formBy.A
    }
  }
  if (sonABO == 'B') {
    if (parentABO == 'B' || parentABO == 'AB') {
      possibleArr = formBy.B.concat(formBy.O)
    } else if (parentABO == 'O' || parentABO == 'A') {
      possibleArr = formBy.B
    }
  }
  if (sonABO == 'AB') {
    if (parentABO == 'AB') {
      possibleArr = formBy.AB
    } else if (parentABO == 'A') {
      possibleArr = formBy.B
    } else if (parentABO == 'B') {
      possibleArr = formBy.A
    }
  }
  if (sonABO == 'O') {
    if (parentABO == 'A' || parentABO == 'B' || parentABO == 'O') {
      possibleArr = formBy.O
    }
  }
  if (possibleArr.length == 0) return 'IMPOSSIBLE'
  let biArr = Array(8).fill(false)
  for (elem of possibleArr) {
    if (elem == 'A') biArr[0] = true
    if (elem == 'AB') biArr[1] = true
    if (elem == 'B') biArr[2] = true
    if (elem == 'O') biArr[3] = true
  }
  for (var i = 0; i < 4; i++) {
    if (biArr[i]) biArr[i + 4] = true
  }
  let output = []
  for (let j = 0; j < 9; j++) {
    if (biArr[j]) output.push(refArray[j])
  }
  return output
}
function lookSon(parentArr) {
  let comb = []
  let bothRH = false
  for (let i = 0; i < 2; i++) {
    const parents = parentArr[i].split('')
    if (parents.length === 3) {
      comb[i] = parentsCreators.AB
      if (parents[2] === '+') bothRH = true
    } else {
      comb[i] = parentsCreators[parents[0]]
      if (parents[1] === '+') bothRH = true
    }
  }
  var result = allPossibleCases(comb)
  let refArr = Array(8).fill(false)
  for (par of result) {
    if (par === 'AA') refArr[0] = true
    if (par === 'AB') refArr[1] = true
    if (par === 'AO') refArr[0] = true
    if (par === 'BB') refArr[2] = true
    if (par === 'BO') refArr[2] = true
    if (par === 'OO') refArr[3] = true
  }
  if (bothRH) {
    for (let i = 0; i < 4; i++) {
      if (refArr[i]) refArr[i + 4] = true
    }
  }
  const possible = []
  for (let j = 0; j < refArray.length; j++) {
    if (refArr[j]) possible.push(refArray[j])
  }
  return possible
}
function allPossibleCases(arr) {
  if (arr.length === 0) {
    return []
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    var result = []
    var allCasesOfRest = allPossibleCases(arr.slice(1))
    for (var c in allCasesOfRest) {
      for (var i = 0; i < arr[0].length; i++) {
        const str = (arr[0][i] + allCasesOfRest[c]).split('').sort().join('')
        result.push(str)
      }
    }
    return result
  }
}
module.exports = getBloodType
