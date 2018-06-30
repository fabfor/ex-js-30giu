// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga

var str1 = prompt("str1");
var str2 = prompt("str2");

if (str1.length > str2.length){
  console.log(str1);
  console.log(str2);
}
else if (str1.length < str2.length) {
  console.log(str2);
  console.log(str1);
}
else{
  console.log("UGUALI");
}
