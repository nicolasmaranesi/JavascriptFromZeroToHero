/*
Ejercicio 4 – ¿Es par?

Función esPar(numero) que devuelva true si es par y false si es impar.
*/

function isEven(number){

    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
}



let number1 = 4;

console.log(`El numero ingresado es  par?  ${isEven(number1)}`);