/*
Buscar el mayor en array

Función numeroMayor(numeros) que devuelva el número más grande de un array.
*/


function getBiggerNumber(numberArray){
    let biggetNumber  = numberArray[0];

    for(let i = 1 ; i < numberArray.length; i++){
        let currentNumber = numberArray[i];
        if(currentNumber > biggetNumber){
            biggetNumber = currentNumber;
            }

    }
    return biggetNumber;

}

let input =[4, 9, 2, 15, 7];

console.log(`The biggest number in the Array is: ${getBiggerNumber(input)}`);