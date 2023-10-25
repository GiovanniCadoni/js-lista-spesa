//Dichiarazione e inizializzazione delle variabili
const listaSpesaElem = ["latte", "acqua", "biscotti", "frutta", "detersivo", "pasta", "gelati", "coca cola"];
console.log(listaSpesaElem);

const listaSpesa = document.getElementById("lista-spesa");
console.log(listaSpesa)

listaSpesaString = "";

let i=0;

//Scorriamo il nostro array e inseriamo ogni contenuto all'interno di una nostra array
while(i < listaSpesaElem.length)
{
    const objectSpesa = listaSpesaElem[i];
    console.log(objectSpesa);
    listaSpesaString += `<li> ${objectSpesa.toUpperCase()} </li>`;
    i++;
}

//Stampiamo il nostro array all'interno del file html
console.log(listaSpesaString);
listaSpesa.innerHTML = listaSpesaString;