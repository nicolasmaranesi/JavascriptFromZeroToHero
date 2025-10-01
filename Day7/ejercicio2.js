/*
Total de la compra

Dado un array de objetos:
let carrito = [
  { producto: "Pan", precio: 150 },
  { producto: "Leche", precio: 200 },
  { producto: "Queso", precio: 500 }
];
Usá reduce para obtener el precio total.
*/


let carrito = [
  { producto: "Pan", precio: 150 },
  { producto: "Leche", precio: 200 },
  { producto: "Queso", precio: 500 }
];

function getTotalAmount(cartList){

    let totalAmount = cartList.reduce((acc,item) => acc + item.precio , 0);
    return totalAmount;
}

console.log(getTotalAmount(carrito));