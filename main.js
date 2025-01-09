// Chilometri
let chilometri = 'Chilometri da percorrere: 27';
console.log(chilometri)

let valoreAssolutoDistanza = chilometri.substr(-2);

parseInt(valoreAssolutoDistanza);


// Età
let età = "Età del passeggero: 65";
console.log(età)

let valoreAssolutoEtà = età.substr(-2);

parseInt(valoreAssolutoEtà);

// Biglietto
let calcoloBiglietto = valoreAssolutoDistanza * 0.21;


let costoBiglietto = `Il costo del biglietto è di € ${calcoloBiglietto}`
console.log(costoBiglietto)


if (valoreAssolutoEtà >= 65){
    console.log(calcoloBiglietto = calcoloBiglietto - (calcoloBiglietto / 100 * 20))
}



