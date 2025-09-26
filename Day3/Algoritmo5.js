/**
 Verificar anagramas

Enunciado:
Dos strings son anagramas si contienen las mismas letras en distinto orden.
Escribí un algoritmo que devuelva true si dos strings son anagramas, false si no.
Input: "listen", "silent"
Output: true

 */


let palabra1 = "listen";
let palabra2 = "silent";

let anagrama =  false;

let arrayPalabra1 = palabra1.split("");
let arrayPalabra2 = palabra2.split("");

let palabra1Size =arrayPalabra1.length;
let palabra2Size =arrayPalabra2.length;

if(palabra1Size === palabra2Size){
for(let i = 0; i <palabra1Size; i++ ){

    let currentChar =  arrayPalabra1[i];

    if(arrayPalabra2.includes(currentChar)){
        anagrama = true;
    }else{
        break;
    }
}}else{

    anagrama = false;
}

console.log(anagrama);