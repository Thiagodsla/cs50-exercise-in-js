const text = "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh."

function getGradeOfText(text){

  let n = text.toLowerCase()
  console.log(n)
  var char = 0
  var sentences = 0
  var words = 1

  //frase.split(' ').join('').length
  
  for( i = 0, n ; i < n.length ; i++ ){
    
    // countou o numero de caracteres
    if( n[i] >= 'a' && n[i] <= 'z'){
      char++
    }
    // conta o numero de frases
    if (n[i] == '.' || n[i] == '!' || n[i] == '?' ){
      sentences++
    }  
    // conta as palavras pelo espaçamento +1
    if ( n[i] == ' '){
      words++
    }
    
  }
  console.log('Letras: ', char);
  console.log('Palavras: ', words)
  console.log('Frases: ', sentences)

  // índice = 0,0588 * L - 0,296 * S - 15,8

  let L = ((char / words) * 100) * 0.0588

  let S = ((sentences / words) * 100) * 0.296

  let grade = parseFloat(L -  S - 15,8)

  outputShow = parseInt(grade)
  if(outputShow >= 16){
    console.log("grade: 16+")
  }else{
    console.log("grade: ", outputShow)
  }

}

getGradeOfText(text)





// l = meu array de letras
// s = numero de sentenças( frases separadas por pontuaçao)


// índice = 0,0588 * L - 0,296 * S - 15,8

// Seu programa deve contar o número de letras
// palavras e
// frases do texto

// qualquer sequência de caracteres separados por espaços deve contar como uma palavra

// qualquer ocorrência de um ponto final, ponto de exclamação ou ponto de interrogação indica o final de uma frase.

// imprimir como saída "Grade X"
// onde X é o nível de grau calculado pela fórmula de Coleman-Liau, 
// arredondado para o número inteiro mais próximo.


// passo a passo

// 1 contar o numeros de carateres no texto 

// 2 descobrir o numero de palavras que tem no texto 
// palavra sera a sequencia de caracteres separadas por espaço 
// posso utilizar a quantidade de espaços no texto para definir o numero de palavras e adicionar +1

// 3 descobrir as sentenças 

// tendo os 3 valores calcular pela formula de coleman liau

// 4 arredondar o valor para o valor mais proximo

// "grande x" 

// índice resultante for 16 ou superior
// produzir "Grade 16+"


// se menor que 1 
// imprimir "Before Grade 1"
