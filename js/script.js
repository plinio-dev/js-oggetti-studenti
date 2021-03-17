// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// 1 Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente1 = {
  'nome' : 'Luca',
  'cognome': 'Rossi',
  'età' : 25
}
console.log(studente1);

// 2 Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente1) {
  console.log(studente1[key]);
}

// 3 Creare un array di oggetti di studenti.

var classe = [
  {
    'nome': 'Luca',
    'cognome': 'Rossi'
  },
  {
    'nome': 'Giorgio',
    'cognome': 'Bianchi'
  },
  {
    'nome': 'Tania',
    'cognome': 'Piccoli'
  },
  {
    'nome': 'Marta',
    'cognome': 'Recchi'
  }
]

// 4 Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var j in classe) {
  console.log(classe[j]);
}


// 5 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoUtente = { }

var nome = prompt("Come ti chiami?");
var cognome = prompt("Qual'è il tuo cognome?");
var eta = prompt("Quanti anni hai?");

nuovoUtente["nome"] = nome;
nuovoUtente["cognome"] = cognome;
nuovoUtente["eta"] = eta;

console.log(nuovoUtente);


// 6 inserire il nuovo utente nella classe studenti
classe.push(nuovoUtente);

console.log(classe);
