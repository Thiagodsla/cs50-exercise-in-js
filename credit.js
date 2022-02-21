cardTest(4003600000000014)

function cardTest(n){
  var creditCardNumber = n.toString()
  var numberList = creditCardNumber.split([])
  var pairList = []
  var oddList = []
  var checkFirstDigit = creditCardNumber[0] // coleta o indice da minha string no caso o primeiro digito para verificar a bandeira
  
  //console.log( 3/1 )
  //multiplicar index pax por 2
  var cardLenghtTest = creditCardNumber.length // verifica o comprimento da string

  // separa minha lista de arrays

  for(var i = 0 ; i < numberList.length ; i++){
    // verifica qual posiçao está no indice e separa em variaveis
    if (i % 2){
      numberList[i]
      oddList.push(parseInt(numberList[i]))
      //console.log('impar' + numberList[i])
    }else{
      var numero = numberList[i] *= 2
      if(numero > 10){
        let mySplit = numero.toString()
        pairList.push(parseInt(mySplit[0]), parseInt(mySplit[1]))
      }else{
        pairList.push(numberList[i])
      }
      //console.log('impar segunda lista' + oddList)
    }
  }
  // faz a soma dos valores no meu array
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let pairListadded = pairList.reduce(reducer) // soma os valores do array para verificar se é 13
  let oddListadded = oddList.reduce(reducer) // soma os valores dos numeros da segunda lista
  let checked = oddListadded + pairListadded // soma os resultados para obter o numero verificador == 20

  //verifica e avisa de o numero verificador está correto
  if (checked == 20){
    console.log('DIGITO VERIFICADOR VALIDADO')
  }else{
    console.log('DIGITO VERIFICADOR INVALIDO')
  }
  
  //verifica o codigo verificador se esta na condiçao e verifica o primeiro digito para identificar a bandeira do cartao
  if (cardLenghtTest == 16 && checkFirstDigit == '3'){
    console.log('Master Card')
  }else if(cardLenghtTest == 15 && checkFirstDigit == '3'){
    console.log('American Express')
  }else if(cardLenghtTest >= 13 || cardLenghtTest <= 16 && checkFirstDigit == '4'){
    console.log('Visa')
  }else{
    console.log('NAO POSSUI NENHUMA BANDEIRA, CARTAO INVÁLIDO.')
  }

}

// primeiro pegar o ultimo digito do cartao
// segundo calcular a soma de verificaçao
// se a soma de verificaçao tem digito final 0 
// verificar o numero de digitos do cartao e ver qual padrao ele é amex, visa master



//  0 1 2 3  4 5  6 7  8 9  10  11  12  13  14  15
//  4 0 0 3  6 0  0 0  0 0  0   0    0  0   1   4




