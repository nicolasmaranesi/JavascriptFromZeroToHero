/*
Contar pares

Dado:
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Función que devuelva cuántos números pares hay en el array.

*/


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function evenAmount(numberList){

    numberList =  numberList.filter( n => n %2 == 0);

    let numberAmount = numberList.length;

    return numberAmount;
}

console.log(evenAmount(numbers));


