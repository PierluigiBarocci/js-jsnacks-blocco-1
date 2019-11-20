//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

var num = parseInt(prompt('Inserisci un numero di 4 cifre per favore.'));
var list = [];
var sum = 0;
var letter = num.toString();

// condizione per le 4 cifre
if ((num < 1000) || (num > 10000)) {
    alert('C\'è un errore, riprova...')
    window.location.reload();
} else if (!num) {
    alert('Questo non è neanche un numero!');
    window.location.reload();
} else {
    for (var i = 0; i < 4; i++) {
        // il comando per prendere solo il primo carattere
        var lonely = letter.substring(0, 1);
        // il comando per "riaggiornare" la stringa mutilata del primo carattere
        letter = letter.substring(1);
        // con il fine di creare una array che abbia valori separati
        list.push(lonely);
    };
    for (var i = 0; i < list.length; i++) {
        // si ritorna a considerare tutto con numeri interi e si sommano tra di loro
        sum = sum + parseInt(list[i]);
    }
}
alert ('La somma tra ' + list[0] + ', ' + list[1] + ', ' + list[2] + ' e ' + list[3] + ' è uguale a ' + sum + '.')
