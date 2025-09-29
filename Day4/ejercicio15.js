/**
 Contar strings vacíos


 let textos = ["hola", "", "mundo", "", "JS"];

 contar cuántos strings vacíos ("") hay.

 */


  let textos = ["hola", "", "mundo", "", "JS"];

  textos = textos.filter(n => n == "");

  let cantidadVacio =textos.length;

  console.log(cantidadVacio);