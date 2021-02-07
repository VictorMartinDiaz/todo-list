require ('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');

const main = async () => {
    console.clear();
    console.log('Hola Mundo!')

    let opt = '';

    do {

        opt = await inquirerMenu();

        if (opt !== '0') await pausa();
        

    } while(opt !== '0');

}

main();