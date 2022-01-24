const inquirer=require('inquirer');
require('colors');

const preguntas=[
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices:[
            {
                value: '1',
                name: '1.Crear tarea'
            },
            {
                value: '2',
                name: '2.Listar tareas'
            },
            {
                value: '3',
                name: '3.Listar tareas completadas'
            },
            {
                value: '4',
                name: '4.Listar tareas pendiente'
            },
            {
                value: '5',
                name: '5.Completar tareas'
            },
            {
                value: '6',
                name: '6.Borrar tarea'
            },
            {
                value: '0',
                name: '0.Salir'
            }
        ]
    }
];

const inquireMenu = async () =>{

    console.clear();
    console.log("=====================".green);
    console.log("Seleccione una opción".green);
    console.log("=====================\n".green);
    const {opt} = await inquirer.prompt(preguntas);//propmt es para hacer preguntas

    return opt;

}

const pausa = async()=>{
    const pregunta = [
        {
            type:'input',
            name:'pausa',
            message: 'Pulse Enter para continuar\n',

        }
    ];   
    return await inquirer.prompt(pregunta);
}

module.exports={
    inquireMenu,
    pausa
}