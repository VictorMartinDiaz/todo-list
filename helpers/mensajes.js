const colors = require ('colors');


const mostrarMenu = () => {

    return new Promise (resolve => {
    
        console.clear();
        console.log(colors.cyan('============================'));
        console.log(colors.yellow('   Seleccione una opcion'))
        console.log(colors.cyan('============================\n'));

        console.log(colors.cyan(`1. Agregar producto a la lista`));
        console.log(colors.cyan(`2. Ver mi lista de la compra`));
        console.log(colors.cyan(`3. Ver los productos que ya tengo`));
        console.log(colors.cyan(`4. Ver los productos pendientes de comprar`));
        console.log(colors.cyan(`5. Marcar producto como comprado`));
        console.log(colors.cyan(`6. Borrar producto de mi lista`));
        console.log(colors.cyan(`0. Salir\n`));

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(colors.yellow('Selecciones una opción: '), (opt) =>{
            readline.close();
            resolve(opt);
        });
    })
}
const pausa = () => {
    
    return new Promise (resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(colors.cyan(`\nPresione ${'ENTER'.yellow} para continuar\n`), (opt) =>{
            readline.close();
            resolve();
        });
    })
}

module.exports = {
    mostrarMenu,
    pausa
}