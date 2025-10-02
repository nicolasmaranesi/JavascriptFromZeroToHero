/*

Ejercicio 5 – Append (agregar texto)

Modificá el ejercicio anterior para que agregue una nueva línea de texto cada vez que lo corras.


*/


const fs = require('fs');


fs.appendFileSync("./salida.txt","\n till reach the moon 🚀")