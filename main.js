let chilometri = 'Chilometri da percorrere: 27';
console.log(chilometri)

let età = "Età del passeggero: 65"
console.log(età)

let valoreAssolutoDistanza = chilometri.substr(-2);

let valoreAssolutoEtà = età.substr(-2);

parseInt(valoreAssolutoDistanza);

parseInt(valoreAssolutoEtà);


let costoBiglietto = valoreAssolutoDistanza * 0.21
console.log(costoBiglietto)

if (valoreAssolutoEtà < 18){
    console.log(costoBiglietto - (costoBiglietto / 100 * 20));   
} else if (valoreAssolutoEtà >=65) {
    console.log(costoBiglietto - (costoBiglietto / 100 * 20));   
}




