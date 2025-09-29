/*
Concatenar en una frase

palabras = ["JS", "es", "muy", "potente"];

*/
let palabras = ["JS", "es", "muy", "potente"];


palabras = (palabras.reduce((n,acc) => n + " " + acc , "")).trim();



console.log(palabras);

