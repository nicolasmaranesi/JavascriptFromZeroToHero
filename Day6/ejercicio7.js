/*
Generar tabla

Función tablaMultiplicar(n) que devuelva un array con la tabla de multiplicar del número n.
👉 tablaMultiplicar(3) → [3, 6, 9, 12, 15, 18, 21, 24, 27, 30].
*/


let number = 3;

function tablaMultiplicar(number){
    let tabla = [];

    for(let i = 1; i <= 10; i++){

        let result = number * i;
        tabla.push(result);
    }
    return tabla;
}


console.log(`La tabla de multiplicar del numero ${number} es ${tablaMultiplicar(number)}`);
