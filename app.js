require('colors');
const { inquireMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

//const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear();

const main = async() => {
    let opt = '';
    const tareas=new Tareas();

    do{

        opt = await inquireMenu();//esperamos a que la persona escriba
        //if (opt !== '0') await pausa();
        switch(opt){
            case '1':
                const desc=await leerInput('Descripción: ');
                break;
            case '2':
                console.log(tareas._listado);
                break;    
        }

        await pausa();

    }while(opt!=='0');


}

main();