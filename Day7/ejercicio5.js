/*

Reemplazar palabras

Dado:
let frase = ["JS", "es", "feo", "pero", "potente"];
Usá map para reemplazar "feo" por "genial".
*/


let frase = ["JS", "es", "feo", "pero", "potente"];


frase = frase.map(n => n == "feo" ? "genial" : n);

frase = (frase.join(",")).replaceAll(","," ");

console.log(frase);