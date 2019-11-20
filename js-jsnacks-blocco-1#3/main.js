// jSnack 3: Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

var lista = [];
var somma = 0;
// ciclo per chiedere 5 numeri all'utente
for (var i = 0; i < 5; i++) {
    var num = parseInt(prompt('Inserisci un numero per favore'));
    lista.push(num);
}

// ciclo for
for (var i = 0; i < lista.length; i++) {
    somma = somma + lista[i];
}
console.log(somma);


// ciclo while
index = 0
while (index < lista.length) {
    somma = somma + lista[index];
    index++
};
console.log(somma);
