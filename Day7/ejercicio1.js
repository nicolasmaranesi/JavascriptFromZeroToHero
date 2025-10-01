/*
Integradores
🔹 Ejercicio 1 – Aprobados y desaprobados
Dado un array de notas:
let notas = [4, 7, 10, 5, 8];

obtener:

Array de aprobados (>=6).

Array de desaprobados (<6).

let notas = [4, 7, 10, 5, 8];

obtener:

Array de aprobados (>=6).

Array de desaprobados (<6).
*/

let notas = [4, 7, 10, 5, 8];

function obtenerNotasFiltradas(notas){

    let output = {};
    let arrAprobado = [];
    let arrDesaprobado = [];

    for(let i = 0; i < notas.length; i++){
        let notaActual = notas[i];
        if(notaActual>= 6){
            arrAprobado.push(notaActual);
        }else{
            arrDesaprobado.push(notaActual);
        }
    }
    output.aprobado = arrAprobado;
    output.desaprobado = arrDesaprobado;
    return output;
}

console.log(obtenerNotasFiltradas(notas));