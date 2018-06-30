// Un array contiene una serie di numeri,
// il programma stampa solo quelli pari

var numeri = [5,8,29,12,90];

for (var i = 0; i < numeri.length; i++) {
  // se è pari
  if (isPari(numeri[i])){
    console.log(numeri[i]);
  }
}

function isPari(numero){
  if ((numero % 2) == 0)
    return true;
  else {
    return false;
  }
}
