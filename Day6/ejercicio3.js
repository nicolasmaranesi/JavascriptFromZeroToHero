/*
Ejercicio 3 – Tienda simple

Crea un array de objetos con productos:

let productos = [
  { nombre: "Camisa", precio: 2000 },
  { nombre: "Pantalón", precio: 3500 },
  { nombre: "Zapatillas", precio: 6000 }
];

    * Usá map para mostrar solo los nombres.

    * Usá reduce para calcular el precio total.

*/


let productos = [
  { nombre: "Camisa", precio: 2000 },
  { nombre: "Pantalón", precio: 3500 },
  { nombre: "Zapatillas", precio: 6000 }
];



function listarCompra(productos){
  let listadoDeCompra = productos.map(n => n.nombre);
  let subtotal = productos.reduce((acc, productos) => acc + productos.precio, 0);

    return [listadoDeCompra, subtotal];

}

let listaCompras = listarCompra(productos)


  console.log(`Usted compro Los artiulos ${listaCompras[0]}, por el precio total ${listaCompras[1]}`);
