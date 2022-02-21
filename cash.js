function countChange(x){
  // recebe o valor pago
  // 25, 10, 5 e 1 centavos
  let quarter = 25;
  let dime = 10;
  let nickel = 5;
  let penny = 1;
  let change = x;
  let n = 0
  // calcular o numero de moedas
  let cents = Math.round(change * 100);
  console.log("centavos convertidos: ", cents);
  
  while (cents >= quarter){       
    cents = cents - quarter;
    n++;
  }
  while(cents >= dime){
    cents = cents - dime
    n++
  }
  while(cents >=nickel){
    cents = cents - nickel
    n++
  }
  while(cents >= penny){
    cents = cents - penny
    n++
  }

  console.log("Troca devida: ", change);
  console.log("resto: ", n);

}  
// chamada da funçao com o valor devido em centavos
countChange(0.41)





