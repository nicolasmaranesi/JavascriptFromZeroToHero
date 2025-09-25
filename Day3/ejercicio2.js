/**
Ejercicio 2 – Sumar números

Dado:
numeros = [2, 4, 6, 8, 10];
 */

let numeros = [2, 4, 6, 8, 10];
let sum = 0;

for(let i = 0; i < numeros.length; i++){
    sum += numeros[i];

}

console.log(`La suma de los elementos del array es: ${sum}`);