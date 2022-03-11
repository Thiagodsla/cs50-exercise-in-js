let max_voter = 9;
let max_candidates = 3;
let cells_ = [
    {vt0: 'Alice', vt1: 'Bob', vt2: 'Charlie'},
    {vt0: 'Alice', vt1: 'Bob', vt2: 'Charlie'},
    {vt0: 'Bob', vt1: 'Alice', vt2: 'Charlie'},
    {vt0: 'Bob', vt1: 'Alice', vt2: 'Charlie'},
    {vt0: 'Bob', vt1: 'Alice', vt2: 'Charlie'},
    {vt0: 'Charlie', vt1: 'Charlie', vt2: 'Bob'},
    {vt0: 'Charlie', vt1: 'Alice', vt2: 'Bob'},
    {vt0: 'Charlie', vt1: 'Bob', vt2: 'Alice'},
    {vt0: 'Charlie', vt1: 'Bob', vt2: 'Alice'},
]

const candidate_list = [
    {name: "Bob", count: 0},
    {name: "Alice", count: 0},
    {name: "Charlie", count: 0},
];  

console.table(cells_)

function processElection(cells, candidate_list, count = 'count'){
    let candidates = [...candidate_list]
    let counted_votes = []
    winner_name = ''

    counted_votes = countVotes(cells, candidates, 'count', 'vt0')
    //console.table(counted_votes)
    if (counted_votes[0][count] > max_voter/2){
        winner_name = counted_votes[0].name
        printWinner(winner_name)
    }else if(counted_votes[0][count] == max_voter / candidates.length){
        //console.log("EMPATE 1 RODADA ^^^^^^^^^^^^")
        counted_votes.forEach(element => {
            element.count = 0
        });
        counted_votes = countVotes(cells, candidates, 'count', 'vt1')
        // console.table(counted_votes)
        // console.log("VOTOS VT1 DAS CEDULAS CONTADAS")
        winner_name = rankCandidate(counted_votes, cells, candidates, 'vt1', 'vt2')
        printWinner(winner_name)
    }else{
        winner_name = rankCandidate(counted_votes, cells, candidates, 'vt0', 'vt1')
        printWinner(winner_name)
    }
}

function countVotes(cells, candidates, count, round){
    for ( i = 0 ; i < cells.length ; i++){
        for ( j = 0 ; j < candidates.length ; j++){
            if(candidates[j].name == cells[i][round]){
                candidates[j][count]++
            }
        }
    }
    candidates.sort((a,b) => (a[count] < b[count]) ? 1 : ((b[count] < a[count]) ? -1 : 0))
    return candidates
}


function eliminatedCandidateCells(cells, candidade_eliminated, count){
    let new_cells = [] 
    for( i = 0 ; i < cells.length ; i++){
        if(cells[i][count] == candidade_eliminated.name){
            new_cells.push(cells[i])
        }
    }
    return new_cells
}

function rankCandidate (counted_votes, cells, candidates, vt_count_run, vt_second_run){
    let candidade_eliminated = counted_votes.pop()
    let cells_second_run = eliminatedCandidateCells(cells, candidade_eliminated, vt_count_run)
    let count_second_run = countVotes(cells_second_run, candidates, 'count', vt_second_run)
    //console.table(count_second_run)
    return count_second_run[0].name
}

function printWinner(winner){
    console.log(winner + ' é o vencedor.')
}

processElection(cells_, candidate_list)