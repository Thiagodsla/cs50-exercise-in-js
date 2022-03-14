//======================================================================================//

let question_one = "Qual a melhor comida do mundo ?"
let answer_options = ["Uva", "Maça", "Bacon", "Alface"]
let correctly_answer = "Bacon"

function multipleChoice(){
    document.getElementById('question-one').innerHTML = question_one
    
    const span = document.getElementById('button-list')

    for(i = 0 ; i < answer_options.length ; i++){
        let btn = createBtn(answer_options[i])
        btn.setAttribute('id', answer_options[i])
        span.appendChild(btn)
    }
}

function createBtn(btn_name){
    const btn = document.createElement('button')
    btn.textContent = btn_name
    btn.setAttribute('class', 'btn btn-outline-primary')
    btn.setAttribute('style', 'margin-left: 10px')
    btn.addEventListener('click', checkAnswer.bind(null, btn.textContent))
    return btn
}

function checkAnswer(btn_content){
    let btn = document.getElementById(btn_content)
    if(btn_content == correctly_answer){
        btn.setAttribute('class', 'btn btn-outline-success')
        document.getElementById('check-answer-one').innerHTML = 'Resposta correta!'
    }else{
        btn.setAttribute('class', 'btn btn-outline-danger')
        setInterval(() => {
            btn.setAttribute('class', 'btn btn-outline-primary')
        }, 1000);
        document.getElementById('check-answer-one').innerHTML = 'Resposta incorreta!'
    }
}

//======================================================================================//


let question_two = "Qual a melhor comida do mundo ?"
let answer_two = 'Bacon'

function freeResponse(){

    document.getElementById('question-two').innerHTML = question_two

    let answer = document.getElementById("input1").value
    
    console.log(answer)
    if(answer === answer_two){
        document.getElementById("check-answer-two").innerHTML = 'Resposta correta!'
        document.getElementById("input1").style.border = "3px solid #0000ff";
    }else if(answer == ''){
        document.getElementById("check-answer-two").innerHTML = 'Por favor digite sua resposta.'
    }else if(answer != answer_two){
        document.getElementById("check-answer-two").innerHTML = 'Resposta incorreta!'
        document.getElementById("input1").style.border = "3px solid #ff0000";
    }
}

function freeResponseClearInput(){
    document.getElementById("input1").value = ""
    document.getElementById("input1").style.border = "0px";
}

//======================================================================================//

document.addEventListener('DOMContentLoaded', listen);

function listen(){
    multipleChoice()
    freeResponse()
    freeResponseClearInput()
}