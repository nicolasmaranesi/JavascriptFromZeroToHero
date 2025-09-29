/*
Suma con reduce

Función sumarArray(numeros) que use reduce para sumar todos los valores.
*/



function sumNumbersArray (numberArray){


    let sum =  numberArray.reduce((n,acc) => n+acc , 0);
    return sum;
}

let input = [1,2,3,4,5,6,7,8,9,10];

console.log(`La suma de los numeros del array es: ${sumNumbersArray(input)}`);

