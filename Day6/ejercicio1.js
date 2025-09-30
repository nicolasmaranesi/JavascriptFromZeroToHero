/*

Sistema de notas

Escribí una función evaluarAlumno(notas) que reciba un array de notas (números de 1 a 10) y:

Calcule el promedio con reduce.

Devuelva:

"Excelente" si el promedio >= 9.

"Aprobado" si el promedio >= 6.

"Desaprobado" si el promedio < 6.

👉 evaluarAlumno([8, 9, 10]) → "Excelente"

*/


let notas = [8, 9, 10];

function evaluarAlumno(notas){

    let promedio = (notas.reduce((n,acc)=> n+acc, 0))/notas.length;

    if(promedio >= 9){
        console.log(`Excelente, tu promedio es ${promedio}`);
    }
    else if(promedio >= 6 && promedio< 9){
        console.log(`Aprobad, tu promedio es de ${promedio}`);
    }
    else{
        console.log(`Desaprobado, tu promedio es de ${promedio}`);
    }
}

evaluarAlumno(notas);