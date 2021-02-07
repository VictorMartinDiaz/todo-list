const inquirer = require ('inquirer');
const colors = require ('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
        {
            value: '1',
            name: `${'1'.yellow} Crear tarea`
        }, 
        {
            value: '2',
            name: `${'2'.yellow} Listar tareas`
        }, 
        {
            value: '3',
            name: `${'3'.yellow} Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4'.yellow} Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5'.yellow} Completar tareas`
        },
        {
            value: '6',
            name: `${'6'.yellow} Borrar tareas`
        },
        {
            value: '0',
            name: `${'0'.yellow} Salir`
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

    console.log('\n');
    const {opcion} = await inquirer.prompt(enter);
    return opcion;

}

const leerInput = async () => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: 'Descripcion:',
            validate(value) {
                if(value.length === 0) {
                    return 'Por favor, ingrese un valor.';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}