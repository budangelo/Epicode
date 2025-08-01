/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(firstNum, secondNum) {
if (firstNum === secondNum) { 
    return (firstNum + secondNum) * 3;
    } else { 
        return firstNum + secondNum
    }
}
    console.log(crazySum(10,10))
    console.log(crazySum(35,20))
    console.log(crazySum(60,60))
    console.log(crazySum(2,3))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num) {
 if ((num >= 20 && num <= 100)|| num === 400) {
    return true;
} else {
    return false;
    }
}
console.log("test num: 18 " ,boundary(18))
console.log("test num: 30 " ,boundary(30))
console.log("test num: 110 " ,boundary(110))
console.log("test num: 400 " ,boundary(400))



/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
let normalText= "ferrari"

function reverseString(string) {
    return string
    .split('')
    .reverse()
    .join('')
}
console.log(reverseString(normalText))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

    const text = ["epicode","lewis","charles"]

    function upperFirst() {
        const result= text.map(word => {
            return word[0].toUpperCase() + word.slice(1)
        })
        console.log(result)
    }
    upperFirst ()



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    const result = []
    for (let i=0; i< n; i++) {
        const randomNum = Math.floor (Math.random() * 10) +1
        result.push(randomNum)
        }
        return result
 }
    console.log(giveMeRandom(4))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
