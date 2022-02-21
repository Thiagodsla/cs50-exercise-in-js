// 1 get the key
// 2 get the plain text
// 3 encipher 
// 4 print cipher text

const text = "be sure to drink your ovaltine"
let cipherLetters = ''
let cipherkey = 13

let teste = encipherText(text, cipherLetters, cipherkey)

function encipherText(text, cipherLetters, cipherkey){
  let key = cipherkey
  let n = text // "hello, world"
  let outputText = []
  let punctuation = [32, 33, 34,46, 44, 39]

  for( i = 0 ; i < n.length ; i++){
    
    let chart = text.charCodeAt(i)
    //console.log(chart)
    //if(chart == 32 || chart == 33 || chart == 34 || chart == 46 || chart == 44 || chart == 39){
    if(punctuation.includes(chart)){
      outputText.push((chart))
    }else{
      let new_char = chart + key // 119 + 6 = 125

      if(new_char > 122){
        let reset_value = new_char - 123 // 4
        new_char = 97 + reset_value
        //new_char - 122 | resultado somar a new chart
      }
      outputText.push((new_char))
    }
  }

  for( j = 0 ; j < outputText.length ; j++){
    cipherLetters += String.fromCharCode(outputText[j])
  }

  return {cipherLetters, key} // batata
}



//console.log(encipherText(text, cipherLetters, cipherkey))
console.log(teste)
// text 






