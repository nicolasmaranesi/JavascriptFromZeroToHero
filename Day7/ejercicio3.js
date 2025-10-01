/*
🔹 Ejercicio 3 – Palabra más larga
let palabras = ["sol", "montaña", "mar", "estrella"];
Escribí una función que devuelva la palabra con más letras.
*/


let palabras = ["sol", "montaña", "mar", "estrella"];


function obtenerPalabrasMasCortas(palabras){

    let listadoMasCorto = [palabras[0]]
    let palabraMasCorta = palabras[0].length;
    
    for(let i = 1; i < palabras.length; i++){

        let palabraActual = palabras[i];
        if(palabraActual.length < palabraMasCorta){
            listadoMasCorto = []
            listadoMasCorto.push(palabraActual);
        }else if(palabraActual.length == palabraMasCorta){
            listadoMasCorto.push(palabraActual);
        }
    }
    return listadoMasCorto;
}

console.log(obtenerPalabrasMasCortas(palabras));