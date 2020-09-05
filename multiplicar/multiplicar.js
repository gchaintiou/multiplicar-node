// Requireds
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const { rejects } = require('assert');
let data = '';

let listarTabla = (base, limite) => {
    console.log(`Listar Tabla para base ${base} y limite ${limite}`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i * base}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} No es un número`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    })

};
module.exports = {
    crearArchivo,
    listarTabla
}