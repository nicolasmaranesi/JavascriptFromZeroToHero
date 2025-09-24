/**
 Ejercicio 2: FizzBuzz (clásico)

Enunciado:
Imprimí los números del 1 al 50, pero:

Si el número es múltiplo de 3 → mostrar "Fizz".

Si el número es múltiplo de 5 → mostrar "Buzz".

Si es múltiplo de ambos → mostrar "FizzBuzz".

Si no, mostrar el número.
 */


for(let i = 1; i <= 50; i++){

    if((i%3 === 0) && ( i% 5 === 0)){
        console.log("FizzBuzz");
    }else{

        if(i%3 === 0){
            console.log("Fizz");
        }else if(i %5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}