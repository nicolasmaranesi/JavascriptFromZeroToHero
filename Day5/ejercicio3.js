/*
Número mayor

Crea una función mayor(a, b) que devuelva el número más grande de los dos.
*/



function biggetsNumber(numeber1, number2){
    let biggetsNumber;

    if(numeber1 > number2){
        biggetsNumber = numeber1;
    }else if(number2 > numeber1){
        biggetsNumber = number2;
    }else{
    biggetsNumber = numeber1;
    }
    return biggetsNumber;
}

let number1 = 10;
let number2 = 50;


let biggest =  biggetsNumber(number1,number2);

console.log(`El numero mas grande es; ${biggest}`);