/*
Nombres con inicial mayúscula

Dado

nombres = ["nico", "juan", "maria"];


devolverlos como: ["Nico", "Juan", "Maria"].

*/

let nombres = ["nico", "juan", "maria"];


nombres = nombres.map(n => (n[0]).toString().toLocaleUpperCase() + n.slice(1));

console.log(nombres);

