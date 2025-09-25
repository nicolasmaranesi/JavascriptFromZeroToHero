/*

Ejercicio 2: Rotar un array k veces

Enunciado:
Dado un array, rotarlo hacia la derecha k posiciones.


Input: [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/

let input = [1,2,3,4,5,6,7];
let target = 3;
let output = []
let inputSize = input.length;

if(target> inputSize){
    console.error("Target invalido");
}
let start = inputSize - target;

for( let i = start; i < inputSize; i ++){
    let currentNumber = input[i];
    output.push(currentNumber);
}
for(let j = 0 ; j < start; j ++){
 let currentNumber = input[j];
    output.push(currentNumber);
}

console.log(output);

