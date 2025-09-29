/**
Filtrar palabras largas

palabras = ["sol", "montaña", "mar", "universo"];

obtener solo las palabras de más de 4 letras.

*/

let palabras = ["sol", "montaña", "mar", "universo"];

palabras = palabras.filter(n => n.length >= 4 );

console.log(palabras);