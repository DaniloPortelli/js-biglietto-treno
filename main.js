// Chilometri
let chilometri = prompt("Inserisci la distanza da percorrere");
console.log(`Chilometri da percorrere: ${chilometri}`);


// Età
let eta = prompt("Inserisci la tua età");
console.log(`Età del passeggero: ${eta}`)

let prezzo = chilometri * 0.21;
let sconto = 0;
// Biglietto

if (eta >= 65){
    sconto = prezzo * 0.4;
} else if (eta < 18){
    sconto = prezzo * 0.2;
}
   
prezzo = prezzo - sconto;
console.log(`Il prezzo del biglietto è di € ${prezzo.toFixed(2)}`)



