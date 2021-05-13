function printer(limit) {
  let array = []
  let number = 1
  try {
    ;(function recursive() {
      array.length = --limit
      console.log(number++)
      recursive()
    })()
  } catch (e) {}
}
printer(100)
