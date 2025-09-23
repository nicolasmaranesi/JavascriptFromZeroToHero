/**
 Ejercicio 1: Invertir un string

Enunciado:
Dada una cadena str, devolvé otra cadena con los caracteres en orden inverso.
 */

let firstInput = "hola";
let  firstOutput = [];

let firstInputLength = firstInput.length


for(let i =0; i <firstInputLength ; i++){

    let currentChar = firstInput.charAt(i);


    firstOutput.splice(0,0,currentChar);
    
}
let firstOutputString = firstOutput.join("");

console.log(`El array invertido es ${firstOutputString}` );


let secondInput = "mundo";
let secondOutput = secondInput.split("").reverse("").join("");

console.log(`El array invertido es ${secondOutput}`);


let thirdInput = "Javascript";
let thirdOutput = "";

for(let i = thirdInput.length - 1 ;  i >=0 ; i --){

    thirdOutput += thirdInput[i];
}
console.log(`El array invertido es ${thirdOutput}`);






