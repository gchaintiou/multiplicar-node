const argv = require('./config/yargs').argv;
const colors = require('colors');
let comando = argv._[0];
const { crearArchivo, listarTabla } = require(`./multiplicar/multiplicar`);

switch (comando) {
    case 'listar':
        console.log("Listar Tabla");
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Se ha creado el archivo ${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}