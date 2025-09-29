
// map  Transforma cada elemento de un array y devuelve otro array.


let nums = [1, 2, 3];
let dobles = nums.map(n => n * 2);
console.log(dobles); // [2, 4, 6]


//filter Devuelve un nuevo array con los que cumplen la condición.


let nums2 = [1, 2, 3, 4, 5];
let pares = nums2.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]

// reduce Reduce todo el array a un único valor.


let nums3 = [1, 2, 3, 4];
let suma = nums3.reduce((acc, n) => acc + n, 0);
console.log(suma); // 10