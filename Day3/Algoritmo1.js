/**
Ejercicio 1: Máximo subarray (Kadane’s Algorithm)

Enunciado:
Dado un array de enteros (positivos y negativos), encontrá la suma máxima de un subarray contiguo.
 

Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6   // subarray [4,-1,2,1]

Pistas:

Solución naive = probar todos los subarrays (O(n²)).

Solución óptima = Kadane’s Algorithm (O(n)):

Llevar la suma actual (currentSum).

Si currentSum < 0 → reiniciar a 0.

Guardar el máximo en maxSum.

 */


let input = [-2,1,-3,4,-1,2,1,-5,4];

let maxEnding = input[0];
let maxSoFar = input[0];
let start = 0;
let end = 0;
let tempStart = 0;
let output;

for(let i = 1; i < input.length; i++){
    let currentNumber = input[i];
    if(currentNumber > maxEnding + currentNumber ){
        maxEnding = currentNumber;
        tempStart = i;
    }else{
        maxEnding += input[i];
    }

    if(maxEnding > maxSoFar){
        maxSoFar = maxEnding;
        start = tempStart
        end= i;
    }
    output =  input.slice(start,end+1);
}


console.log(`El subArray es ${output}`);
