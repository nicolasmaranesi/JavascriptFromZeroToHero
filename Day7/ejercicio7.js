/*

Ejercicio 7 – Función de factorial

Escribí una función factorial(n) que devuelva el factorial de un número usando for.
👉 factorial(5) → 120.

*/

let number = 7;

function factorialNumber(number){
    let acc =1;
    if(number< 0){
        console.error("Select a positive number. ");
    }else{

        if(number == 0){
            return acc;
        }else{

        for(let i = 1; i <= number ; i++){

            acc *=i;
        }
        return acc;

        }


    }


}

console.log(` ${number}! = ${factorialNumber(number)}`);