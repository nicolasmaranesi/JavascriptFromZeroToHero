/*


Buscar producto

Con el array carrito del Ejercicio 2, hacé una función buscar(nombre) que devuelva el 
objeto del producto que coincida.

👉 buscar("Leche") → { producto: "Leche", precio: 200 }.

*/

let cart = [
  { producto: "Pan", precio: 150 },
  { producto: "Leche", precio: 200 },
  { producto: "Queso", precio: 500 }
];


function searchPrice (cart,product){

    let price = cart.filter(cart => cart.producto == product)
    return price;

}



console.log(searchPrice(cart,"Leche"));