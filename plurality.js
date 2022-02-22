let votes = [];
let candidates = ["Alice", "Bob", "Charlie"];
let votes_number = 0

//alert("Candidatos: "+ candidates.toLocaleString())

function vote(){
    
    votes_number = prompt("Digite o numero de votos: ");
    
    for(i = 0 ; i < votes_number ; i++){
        let personal_vote = prompt("Digite seu voto: ");
        console.log("Voto: ", personal_vote)
        if(candidates.includes(personal_vote)){
            votes.push(personal_vote)
        }else{
            votes.push("Voto Invalido")
        }
    }
}

function printWinner(){  
    console.log("Numero de eleitores: " + votes_number);
    
    const counts = {};
    
    votes.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1, (votes[x]);
    });

    let max = Math.max(counts.Alice, counts.Bob, counts.Charlie)
    
    // fala o vencedor
    for (var i = 0 in counts) {
        if (counts[i] >= max){
            console.log("Vencedor: " + i + ", com um total de " + counts[i] + " votos.");
        }
    }
    //console.log(result);
}

vote()
printWinner()
