//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var list = ['qui', 'quo', 'qua']
var name = prompt("Salve, come ti chiami?");
var n = false;
for (var i = 0; i < list.length; i++) {
    if (list[i] == name) {
        console.log('Sei il benvenuto');
        var n = true;
    };
};
if(!n) {
    console.log('Non sei il benvenuto');
}
