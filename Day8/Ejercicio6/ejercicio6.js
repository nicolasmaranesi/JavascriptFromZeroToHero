/*
Ejercicio 6 – Servidor HTTP básico

Crea un servidor con http que al abrir en el navegador http://localhost:3000 muestre:
👉 "Servidor Node corriendo en el puerto 3000".
*/

const http = require('http');
const port = 3000;


const server = http.createServer((req,res) =>  {
if(req.url = "/" ){
res.writeHead(200, {"Content-Type": "text/plain"});
res.end("Hola desde Node.js");
}
else{
    res.writeHead(404);
    res.end(" Error 404 - NOT FOUND")
}

})


server.listen(port);