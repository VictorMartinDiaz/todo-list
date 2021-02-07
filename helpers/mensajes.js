const colors = require ('colors');


const mostrarMenu = () => {

    return new Promise (resolve => {
    
        console.clear();
        console.log(colors.cyan('============================'));
        console.log(colors.yellow('   Seleccione una opcion'))
        console.log(colors.cyan('============================\n'));

        console.log(colors.cyan(`1. Crear tarea`));
        console.log(colors.cyan(`2. Listar tareas`));
        console.log(colors.cyan(`3. Listar tareas completadas`));
        console.log(colors.cyan(`4. Listar tareas pendientes`));
        console.log(colors.cyan(`5. Completar tareas`));
        console.log(colors.cyan(`6. Borrar tareas`));
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