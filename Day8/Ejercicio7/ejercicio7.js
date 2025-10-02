/*
Ejercicio 7 – Servidor con ruta condicional

Modificá el servidor para que:

Si entrás a /, devuelva "Inicio".

Si entrás a /about, devuelva "Acerca de...".

Si entrás a otra ruta, devuelva "404 Not Found".
*/



const http = require('http');
const port = 3000
const server = http.createServer((req,res) => {

    const {pathname} = new URL(req.url,`http://${req.headers.host}`);
    const path = pathname.toLocaleLowerCase();



    if(path  == '/index'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end(`Bienvenidos !!!`)
    }else if(path == '/about'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end(`Acerca de...`)
    }else{
        res.writeHead(404, {"content-type":"text/plain"});
        res.end(`ERROR 404 - NOT FOUND`)
    }

})

server.listen(port);