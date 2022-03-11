let max_votes = 9;
let max_candidates = 3;
let cells = []

let original_candidates = [
  {name: 'Alice', vt0: 0, vt1: 0, vt2: 0,},
  {name: 'Bob', vt0: 0, vt1: 0, vt2: 0,},
  {name: 'Charlie', vt0: 0, vt1: 0, vt2: 0,},
]

cells.push(
  {vt0: 'Bob', vt1: 'Alice', vt2: 'Charlie'},
  {vt0: 'Alice', vt1: 'Bob', vt2: 'Charlie'},
  {vt0: 'Alice', vt1: 'Bob', vt2: 'Charlie'},
  {vt0: 'Bob', vt1: 'Alice', vt2: 'Charlie'},
  {vt0: 'Bob', vt1: 'Alice', vt2: 'Charlie'},
  {vt0: 'Charlie', vt1: 'Charlie', vt2: 'Bob'},
  {vt0: 'Charlie', vt1: 'Alice', vt2: 'Bob'},
  {vt0: 'Charlie', vt1: 'Bob', vt2: 'Alice'},
  {vt0: 'Charlie', vt1: 'Bob', vt2: 'Alice'},
);


function processElection(){
  let cadidates_with_votes = []
  let cadidates_ordered = []
  let result = {}

  cadidates_with_votes = countRound('vt0', cells, original_candidates)
  cadidates_ordered = orderCandidates(cadidates_with_votes, 'vt0')

  result = checkWinner(cadidates_ordered, 'vt0')

  if (result.most_voted){
    console.log('VENCEDOR: ', result.winner);
  } else {
    let last_position = cadidates_ordered.pop() 
    let top_two_candidates = cadidates_ordered
    
    let cells_lost = getCellsLost(cells, 'vt0', last_position.name)

    cadidates_with_votes = countRound('vt1', cells_lost, top_two_candidates)
    cadidates_ordered = orderCandidates(cadidates_with_votes, 'vt1')

    result = checkWinner(cadidates_ordered, 'vt1')
    
    if (result.most_voted){
      console.log('VENCEDOR: ', result.winner);

    }else {

      cadidates_with_votes = countRound('vt2', cells_lost, top_two_candidates)
      cadidates_ordered = orderCandidates(cadidates_with_votes, 'vt2')

      result = checkWinner(cadidates_ordered, 'vt2')

      console.log('VENCEDOR: ', result.winner);
    }
  }
}





function countRound(round = 'vt0', cells, candidates) {
  let candidates_copy = [...candidates]

  for (let idx = 0; idx < cells.length; idx++) {
    const one_cell = cells[idx];

    // one_cell -> {vt0: 'Alice', vt1: 'Bob', vt2: 'Charlie'},
    let cell_name = one_cell[round]

    let one_candidate_idx = candidates_copy.findIndex( (cand) => cand.name == cell_name)

    candidates_copy[one_candidate_idx][round]++
    // let one_candidate = candidates_copy[one_candidate_idx]
    // one_candidate[round]++
    // candidates_copy.splice(one_candidate_idx, 1, one_candidate)
  }
  return candidates_copy
}

function orderCandidates(candidates, round){
  return candidates.sort((atual, prox) => atual[round] < prox[round] ? 1 : -1)
}

function checkWinner(candidates, round){
  let most_voted = candidates[0][round] > (max_votes/2)

  if (most_voted){
    return {
      most_voted,
      winner: candidates[0].name
    }
  } else {
    return {
      most_voted,
    }
  } 
}

function getCellsLost(cells, round_lost, lost_name){
  return cells.filter(cell=> cell[round_lost] == lost_name)
}


processElection()
