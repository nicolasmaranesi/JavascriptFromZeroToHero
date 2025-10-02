/*
Ejercicio 4 – Escribir archivo con fs

Crea un script que escriba un archivo salida.txt con el contenido:
👉 "Archivo creado desde Node.js 🚀".
*/

const fs = require('fs');


fs.writeFileSync("salida.txt","Archivo creado desde Node.js 🚀")