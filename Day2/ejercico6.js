/**
Ejercicio 6 – Nota de examen

Usá if/else if/else para una variable nota:

Si es >= 9 → "Excelente".

Si es >= 6 → "Aprobado".

Si es < 6 → "Desaprobado".

 */

let notaExamen = 9;


if(notaExamen>= 6){
    console.log(`Aprobado, tu nota es ${notaExamen}`);
    if(notaExamen >= 9){ 
        console.log(` Excelente`);
    }
}else{
    console.log(`Desaprobado, tu nota es ${notaExamen}`);
}