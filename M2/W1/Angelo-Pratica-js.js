/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Immagina di avere una scatola enorme di nuovi set Lego di Harry Potter. Questa scatola è il tuo computer, e ogni singolo set Lego che c'è dentro èun "dataType". Dentro questa scatola, avviamo tra 6 e 7 set. Ogni set ha le sue istruzioni e sono di diversi tipo se possono chiamare; String, Number, Boolean, Null, Undefined, object o array. Ma se li metti tutti insieme, nell'ordine giusto, JavaScript capisce che tutti quei set Lego, uniti formarano il Castello di hogwarts */

const stringa = "Angelo"; /*se può usare per qualsiasi tipo di testo sempre con "" o ''*/
const numb = 26; /* dataType solo per numeri decimali o interi */
const booleanTrueFalse = true; /* dataType che ha un uso esclusivo per dare riposta True o False */
const array = [1, 2, 3] /* si usa per contenere una lista */
const Null = null; /* spazio senza dati al momento */
const object = { /* dataType capace di fare di contenitore con altri dati */
    name: "Angelo",
    age: 26,
    country: 'italia'
}
const valor = undefined ; /* spazio senza dati definiti  */ 
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Il dataType "object" ti offre la possibilita di diventare un contenitore con la possibilità di contenere diversi dati. Grazie a lui, invece di tenere 3 variabili puoi averne una sola con la stessa informazioni  */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let exampleSum = 12;
let otherExampleSum = 20;

const totalSum = exampleSum + otherExampleSum;
console.log(totalSum);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let firtsNumber = 12; 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Angelo"

/* ESERCIZIO 6 (WEB-LMS) */

const firtsName = "Angelo";
const lastName = 'Buda'
const Hobby = [ Lego, Tennis, StarWars];

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let exampleMinus = 4

const totalMinus = exampleMinus - firtsNumber;
console.log(totalMinus)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = 'John'

 /*const test = name1 === name2;
console.log(test) */

const secondTest = name1.toLowerCase() === name2.toLowerCase();
console.log(secondTest); 



/* SCRIVI QUI LA TUA RISPOSTA */
