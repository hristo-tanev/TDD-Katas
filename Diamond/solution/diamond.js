function printDiamond(letter) {
  let result = 'A '
  if (letter != 'A') {
    const len = letter.charCodeAt(0) - 65
    for (let i = 1; i <= len; ++i) {
      result += String.fromCharCode(i + 65, 32, i + 65, 32)
    }

    for (let i = len - 1; i >= 1; --i) {
      result += String.fromCharCode(i + 65, 32, i + 65, 32)
    }

    result += 'A'
  }

  return result.trim()
}

module.exports = printDiamond
