/*
Algoritmo 1: Palíndromo

Enunciado:
Dada una palabra o frase, determiná si es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda, 
ignorando espacios y mayúsculas).

*/

let frase = "Anita lava la tina";

let fraseReves = "";
frase = frase.toLowerCase().replaceAll(" ","");

console.log(frase);

for(let i = (frase.length)-1; i >= 0 ; i--){

    fraseReves += frase.charAt(i);
}


if(fraseReves == frase){
    console.log("La frase es identica");
}else{

    console.log("La frase no es identica");
}

