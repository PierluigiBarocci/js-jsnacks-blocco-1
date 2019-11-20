//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
var list = [];

for (i = 0; i < 6; i++) {
    var num = parseInt(prompt('Inserisci un numero per favore'));
    if (num % 2 == 1) {
        list.push(num);
    };
};

console.log('I numeri dispari che hai inserito sono: ' + list);
