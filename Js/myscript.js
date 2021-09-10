/* Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) compresa tra i due numeri specificati.
Usiamo i nuovi metodi degli array forEach() o filter(). */


const stringNumbers = ['uno','due','tre','quattro','cinque'];

// creo una funzione con tre elementi
function newArray(array, a , b){

    // creo una variabile per salvare l'array filtrato (prendendo come parametro l'indice)
    let  newStringNumbers = array.filter((Element,index) => {

        // l'indice è maggiore di a e minore di b
        if(index > a && index < b){
            return true;
        };
        return false;
    });
    return newStringNumbers;
}



let newStringArray = newArray(stringNumbers,0,4);

console.log(newStringArray);

