function convertBase(value, from_base, to_base) {
  var range =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('')
  var from_range = range.slice(0, from_base)
  console.log('from-range', from_range)
  var to_range = range.slice(0, to_base)
  console.log('to range', to_range)

  var dec_value = value
    .split('')
    .reverse()
    .reduce(function (carry, digit, index) {
      console.log(carry, digit, index)
      if (from_range.indexOf(digit) === -1)
        throw new Error(
          'Invalid digit `' + digit + '` for base ' + from_base + '.'
        )
      return (carry += from_range.indexOf(digit) * Math.pow(from_base, index))
    }, 0)
  console.log('dec_value --->', dec_value)
  console.log('A'.charCodeAt(0))

  var new_value = ''
  while (dec_value > 0) {
    console.log('dec_value % to_base', dec_value % to_base)
    // console.log('to_range[dec_value % to_base]', to_range[dec_value % to_base])
    new_value = to_range[dec_value % to_base] + new_value
    // console.log('new_value ----->', new_value)
    // console.log('dec_value', dec_value)
    // console.log('dec_value% to_base', dec_value % to_base)
    dec_value = (dec_value - (dec_value % to_base)) / to_base
  }
  return new_value || '0'
}
console.log(convertBase('123456', 10, 16))
