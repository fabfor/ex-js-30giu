// Chiedi all’utente quanti array formati da 10
// numeri casuali vuole creare.

//Array totale
var arrays = [];

var quanti = parseInt(prompt("Quanti array?"));

// Richiama quanti-volte il codice per creare un array
console.log(quanti);
for (var i = 0; i < quanti; i++) {

  //Generiamo un array temporaneo, ogni volta che ne vogliamo uno nuovo
  var ilnuovoarray = [];

  // Riempio ilnuovoarray di 10 elementi
  for (var k = 0; k < 10; k++) {
    do{
      var random = randomIntFromInterval(1,100);
    }
    while (ilnuovoarray.includes(random));

    ilnuovoarray.push(random);
  }

  arrays.push(ilnuovoarray);

}

console.log(arrays);




function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
