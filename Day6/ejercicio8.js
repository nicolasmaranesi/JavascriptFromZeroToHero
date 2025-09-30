/*
Edad mínima y máxima

Dado:
let edades = [18, 22, 15, 30, 27];

Función minMax(edades) que devuelva un objeto con {min: x, max: y}.

*/



let edades = [18, 22, 15, 30, 27];

function minMax(edades){
    let output = {};

    let min = edades[0]
    let max = edades [0];

    for(let i= 1; i < edades.length; i++ ){
        let currentNumber = edades[i];
        
        if(currentNumber > max){
            max = currentNumber;
        }else if(currentNumber < min){
            min = currentNumber;
        }
        }
        output.min = min;
        output.max = max;
    return output;
}

console.log(minMax(edades));