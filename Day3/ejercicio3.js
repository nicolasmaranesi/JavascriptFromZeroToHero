/*

Ejercicio 3 – Buscar el mayor

Dado:
numeros = [15, 22, 8, 99, 3];
*/

let numeros = [15, 22, 100, 8, 99, 3];
let mayor = 0;

for(let i =0 ; i < numeros.length; i++){

if(mayor < numeros[i]){

    mayor = numeros[i];
}
}


console.log(`El numero mayor es ${mayor}`);