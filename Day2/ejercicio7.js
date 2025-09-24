/*
Ejercicio 7 – Palabra al revés (con loop)

Dada una palabr, invertirla.
*/

let palabra = "hola";
let palabraReves = "";

for(let i = (palabra.length)-1; i>= 0; i--){

    palabraReves += palabra.charAt(i);
}

console.log(palabraReves);
