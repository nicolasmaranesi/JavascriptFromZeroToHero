/*
Sumar solo pares

let numeros = [1, 2, 3, 4, 5, 6];


*/

let numeros = [1, 2, 3, 4, 5, 6];


numeros = numeros.filter(n  => n % 2 ===0);

console.log(numeros);

numeros = numeros.reduce((n,accu) => n+accu, 0);

console.log(numeros);
 