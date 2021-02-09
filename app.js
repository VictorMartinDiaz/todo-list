require ('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        pausa,
        leerInput 
    } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

const main = async () => {
    console.clear();

    let opt = '';
    const tareas = new Tareas();
    const tareasEnDB = leerDB();

    if(tareasEnDB) {
        tareas.cargarTareasFromArray(tareasEnDB);
    }


    do {
        //imprime el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break;

        }

        guardarDB(tareas.listadoArr);

        if (opt !== '0') await pausa();
        

    } while(opt !== '0');

}

main();