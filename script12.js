// Un array contiene una lista di oggetti che rappresentano dei prodotti acquistati in un ecommerce.
//Il programma calcola il totale dei prezzi
var prodotto1 = {
  "nome" : "pesce",
  "prezzo": 12
}

var prodotto2 = {
  "nome" : "pasta",
  "prezzo": 3
}

var prodotto3 = {
  "nome" : "Pomodori",
  "prezzo": 4
}

var lista = [prodotto1,prodotto2, prodotto3];
var somma = 0;

for (var i = 0; i < lista.length; i++) {
  somma += lista[i].prezzo;
}

console.log(somma);
