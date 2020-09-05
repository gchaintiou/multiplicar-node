const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la Tabla de multiplicar', opts)
    .command('crear', 'Lista la tabla de multiplicar a un archivo de texto', opts)
    .help()
    .argv;

module.exports = {
    argv
}