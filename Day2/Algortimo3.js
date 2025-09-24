/**
 Ejercicio 1: Eliminar duplicados de un array

Enunciado:
Dado un array de números, devolvé un nuevo array sin elementos repetidos.

 */

let numeros = [1,22,3,3,4,5,5,6,7,7,7,7,8,9,10,20,22,22,25];
let numerosSinRepeticion = []

for(let i = 0; i < numeros.length; i++){

    if(!numerosSinRepeticion.includes(numeros[i])){
        numerosSinRepeticion.push(numeros[i]);
    }
        
}

console.log(numerosSinRepeticion);