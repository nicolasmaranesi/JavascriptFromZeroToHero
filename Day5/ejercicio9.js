/*
Capitalizar palabra

Función capitalizar(palabra) que devuelva la palabra con la primera letra en mayúscula.
*/


function firstLetterUpperCaser(word){

    word = word.split("");

    word = (word[0].toString().toLocaleUpperCase()) + (word.slice(1)).join("");
    return word;
}
let input = "hola";



console.log(firstLetterUpperCaser(input));