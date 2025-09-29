/*
Combinar map + filter

Usá map para elevar cada número al cuadrado.
Después filter para quedarte solo con los pares.

*/

let numeros = [1, 2, 3, 4, 5, 6];


numeros = numeros.map(n => n * n);

numeros = numeros.filter( n => (n % 2) == 0);


console.log(numeros);
