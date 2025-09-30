/*

Ejercicio 2 – Contador de vocales

Función contarVocales(palabra) que cuente cuántas vocales (a, e, i, o, u) tiene un string.
👉 contarVocales("javascript") → 3.

*/


let word = "javascript";

function vowelsCounter(word){
    let vowels = ["a","e","i","o","u"];
    let counter = 0;

    word = word.split("");

    for(let i = 0 ; i< word.length; i++){
        let currentLetter = word[i];
        currentLetter = currentLetter.toLocaleLowerCase();
        if( vowels.includes(currentLetter)){
            counter ++;
        }

    }

    return counter;
}

console.log(vowelsCounter(word));