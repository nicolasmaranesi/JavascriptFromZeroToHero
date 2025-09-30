/*
Números primos

Función esPrimo(numero) que devuelva true si es primo y false si no lo es.
👉 esPrimo(7) → true.
👉 esPrimo(10) → false.
*/


let number = 10;

function isPrime(number){

    if(number <= 1){
        return false;
    }else if (number == 2 ){
        return true;
    }else if( number != 2 && number% 2 == 0){
        return false;
    }
    let limit = Math.sqrt(number);
    for(let i = 3; i <= limit; i +=2){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(number));
