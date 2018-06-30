// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore

var num1 = parseInt(prompt("numero1"));
var num2 = parseInt(prompt("numero2"));

if (num1 > num2){
  console.log(num1);
}
else if (num1 < num2) {
  console.log(num2);
}
else{
  console.log("UGUALI");
}
