/**
 Ejercicio 5 – Sumar números de un array
 */

 let number = [1, 2, 3, 4, 5]
 let accu = 0;

 for (let i = 0 ; i < number.length; i++){
    accu += number[i];
 }

 console.log(`La suma de los numeros del array es ${accu}`)
 