const inquirer = require ('inquirer');
const colors = require ('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿?',
    choices: [
        {
            value: '1',
            name: `1. Crear tarea`
        }, 
        {
            value: '2',
            name: `2. Listar tareas`
        }, 
        {
            value: '3',
            name: `3. Listar tareas completadas`
        },
        {
            value: '4',
            name: `4. Listar tareas pendientes`
        },
        {
            value: '5',
            name: `5. Completar tareas`
        },
        {
            value: '6',
            name: `6. Borrar tareas`
        },
        {
            value: '0',
            name: `0. Salir`
        }
    ]
}];

const enter = [{
    type: 'input',
        name: 'enter',
message: colors.cyan(`\nPresione ${'ENTER'.yellow} para continuar`)
}];

const inquirerMenu = async () => {
   
    console.clear();
   
    console.log(colors.cyan('============================'));
    console.log(colors.yellow('   Seleccione una opcion'))
    console.log(colors.cyan('============================\n'));

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {

    const {opcion} = await inquirer.prompt(enter);
    return opcion;

}

module.exports = {
    inquirerMenu,
    pausa
}