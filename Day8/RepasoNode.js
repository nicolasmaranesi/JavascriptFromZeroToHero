/*
Node.js – Fundamentos
🔹 1. ¿Qué es Node.js?

Es un entorno de ejecución que te permite correr JavaScript fuera del navegador.

Se usa mucho para backend: crear servidores, APIs, manejar archivos, conectarte a bases de datos, etc.

👉 Si en el navegador usás console.log("Hola"), lo ves en la consola del navegador.
👉 En Node, hacés lo mismo pero en tu terminal con node archivo.js.



 
2. Módulos

Node tiene un sistema de módulos para organizar el código en varios archivos.
------------------------------saludos.js-------------------------------------
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

module.exports = saludar; // exportar función
-----------------------------------------------------------------------------

------------------------------app.js-----------------------------------------
const saludar = require("./saludos");

console.log(saludar("Nico")); // Hola, Nico
------------------------------------------------------------------------------




Módulo fs (File System)

Sirve para leer y escribir archivos en tu computadora.


------------------------------Leer Archivo-------------------------------------

const fs = require("fs");

let data = fs.readFileSync("mensaje.txt", "utf-8");
console.log(data);

-------------------------------------------------------------------------------
--------------------------Escribir Archivo-------------------------------------

fs.writeFileSync("salida.txt", "Archivo creado desde Node 🚀");

-------------------------------------------------------------------------------
---------------------------Agregar Texto al Archivo----------------------------

fs.appendFileSync("salida.txt", "\nNueva línea agregada");

-------------------------------------------------------------------------------




4. Módulo path

Sirve para manejar rutas de archivos de manera segura.

const path = require("path");

let ruta = path.join(__dirname, "mensaje.txt");
console.log(ruta);



👉 __dirname = la carpeta actual donde está el archivo.



5. Módulo http

Te permite crear un servidor web en Node.

Servidor
--------
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hola desde Node.js");
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});


👉 Cuando entres a http://localhost:3000 en el navegador, vas a ver el mensaje.

Servidor con rutas
------------------
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Inicio");
  } else if (req.url === "/about") {
    res.end("Acerca de...");
  } else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
});

server.listen(3000);




6. Argumentos en la terminal (CLI)

Cuando ejecutás un script con Node, podés pasarle argumentos.

CLI
----
node sumar.js 5 10

SUMAR.JS
---------

let args = process.argv; // array con todo lo que escribiste
let a = parseInt(args[2]);
let b = parseInt(args[3]);

console.log("La suma es", a + b);

---------------------------------------------------------------------------------------------

*/

