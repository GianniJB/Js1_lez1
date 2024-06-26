/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype sono: Stringa, Numero e Booleano.
Stringa. Lo utilizziamo nelle nostre variabili (che sono come dei contenitori) per far "capire" al nostro codice che in quel contenitore è contenuto
          qualcosa che non deve usare per fare operazioni aritmetiche, ma che deve solo leggere o associare... Quindi un contenuto di testo. Glielo
          facciamo capire mettendo il valore dentro degli apici, es const contenuto = "testo"
Numerico. Quando vogliamo far capire al nostro codice che quel contenitore contiene qualcosa che deve utilizzare per fare dei calcoli,
          quindi dei numeri, mettiamo il contenuto direttamente nel nostro conenitore senza usare apici: const contenitore = 1 
Booleani. Quando vogliamo fare capire al nostro codice che in quel contenitore può trovare solo qualcosa che sia vero o qualcosa che sia falso. Inseriamo
          un valore diretto senza apici, che può essere solo true o false.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Gianni";

console.log("Il mio nome è:", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const num1 = 12;
const num2 = 20;

console.log("prima variabile numero:", num1);
console.log("seconda variabile numero:", num2);

let num3 = num1 + num2;

console.log("somma di 2 variabili numero in una terza:", num3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;

console.log("La variabile x è:", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Bascetta";

console.log("Funziona perchè ho scritto la variabile con let:", myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione = 4 - x;
console.log("4 - x è uguale a:", sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John";
const different = name1 !== name2;

console.log("Sono diversi?:", different);

// Extra
const areSame = name1.toLowerCase === name2.toLowerCase;
console.log("Sono uguali?", areSame);
