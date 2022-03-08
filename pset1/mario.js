
function createBlocks(n) {
  var block = '#'
  var line = ''
  var space = ' '

  // preciso printar 1 linha com uma sequencia de # e espaços

  for (i = 0; i < n; i++) {

    for (j = n - 1; j > i; j--) {
      line += space
    }

    for (k = 0; k <= i; k++) {
      line += block
    }
    line += space

    for (k = 0; k <= i; k++) {
      line += block
    }

    console.log(line)
    line = ''

  }
}

createBlocks(8)

