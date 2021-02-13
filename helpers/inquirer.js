const inquirer = require ('inquirer');
const colors = require ('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
        {
            value: '1',
            name: `${'1'.yellow} Agregar Producto a la lista de la compra`
        }, 
        {
            value: '2',
            name: `${'2'.yellow} Ver mi lista de la compra`
        }, 
        {
            value: '3',
            name: `${'3'.yellow} Ver los productos que ya tengo`
        },
        {
            value: '4',
            name: `${'4'.yellow} Ver productos que faltan por comprar`
        },
        {
            value: '5',
            name: `${'5'.yellow} Marcar producto como comprado o como pendiente de comprar`
        },
        {
            value: '6',
            name: `${'6'.yellow} Borrar producto de la lista de la compra`
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
            message: 'Producto:',
            validate(value) {
                if(value.length === 0) {
                    return 'Por favor, ingrese un producto.';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async(tareas) => {

    const choices = tareas.map((tarea, i) =>{

        const idx = `${i+1}.`.cyan;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.red + ' Cancelar' 
    });

    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }]

    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message) =>{
    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const {ok} = await inquirer.prompt(question);
    return ok;
}

const MostrarListadoChecklist = async(tareas = []) => {

    const choices = tareas.map((tarea, i) =>{

        const idx = `${i+1}.`.cyan;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false,
        }
    });

    const pregunta = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices
    }]

    const {ids} = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar, 
    confirmar,
    MostrarListadoChecklist,
}