/**
 * 
Ejercicio 7 – Contar ocurrencias

Dado:
letras = ["a", "b", "a", "c", "b", "a"];

 */

let letras = ["a", "b", "a", "c", "b", "a"];
let contador = new Map();

for (let letra of letras) {
  contador.set(letra, (contador.get(letra) || 0) + 1);
}

console.log(contador);

console.log(letrasRepetidas);