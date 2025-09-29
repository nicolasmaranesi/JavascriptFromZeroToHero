/*
Promedio de array

Función promedio(numeros) que reciba un array y devuelva el promedio.
*/

function averageArray(arrayNumber){

    arrayAverage = (arrayNumber.reduce((n,accu) => n + accu, 0))/ arrayNumber.length;

    return arrayAverage;        

}

let input = [5, 7, 9]


console.log(`El promedio de los numeros ingresados es: ${averageArray(input)}`);