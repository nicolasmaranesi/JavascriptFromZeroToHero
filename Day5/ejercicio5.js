/*
Revertir string

Función revertir(palabra) que devuelva la palabra al revés.
*/

function reverseString(phrase){

    phrase = phrase.split("").reverse("").join("");
    return phrase;

}

let word = "hola";


console.log(reverseString(word));

