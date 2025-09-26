/*
Contar ocurrencias de un carácter en un string

Enunciado:
Dado un string y un carácter, devolvé cuántas veces aparece ese carácter.

Input: "javascript", "a"
Output: 2

*/

let input =  "javascript";
let target = "a";
let counter = 0;
input = input.toLowerCase();
target = target.toLowerCase();

for(let i = 0; i <input.length; i ++ ){

    let currentChar = input[i];

    if(currentChar == target){
        counter ++;
    }

}
console.log(counter);