function hotPotato(participants) {
  let queue = []
  for (let i = 0; i < participants; i++) {
    queue.push(String.fromCharCode(i + 65))
  }
  while (queue.length > 1) {
    let turns = Math.trunc(10 * Math.random() + 1)
    for (let k = 0; k < turns; k++) {
      let element = queue.shift()
      queue.push(element)
    }
    queue.shift()
  }
  return queue[0]
}
module.exports = hotPotato
