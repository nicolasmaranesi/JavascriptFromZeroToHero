/*
Mezcla de arrays

Función intercalar(arr1, arr2) que mezcle dos arrays alternando sus elementos.
intercalar([1,2,3], ["a","b","c"]) ---> [1,"a",2,"b",3,"c"].


*/


let numberArray =  [1,2,3,4];
let letterArray = ["A","B","C","D"];

function combineArray(firstArray, secondArray){

    if(firstArray.length != secondArray.length){
        console.error(`Can not combine arrays with different size.`)
    }else{
        let combineArray = [];
        for(let i = 0; i < firstArray.length; i++){
            let currentElementInFirstArray = firstArray[i];
            let currentElementInSecondArray = secondArray[i];
            combineArray.push(currentElementInFirstArray);
            combineArray.push(currentElementInSecondArray);
        }
        return combineArray;
    }

}

console.log(combineArray(numberArray,letterArray));