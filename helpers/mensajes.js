const { resolve } = require('path');

require('colors');

const mostrarMenu= () =>{

    return new Promise( resolve => {//creo promesa para enviar la opcion que elijo
        console.clear();
        console.log("=====================".green);
        console.log("Seleccione una opción".green);
        console.log("=====================\n".green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendiente`);
        console.log(`${'5.'.green} Completar tareas`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);

        const readline = require('readline').createInterface({//para que escriba el usuario
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (opcion)=>{
            readline.close();
            resolve(opcion);//mando por aqui la opcion
        })
    });    


}

const pausa = ()=>{
    return new Promise( resolve=> {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Pulse Enter para continuar \n: ', (opcion)=>{
            readline.close();
            resolve();
        })

    });
    
}


module.exports = {
    mostrarMenu,
    pausa
}