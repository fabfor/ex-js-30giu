// Il programma chiede 10 numeri all’utente e li inserisce in un array.
// Al termine, il programma fa la somma di quelli divisibili per 3

// var numeri = [];
var somma = 0;

for (var i = 0; i < 3; i++) {
  var numero = parseInt(prompt("dammi un numero"));
  // numeri.push(numero);
  if (isDivisibilePer3(numero)){
    somma += numero; // somma = somma + numero;
  }
}

console.log(somma);

function isDivisibilePer3(num){
  if ((num % 3) == 0){
    return true;
  }
  else {
    return false
  }
}
