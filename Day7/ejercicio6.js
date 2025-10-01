/*
🔹 Ejercicio 6 – Sumar positivos

Dado:

let numeros = [-5, 10, -3, 7, 8];

*/

let numeros = [-5, 10, -3, 7, 8];

function sumarNumeros(numeros){

numeros = numeros.filter(n => n >= 0);
let suma = numeros.reduce((acc,n)=> acc+n , 0);
return suma;
}


console.log(sumarNumeros(numeros));