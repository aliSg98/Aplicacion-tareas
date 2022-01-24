require('colors');
const { inquireMenu, pausa } = require('./helpers/inquirer');

//const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear();

const main = async() => {
    let opt = '';
    do{

        opt = await inquireMenu();//esperamos a que la persona escriba
        //if (opt !== '0') await pausa();
        await pausa();

    }while(opt!=='0');


}

main();