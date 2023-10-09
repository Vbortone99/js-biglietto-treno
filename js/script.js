// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// PREZZO FISSO PER KM
const prezzo =(0.21);
console.log(prezzo);

// RACCOGLI INFO KM
let distanza = prompt('quanti chilometri');
console.log(distanza);

// RACCOGLI INFO ANNI
let età = prompt('quanti anni');
console.log(età);

// VARIABILI FASCE DI ETA

let anziano = 65;
let minorenne = 18;

// CALCOLO PREZZO PER KM
let biglietto = (distanza * prezzo);
// VARIABILE PREZZI CON APPLICAZIONE SCONTO

// CONDIZIONI SCONTI
if (età >=  65) {
    biglietto = biglietto - (biglietto * 40 / 100);
    console.log(biglietto);
    console.log('applicato sconto anziano');
}  else if (età <= 18);
    biglietto = biglietto - (biglietto * 20 / 100);
   console.log(biglietto);
   console.log('applicato sconto minorenne');
    


