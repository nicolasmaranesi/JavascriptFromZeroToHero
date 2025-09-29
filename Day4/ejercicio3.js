/*
Suma total

Dado:
numeros = [1, 2, 3, 4, 5];

Usá reduce para obtener la suma total.
*/

let numeros = [1, 2, 3, 4, 5];



let suma = numeros.reduce((acc,n)=> acc+n, 0);
console.log(suma);
