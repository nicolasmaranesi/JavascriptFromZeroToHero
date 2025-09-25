/**
 * 
 Ejercicio 5 – Invertir un array

Dado:
let letras = ["a", "b", "c", "d"];

 */

let letras = ["a", "b", "c", "d"];
let letrasInvertidas = [];

for(let i = letras.length - 1; i >= 0 ; i--){
    letrasInvertidas.push(letras[i]);
}

console.log(`El array invertido es: ${letrasInvertidas}`);