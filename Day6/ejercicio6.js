    /*

    Buscar por nombre

Con el array de productos, hacé una función buscarProducto(nombre) que devuelva el objeto que coincida.
👉 buscarProducto("Camisa") → { nombre: "Camisa", precio: 2000 }.

*/

let productos = [
  { nombre: "Camisa", precio: 2000 },
  { nombre: "Pantalón", precio: 3500 },
  { nombre: "Zapatillas", precio: 6000 }
];


function buscarProducto(producto , productos){
    productos = productos.filter(productos => productos.nombre == producto );
    return productos;
}

console.log(buscarProducto(productos,"Camisa"));