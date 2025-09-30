/*

Ejercicio 4 – Palíndromo

Función esPalindromo(palabra) que devuelva true si la palabra es igual al revés.
👉 esPalindromo("oso") → true.
👉 esPalindromo("casa") → false.

*/


let phrase = "anita lava la tina"

function isPalindromo(phrase){
    phrase = phrase.replaceAll(" ","");
    phrase = phrase.toLocaleLowerCase();
    let palindrome = phrase.split("").reverse().join("");
    if(palindrome === phrase){
        return true;
    }else{
        return false;
    }

}

console.log(`La frase ingresada es un palindromo? ${isPalindromo(phrase)}`);


