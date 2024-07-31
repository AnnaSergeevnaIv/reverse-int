module.exports = function reverse (n) {
    let i = Math.abs(n)
    let array = []
  while (i >= 1) {
        array.unshift(i % 10)
        i = Math.floor(i / 10)
  }
  array = array.reverse()
  return +array.join('')
}
