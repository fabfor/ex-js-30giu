// Un array contiene una serie di risultati di partite di calcio
// (ad esempio [“3-4”, “1-0”]) calcolare quante vittorie ci sono
// state per la squadra di casa, quante per la squadra in trasferta, quanti pareggi.

var risultati = ["3-4", "1-0"];
var vittorie_casa = 0;
var vittorie_trasf = 0;
var pareggi = 0;

for (var i = 0; i < risultati.length; i++) {
  var score = risultati[i].split("-");
  var casa = score[0];
  var trasferta = score[1];

  if (casa > trasferta){
    vittorie_casa++; // vittorie_casa = vittorie_casa + 1 -> vittorie_casa += 1
  }
  else if (casa < trasferta) {
    vittorie_trasf++;
  }
  else{
    pareggi++;
  }
}

console.log(vittorie_casa);
