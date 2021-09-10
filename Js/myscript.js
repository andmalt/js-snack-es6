/* Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) compresa tra i due numeri specificati.
Usiamo i nuovi metodi degli array forEach() o filter(). */


const stringNumbers = ['uno','due','tre','quattro','cinque'];

let  newStringNumbers = stringNumbers.filter((Element,index) => {
    if(index > 0 && index < 4){
        return true
    };
    return false;
});

console.log(newStringNumbers);