/*

Capitalizar nombres
let nombres = ["nico", "maria", "juan"];
*/


let names = ["nico", "maria", "juan"];



function nameFirstLetterUpperCaser(names){

    names = names.map(n => n[0].toLocaleUpperCase() + n.slice(1));
    return names;
}

    console.log(nameFirstLetterUpperCaser(names));