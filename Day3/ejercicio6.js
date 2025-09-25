/**
Ejercicio 6 – Concatenar strings

Dado:
palabras = ["Hola", "mundo", "desde", "JavaScript"];


 */

let palabras = ["Hola", "mundo", "desde", "JavaScript"];
let frase = "";

for(let i = 0; i < palabras.length; i++){

    let palabraActual = palabras[i];

    frase += palabraActual;
    if(i <= palabras.length -1){
        frase += " ";
    }
}

console.log(`La frase escondida en el array es: ${frase}`);