//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var num1 = parseInt(prompt('Inserisci un numero'));
var num2 = parseInt(prompt('Inserisci un altro numero'));

if (num1 > num2) {
    console.log('Il maggiore è ' + num1);
} else if (num1 < num2) {
    console.log('Il maggiore è ' + num2);
} else {
    console.log('I due numeri si equivalgono');
}
