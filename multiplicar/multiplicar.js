//requires
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No se puso un nro.');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.green);
        });

    });
}

let listarTabla = (base, limite) => {
    console.log('=========='.green);
    console.log(`Tabla de ${base}`.red);
    console.log('=========='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No se puso un nro de base.');
            return;
        }

        if (!Number(limite)) {
            reject('No se puso un nro de limite.');
            return;
        }


        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}\n`);
        }

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}