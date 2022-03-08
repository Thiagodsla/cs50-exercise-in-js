
let max_voter = 9;
let max_candidates = 3;
let cells = []

cells.push(
    {vt0: 'Alice', vt1: 'Bob', vt2: 'Charlie'},
    {vt0: 'Alice', vt1: 'Bob', vt2: 'Charlie'},
    {vt0: 'Bob', vt1: 'Alice', vt2: 'Charlie'},
    {vt0: 'Bob', vt1: 'Alice', vt2: 'Charlie'},
    {vt0: 'Bob', vt1: 'Alice', vt2: 'Charlie'},
    {vt0: 'Charlie', vt1: 'Charlie', vt2: 'Bob'},
    {vt0: 'Charlie', vt1: 'Alice', vt2: 'Bob'},
    {vt0: 'Charlie', vt1: 'Bob', vt2: 'Alice'},
    {vt0: 'Charlie', vt1: 'Bob', vt2: 'Alice'},
);

console.table(cells)

function countVotes(cells){
    const candidate_list = [
        {name: "Bob", vt: 0},
        {name: "Alice", vt: 0},
        {name: "Charlie", vt: 0},
    ];    
    
    // loop para adicionar os votos nos meus candidatos.
    for ( i = 0 ; i < cells.length ; i++){
        for ( j = 0 ; j < candidate_list.length ; j++){
            if(candidate_list[j].name == cells[i].vt0){
                candidate_list[j].vt++
            }
        }
    }
    //console.log("===================TABELA CEDULAS ACIMA======================")
    
    check_draw(candidate_list, cells)
}

function check_draw(candidate_list, cells){ // 2 a rodar
    
    
    for(i = 0, draw = 0, next_step = 0 ; i < candidate_list.length -1 ; i++){
        if (candidate_list[i].vt == candidate_list[i + 1].vt){
            draw++
        }else{
            next_step++
        }
    
        if (draw == candidate_list.length - 1){
            cancel_first_run(cells) // a funçao é chamada 2 vezes
        }else if (next_step == candidate_list.length - 1){
            console.log("EMPATOU 1 RODADA")
            console.log("======== FIM VERIFICAR EMPATE ===========")
            compare_my_votes(candidate_list, cells)
        }
    }
}

function cancel_first_run(cells){ // preciso colocar uma verificaçao para empate da 2 rodada
    // pesquisar funçao recursiva
    console.log("EMPATE 1 RODADA")

    cells_removed_first_run = []
    
    for ( i = 0 ; i < cells.length ; i++){
        // if(cells_removed_first_run[i].vt1){
        //     console.log("teste")
        // }else{
        // }
        cells_removed_first_run.push({vt0: cells[i].vt1, vt1: cells[i].vt2})
        console.log(cells_removed_first_run[i])
        
    }


    countVotes(cells_removed_first_run)
}

function compare_my_votes(candidate_list, cells){
    
    //console.table(candidate_list)
    let candidate_is_winner = false
    var n = 0;
    for (i = 0 ; i < candidate_list.length ; i++) {
        let candidate_list_vt = candidate_list[i].vt // pega o qt de vt de cada candidate_list
        let count_more_voted = 0;
        
        if(candidate_list_vt > count_more_voted){ // conta os votos do mais votado
            count_more_voted = candidate_list_vt
        }
        
        if(count_more_voted > max_voter / 2){
            console.log("O vencedor é:", candidate_list[i].name)
            candidate_is_winner = true
            break
        }
    }   
    
    if ( candidate_is_winner == false){
        
        console.log("O MAIS VOTADO DO 1 TURNO TEVE MENOS DE 50% DOS VOTOS")
        
        
        let candidate_to_second_run = candidate_list.sort(compare_votes)
        function compare_votes(a, b) {
            return b.vt - a.vt;
        }
        let candidate_min_voted = candidate_to_second_run.pop()

        //console.table(candidate_to_second_run)
        //console.table(candidate_min_voted)
        
        second_run(candidate_min_voted, candidate_to_second_run, cells)
        
    }

}

function second_run(candidate_min_voted, candidate_to_second_run, cells){
    for ( i = 0 ; i < cells.length ; i++){
        if(cells[i].vt0 == candidate_min_voted.name){
            
            for ( j = 0 ; j < candidate_to_second_run.length ; j++){
                if(cells[i].vt1 == candidate_to_second_run[j].name){
                    candidate_to_second_run[j].vt++
                }
                //console.log(candidate_to_second_run[j].name)
            }   
        }
    }
    

    compare_my_votes(candidate_to_second_run)
}


countVotes(cells)


/*
Que casos extremos precisamos considerar aqui?

Uma possibilidade é que haja um empate para quem deve ser eliminado. 
Podemos lidar com esse cenário dizendo que todos os candidatos que estão empatados no 
último lugar serão eliminados. Se todos os candidatos restantes tiverem exatamente 
o mesmo número de votos, porém, eliminar os candidatos empatados em último lugar significa eliminar
todos! Então, nesse caso, teremos que ter cuidado para não eliminar todos, e apenas declarar a eleição
um empate entre todos os candidatos restantes.

Algumas eleições de runoff instantâneo não exigem que os eleitores classifiquem todas
as suas preferências - portanto, pode haver cinco candidatos em uma eleição, mas um eleitor pode
escolher apenas dois. Para os fins deste problema, entretanto, vamos ignorar esse caso particular
e presumir que todos os eleitores classificarão todos os candidatos em sua ordem preferida.

Parece um pouco mais complicado do que uma votação plural, não é? Mas pode-se argumentar que tem a 
vantagem de ser um sistema eleitoral em que o vencedor da eleição representa com mais precisão as 
preferências dos eleitores.
*/

// let max_candidates = 3;
// let max_voter = 10;
// let candidates = [
//     {name: "Alice", first_vote: 4, second_vote: 0, third_vote: 0},
//     {name: "Bob", first_vote: 2, second_vote: 2, third_vote: 0 },
//     {name: "Charlie", first_vote: 4, second_vote: 0, third_vote: 0 }
// ];

// function countVotes(){
//     // for(i = 0 ; i <= max_voter ; i++){
//     //     let vt1 = prompt("Digite seu voto: ")
//     //     let vt2 = prompt("Digite seu voto: ")
//     //     let vt3 = prompt("Digite seu voto: ")
//     // }
//     let vt1 = "Alice";
//     let vt2 = "Bob";
//     let vt3 = "Charlie";
    
//     for(j = 0 ; j < candidates.length ; j++){
//         if(candidates[j].name == vt1){
//             candidates[j].first_vote++;
//         }
//         if(candidates[j].name == vt2){
//             candidates[j].second_vote++;
//         }
//         if(candidates[j].name == vt3){
//             candidates[j].third_vote++;
//         }
//         console.log(candidates[j]);
//     }
// };


// function printWinner(){
//     console.log('---------------------------------')
//     //passar pelo meu array verificar se o mais votado no primeiro turno tem 50% dos votos
//     //se tiver ele é o vencedor no primeiro turno
//     //preciso ver quem teve mais votos no primeiro turno

//     let count = 0
    
//     for ( let candidate of candidates ){ 

//         let first_vote_counter = candidate.first_vote
        
//         console.log(first_vote_counter)

        
//         if ( count <= first_vote_counter ) {
            
//             //vencedor = {name : candidate.name, first_vote : candidate.first_vote}
            
//             //console.log(vencedor)

            
//             //vote_count = candidate.first_vote

//             // if ( vote_count >= max_voter / 2 ) {
//             //     console.log("vencedor com 50% de votos ou maior", maior.name, "com", maior.first_vote, "votos")
//             // }else if(vote_count >= max_voter){

//             // }
//         }

//     }

// };

// countVotes();
// printWinner();












// let votes = [];
// let candidates = ["Alice", "Bob", "Charlie"];
// let votes_number = 3

// alert("Candidatos: "+ candidates.toLocaleString())
// function vote(){
//     let personal_vote = []
//     var opcoes = ["","Bob", "Charlie", "Alice"]
        
//     for(i = 0 ; i < votes_number ; i++){
//         personal_vote = {
//             vt0 : prompt("Voto 1: "), 
//             vt1: prompt("Voto 2: "), 
//             vt2: prompt("Voto 3: ")
//             vt0 : opcoes[Math.ceil(Math.random() * (opcoes.length - 1))],
//             vt1: opcoes[Math.ceil(Math.random() * (opcoes.length - 1))], 
//             vt2: opcoes[Math.ceil(Math.random() * (opcoes.length - 1))]
//         }
//         let personal_vote = "Alice"
//         votes.push(personal_vote)
//     }
// }

// function countVotes(){
//     pega a primeira sequencia de votos vt0 e insere no vote_check
//     let vote_check = []

//     for ( i = 0 ; i < votes.length ; i++){
//         console.log(votes[i].vt0)
//         vote_check.push(votes[i].vt0)
//     }


//     const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

//     let count = []
    
//     for(j = 0 ; j < candidates.length ; j++){
//         console.log(candidates[j])
//         console.log(candidates[j] , countOccurrences(vote_check, candidates[j]));
//         count.push(countOccurrences(vote_check, candidates[j]))
//     }

//     console.log(count)
//     var max = count.reduce(function(a, b) {
//         return Math.max(a, b);
//     }, -Infinity);

//     console.log(max)

//     console.log("vote check ====", vote_check)
// }


// function printWinner(){
//     console.log("Numero de eleitores: " + votes_number);
    
//     let max = Math.max(counts.Alice, counts.Bob, counts.Charlie)
    
//     fala o vencedor
//     for (var i = 0 in counts) {
//         if (counts[i] >= max){
//             console.log("Vencedor: " + i + ", com um total de " + counts[i] + " votos.");
//         }
//     }
//     console.log(result);
// }

// vote()
// countVotes()
// printWinner()

