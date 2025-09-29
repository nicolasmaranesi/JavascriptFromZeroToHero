/*
Producto de todos los números

Dado:

numeros = [2, 3, 4];

obtener el producto (2 × 3 × 4).

*/

let numeros = [2, 3, 4];

let producto = numeros.reduce((n,accu) => accu * n, 1);

console.log(producto);
