//require
const fs = require('fs');
const { crearArchivo } = require('./multiplicar/multiplicar');
// const fs = require('express');
//const fs = require('fs');

//Primera parte
/*let base = '2';

let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});*/

//Segunda parte promises
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado:${ archivo }`))
    .catch(err => console.log(err));*/

//Tercera parte parametros desde consola

//console.log(process.argv);
/*let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado:${ archivo }`))
    .catch(err => console.log(err));
    */

//Cuarta parte paquetes