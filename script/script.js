/*Descrizione:
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
*/

const lista = ["corote", "pollo", "tonno", "yagurt greco", "peperoni", "caramelle di vito" ];


let ingrediente = 0


while(ingrediente < lista.length){
    
    document.getElementById('myList').innerHTML += `<li> ${lista[ingrediente]}</li>`;

    ingrediente++;
   
    console.log(ingrediente)
}

