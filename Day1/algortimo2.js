/**
 Ejercicio 2: Máximo en un array

Enunciado:
Dado un array de números, encontrá el valor máximo.

 */

let inputArray = [3, 7, 2, 9, 4];

let biggestValue;

for(let i = 0 ; i < inputArray.length; i++){
    
    let currentValue = inputArray[i];
    if (i === 0){
        biggestValue = currentValue;
    }else{

        if(biggestValue< currentValue){
            biggestValue = currentValue;
        }
    }


}

console.log(`El elemento con mayor valor es ${biggestValue}`);