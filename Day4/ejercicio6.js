/**
Calcular promedio
Dado:
notas = [7, 8, 9, 5, 10];
Usá reduce para calcular el promedio.

 */

let notas = [7, 8, 9, 5, 10];

let promedio = (notas.reduce((accu,n)=> (accu + n), 0))/(notas.length);

console.log(promedio);