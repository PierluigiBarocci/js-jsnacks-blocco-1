//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

var num = parseInt(prompt('Quante volte vuoi che elevi al cubo?'));
var cubo = 0;
for (var i = 1; i <= num; i++) {
    cubo = i * i * i;
    console.log(cubo);
};
