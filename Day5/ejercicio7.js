/*
Filtrar pares

Función filtrarPares(numeros) que reciba un array y devuelva solo los pares.
*/


function filterEven(numberArray){

    numberArray = numberArray.filter(n => n % 2 == 0);
    return numberArray;
}

let input = [1,2,3,4,5,6,7,8,9];


console.log(filterEven(input));