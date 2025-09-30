/*
Reemplazar negativos

Dado:
let numeros = [1, -3, 5, -7, 9];

Función reemplazarNegativos(arr) que devuelva un nuevo array donde los negativos sean 0.

*/


let numeros = [1, -3, 5, -7, 9];

function replaceNegative(numeros){
    for(let i = 0; i < numeros.length;i++ ){

        let currentNumber = numeros[i];

        if(currentNumber< 0){
            numeros[i] = 0;
        }
    }

    return numeros;
}

console.log(replaceNegative(numeros));