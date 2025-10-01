/*

Ejercicio 10 – Promedio de aprobados

Dado:
let notas = [4, 7, 10, 5, 8];

Usá filter para quedarte con las notas >=6.

Calculá el promedio con reduce.
*/

let notas = [4, 7, 10, 5, 8];

function averagePositiveNotes(notes){

    notes  = notes.filter(n => n >= 6);
    let average = (notes.reduce((acc,n) => acc += n , 0))/ notes.length;
    return average;
}


console.log(averagePositiveNotes(notas));