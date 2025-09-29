/**
Filtrar strings cortos
palabras = ["sol", "montaña", "mar", "estrella"];

Usá filter para obtener las palabras con 3 letras o menos.
 */

let palabras = ["sol", "montaña", "mar", "estrella"];

palabras = palabras.filter(n => n.length <= 3);

console.log(palabras);