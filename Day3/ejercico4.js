/*
Ejercicio 4 – Contar pares e impares

Dado:
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


let sumaPar = 0;
let sumaImpar = 0;

for(let i =0 ; i< numeros.length; i++){

    let currentNumber = numeros[i];

    if(currentNumber%2 === 0){

        sumaPar += 1;
    }else{

        sumaImpar += 1;
    }
}

console.log(`La cantidad de elementos pares es: ${sumaPar}`);
console.log(`La cantidad de elementos impares es: ${sumaImpar}`);