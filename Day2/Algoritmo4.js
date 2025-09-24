/*
Two Sum (Suma de dos números)
Enunciado:
Dado un array de enteros y un número objetivo, encontrá los dos índices de los números que suman ese objetivo.

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] 
*/

let input = [9,2, 11, 7];
let target = 9;
let lastNumber = 0;
let output = []


for(let i = 0; i< input.length; i++){

    let complement = target - input[i];
    
    if(input.includes(complement)){
        let j = input.indexOf(complement)
        output.push(i);
        output.push(j);
        break
    }
    
}

console.log(output);