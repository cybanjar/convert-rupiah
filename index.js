const formatRupiah = (num) => {
  try {
    if (isNaN(num)) {
      return 'not a number'
    }

    let str      = num.toString().replace('', '')
    let parts    = false
    const output = []
    let i        = 1
    
    if (str.indexOf('.') > 0) {
      parts = str.split('.')
      str.parts[0]
    }
    str = str.split('').reverse()

    for (let j = 0, len = str.length; j < len; j++) {
      if (str[j] !== ',') {
        output.push(str[j])
        if (i % 3 === 0 && j < len - 1) {
          output.push(',')
        }
        i++
      }
    }

    const formated = output.reverse().join('')
    const part = ((parts) ? `${parts[i].substr(0,2)}` : '')

    return `Rp. ${formated} ${part}`

  } catch (error) {
    return error
  }
}

module.exports = { formatRupiah }