
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// Importaciones sencillas
require('colors');

console.clear();

// Argumentos recuperado del process
// console.log( process.argv );

// Argumentos recuperado de Yargs
// console.log( argv );

crearArchivo( argv.b, argv.l, argv.hasta )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado correctamente') )
    .catch( err => console.log(err) )





// Forma antigua de recuperar los argumentos enviados por consola

// console.log(process.argv);
// const [ , , arg3 = 5 ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

// const base = 4;
// crearArchivo( base )
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado correctamente') )
//     .catch( err => console.log(err) )
