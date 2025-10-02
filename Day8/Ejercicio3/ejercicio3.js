/**
Leer archivo con fs

Creá un archivo mensaje.txt con un texto.

Usá fs.readFileSync para leerlo y mostrarlo en consola.
 
 */


const fs = require('fs');

let readFile = fs.readFileSync('./mensaje.txt',"utf-8");

console.log(readFile);
