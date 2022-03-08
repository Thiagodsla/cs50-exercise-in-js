let key = "YTNSHKVEFXRBAUQZCLWDMIPGJO" // 10 12 15 18 18 = EHBBQ
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // [a, b, c] // [0] = A
let my_text = "MENSAGEM PARA CODIFICAR: CRIPTU" // 10 12 15 18 18 = hello
let text_array = []
let cipher_text = ''
let punctuation = ['.', ',', '?', '!', ' ', ':', '#']
let punc = '.,?!'
text = my_text.toUpperCase()

// 

// 1 pegar cada item do text
// 2 achar o indice desse valor no abc
// 3 pegar este indice e receber o caractere no indice equivalente na key

function cipherText(text){
    let secret_text = ''

    for(i = 0 ; i < text.length ; i++){
        let cipher_char = ''
        // condiçao se tiver o espaço no text[i], adicionar o ' ' na variavel
        if(punctuation.includes(text[i])){ // passando os pontos

            // let index_char_in_punctuation = punctuation.indexOf(text[i]) // text i cada caractere do texto
            // cipher_char = punctuation[index_char_in_punctuation]  
            
            cipher_char = (text[i])

        }else{
            let index_char_in_abc = abc.indexOf(text[i])
            cipher_char = key[index_char_in_abc]
        }
        secret_text += cipher_char
    }
    return secret_text
}

cipher_text = cipherText(text)

console.log(cipher_text)