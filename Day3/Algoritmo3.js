/*

Segundo número más grande

Enunciado:
Dado un array de enteros, encontrá el segundo número más grande.

Input: [10, 5, 20, 8, 20]
Output: 10
*/

let input = [3,10, 5, 20, 8, 20];
let maxNumber = input[0];
let secondMaxNumber = input[0];

if(input.length < 2){
    console.error("El array es muy chico. ");
}

for(let i = 1; i < input.length; i++){

    let currentNumber = input[i];

    if(currentNumber > maxNumber){

        secondMaxNumber = maxNumber

        maxNumber = currentNumber;
    }else{
        if(currentNumber> secondMaxNumber && currentNumber != maxNumber){
            secondMaxNumber = currentNumber;
        }

    }
}

console.log(secondMaxNumber);