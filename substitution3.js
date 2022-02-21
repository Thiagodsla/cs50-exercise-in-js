let key = "YTNSHKVEFXRBAUQZCLWDMIPGJO" // 10 12 15 18 18 = EHBBQ
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // [a, b, c] // [0] = A
let my_text = "MENSAGEM PARA CODIFICAR: CRIPTU" // 10 12 15 18 18 = hello
let text_array = []
let cipher_text = ''

text = my_text.toUpperCase()

// 1 pegar cada item do text
// 2 verificar se este caractere está n o abc
// 3 se nao estiver logar o caractere original

function cipherText(text){
    let secret_text = ''
    for(i = 0 ; i < text.length ; i++){
        let cipher_char = ''
        if(abc.includes(text[i])){
            let index_char_in_abc = abc.indexOf(text[i])
            cipher_char = key[index_char_in_abc]
        }else{
            cipher_char = (text[i])
        }
        secret_text += cipher_char
    }
    return secret_text
}
cipher_text = cipherText(text)

console.log(cipher_text)