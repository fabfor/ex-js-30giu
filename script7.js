// Genera 2 array formati da 10 numeri casuali di numeri da 1 a 100. Al termine della generazione,
// stampa il valore di somma degli elementi contenuti in ogni array.

var arr1 = [];
var arr2 = [];

for (var i = 0; i < 10; i++) {
  //array 1
  do{
    var random = randomIntFromInterval(1,100);
  }
  while (arr1.includes(random));

  arr1.push(random);
  //array 2
  do{
    var random = randomIntFromInterval(1,100);
  }
  while (arr2.includes(random));

  arr2.push(random);
}

console.log(sommaElemArray(arr1));
console.log(sommaElemArray(arr2));


function sommaElemArray(arr){
  var somma = 0;
  for (var i = 0; i < arr.length; i++) {
    somma = somma + arr[i];
  }
  return somma;
}

// Ritorna un numero a caso tra min e max
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
