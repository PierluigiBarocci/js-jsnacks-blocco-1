//Calcola la somma e la media dei primi 10 numeri.
var sum = 0
for (var i = 1; i <= 10; i++) {
    sum = sum + i;
}
var average = (sum / 10);
console.log('La somma tra i primi dieci numeri (escluso lo zero) è ' + sum);
console.log('La loro media è ' + average);
