let key = "YTNSHKVEFXRBAUQZCLWDMIPGJO" // 10 12 15 18 18 = blals
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // [a, b, c] // [0] = A
let text = "hello hello" // 10 12 15 18 18 = hello
let code_array = []
let abc_array = []
let cipher = []
let myTextIndexArray = [] // duvida

function createCipherList (code_array){ // cria meu array com a key
  for( i = 0 ; i < 26 ; i++){
    code_array.push(key[i])
  }
  code_array.splice(0, 0, " ", ",");
}

function createAbcList (abc_array){ // cria meu array com o abc
  for( i = 0 ; i < 26 ; i++){
    abc_array.push(abc[i])
  }
  abc_array.splice(0, 0, " ", ",");
}

function getIndexOfTextInAbc(){ // transforma meu texto em array e pega o index de cada um e compara
  let txt = text.toUpperCase()
  let text_in_array = []

  for( i = 0 ; i < text.length ; i++){   // percorre o text e adiciona no array separando as letras em cada indice
    text_in_array.push(txt[i])
  }
  console.log(text_in_array) // pega cada letra do array de texto , verifica a posiçao no abc e adiciona em outro array
  //myTextIndexArray = []

  for ( k = 0 ; k < text_in_array.length ; k++ ){
    myTextIndexArray.push(abc_array.indexOf(text_in_array[k]))
  }
}

function getTextIndexAndCipher(){ // cria uma string percorre meu array
  let cipher_text = ''
  for ( i = 0 ; i < myTextIndexArray.length ; i++){
    cipher_text += code_array[myTextIndexArray[i]]
  }  
  console.log(cipher_text)
}

function loadMyProgram(){
  createAbcList(abc_array)
  createCipherList(code_array)
  getIndexOfTextInAbc()
  getTextIndexAndCipher()
}

loadMyProgram()
