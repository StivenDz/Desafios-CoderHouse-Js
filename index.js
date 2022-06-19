let salir = false;
let opcion;
let users = [
    {
        nombre: 'Stiven',
        apellido: 'Diaz',
        edad: 19,
        correo: 'ste@gmail.com',
        direccion: null,
        tareas: ['Programar el backend','Aprender Reactjs','Actualizar las bases de datos','Testing']
    },
    {
        nombre: 'Hai',
        apellido: 'Cameron',
        edad: 39,
        correo: 'hai@gmail.com',
        direccion: 'Calle 15 #24-22 San Pedro',
        tareas: ['Programar el FrontEnd','Aprender Angular']
    },
    {
        nombre: 'Luana',
        apellido: 'Diaz',
        edad: 19,
        correo: 'Lua@gmail.com',
        direccion: null,
        tareas: ['Crear La API','Aprender Reactjs']
    },
    {
        nombre: 'Sara',
        apellido: 'Ruiz',
        edad: 22,
        correo: 'saRuiz@gmail.com',
        direccion: 'Calle 115 #54-22 Quinta B',
        tareas: ['Programar el backend','Testing','Aprender React Native']
    },
    {
        nombre: 'Mark',
        apellido: 'Zuckerberg',
        edad: 38,
        correo: 'MarkZ@gmail.com',
        direccion: null,
        tareas: ['Supervisar']
    }
];

setTimeout(()=>{
    while (!salir) {
        let validInput1 = false;
        do {
            opcion = prompt(`
                1. Ingresar Usuario
                2. Ver Usuarios Y Sus Datos
                3. Buscar un Usuario
                4. Agregarle una tarea a un usuario
                5. Eliminar una tarea de un usuario
                6. Ver tareas de un usuario
                7. Ver usuarios que tienen tareas
                8. Ver tareas
                9. Eliminar un Usuario
                0. Salir
            `);
    
            if (opcion == null) {
                continue
            } else if (opcion === '' || opcion.includes(' ')) {
                continue
            } else {
                opcion = Number(opcion);
            }
    
            if (isNaN(opcion)) {
                console.log("%cDebes Ingresar solo numeros", "color:red");
                continue;
            }
    
            let op = [1,2,3,4,5,6,7,8,9,0];
            op.forEach(i => {
                if (i === opcion) { validInput1 = true }
            });
    
            if (!validInput1) {
                console.log("%cDebes Ingresar una opcion correcta", "color:red");
                continue;
            }
    
    
        } while (!validInput1);
    
        const validateInput = (inputToValidate) => {
            if (inputToValidate == null) {
                return false
            } else if (inputToValidate === '') {
                return false
            } else {
                return true
            }
        }
    
        const validateNumber = (num) => {
            if (num === null) {
                return false;
            } else if (num === '' || num.includes(' ')) {
                return false;
            } else if (isNaN(Number(num))) {
                return false;
            } else if (Number(num) <= 0) {
                return false;
            }
            else {
                return true;
            }
        }
    
        const validateDir = (dir) => {
            if (dir === null || dir === undefined) {
                return null;
            } else if (dir === '') {
                return null;
            } else {
                return dir;
            }
        }
    
        let nombre, apellido, edad, correo, direccion;
        const question = (variable, texto, isNaN, canBeNull) => {
            while (true) {
                if (isNaN && !canBeNull) {
                    variable = prompt(texto);
                    let valid = validateInput(variable);
                    if (valid) {
                        return variable;
                    }
                } else if (!isNaN) {
                    variable = prompt(texto);
                    let valid = validateNumber(variable);
                    if (valid) {
                        return variable = Number(variable);
                    } else {
                        console.log("%cDebes Ingresar una edad correcta", "color:red")
                    }
                } else {
                    variable = prompt(texto);
                    return variable = validateDir(variable);
                }
            }
        }
    
        const searchOne = (name,array) =>{
            for (let i = 0; i < array.length; i++) {
                if(array[i]['nombre'] === name){
                    return i;
                }
            }
            return 'i';
        }
    
        let nameWanted,indice,tareas;
        switch (opcion) {
            case 1:
                console.clear();
                let ue = true;
                do{
                    nombre = question(nombre, 'Ingresa el Nombre del nuevo usuario', true, false);
                    
                    forue:
                    for (let i = 0; i < users.length; i++) {
                        if(users[i]['nombre'].toLowerCase() == nombre.toLowerCase()){
                            console.log(`Este nombre de usuario ya está registrado`);
                            break forue;
                        }else{
                            ue = false;
                        }
                    }
                    
                }while(ue);
                apellido = question(apellido, 'Ingresa el Apellido del nuevo usuario', true, false);
                edad = question(edad, 'Ingresa la edad del nuevo usuario', false, false);
                correo = question(correo, 'Ingresa el Correo del nuevo usuario', true, false);
                direccion = question(direccion, 'Ingresa la Direccion del nuevo usuario', true, true);
    
                users.push({
                    nombre: nombre,
                    apellido: apellido,
                    edad: edad,
                    correo: correo,
                    direccion: direccion,
                    tareas: []
                })
                console.log("%cUsuario Registrado Satisfactoriamente!", "color:green");
                break;
    
            case 2:
                console.clear();
                for (let i = 0; i < users.length; i++) {
                    console.log('\n Nombre:', users[i]['nombre'],'\n',
                        'Apellido:', users[i]['apellido'],'\n',
                        'Edad:', users[i]['edad'],'\n',
                        'Correo:', users[i]['correo'],'\n',
                        'Direccion:', users[i]['direccion']
                        )
                }
                break;
    
            case 3:
                console.clear();
                nameWanted = prompt('Ingrese el nombre del usuario a buscar');
                indice = searchOne(nameWanted,users);
    
                if (isNaN(indice)){
                    console.log("%cUsuario No Encontrado","color:red");
                }else{
                    console.log('\n Nombre:', users[indice]['nombre'],'\n',
                            'Apellido:', users[indice]['apellido'],'\n',
                            'Edad:', users[indice]['edad'],'\n',
                            'Correo:', users[indice]['correo'],'\n',
                            'Direccion:', users[indice]['direccion']
                            )
                }
                break;

            
            case 4: // 4. Agregarle una tarea a un usuario
                console.clear();
                nameWanted = question(nameWanted, 'Ingrese el nombre del usuario al cual le vas a agregar la tarea', true, false);

                indice = searchOne(nameWanted,users);

                if (isNaN(indice)){
                    console.log("%cUsuario No Encontrado","color:red");
                }else{
                    let tarea;
                    let getout = false;
                    while(!getout){
                        tarea = question(tarea,`Ingresa la tarea que le vas a agregar a ${nameWanted}`,true,false);
                        tareas = users[indice]['tareas'];
                        let exist = false;
                        if(tareas.length === 0){
                            getout = true;
                        }else{
                            for (let i = 0; i < tareas.length; i++) {
                                if(tareas[i].toLowerCase() == tarea.toLowerCase()){
                                    console.log(`${nameWanted} ya tiene asignada esa tarea!`);

                                    exist = true;
                                }
                            }
                        }
                        if(!exist){
                            getout = true;
                        }
                    }

                    users[indice]['tareas'].push(tarea);
                    // console.log('\n Nombre:', users[indice]['nombre'],'\n',
                    // 'Apellido:', users[indice]['apellido'],'\n',
                    // 'Edad:', users[indice]['edad'],'\n',
                    // 'Correo:', users[indice]['correo'],'\n',
                    // 'Direccion:', users[indice]['direccion'],'\n',
                    // 'Tareas: ',users[indice]['tareas']
                    // )
                    console.clear();
                    console.log("%cTarea agregada a "+ nameWanted+" con Exito!","color:green");
                }
                break;
            case 5: // 5. Eliminar una tarea a un usuario
                console.clear();
                nameWanted = question(nameWanted, 'Ingrese el nombre del usuario que le desea eliminar una tarea', true, true);

                if(nameWanted == null){
                    break;
                }

                indice = searchOne(nameWanted,users);
                if(isNaN(indice)){
                    console.log("%cUsuario No Encontrado","color:red");
                }else{
                    let taskToDelete;
                    if(users[indice]['tareas'].length == 0){
                        console.log("%c- "+ nameWanted+" No tiene tareas!","color:red");
                    }else{
                        tareas = users[indice]['tareas'];
                        let tasks = "";
                        for (let i = 0; i < tareas.length; i++) {
                            tasks += `\n- ${tareas[i]}`
                        }
                        let index;
                        w:
                        while(true){
                            taskToDelete = question(taskToDelete,`Ingresa la tarea que deseas eliminar: ${tasks}`,true,true);

                            if(taskToDelete == null){
                                console.clear();
                                break;
                            }

                            for (let i = 0; i < tareas.length; i++) {
                                if(tareas[i].toLowerCase().trim() == taskToDelete.toLowerCase().trim()){
                                    console.clear();
                                    console.log("%cTarea eliminada con Exito!","color:green");
                                    index = i;
                                    users[indice]['tareas'].splice(index,1);
                                    break w;
                                }
                            }

                            console.log('Digita una tarea correcta!')
                        }
                    }
                }
    
                    break;
        
            case 6: // 6. Ver tareas de un usuario

                console.clear();
                nameWanted = question(nameWanted, 'Ingrese el nombre del usuario que desea ver sus tareas', true, true);

                if(nameWanted == null){
                    break;
                }
                indice = searchOne(nameWanted,users);
                if (isNaN(indice)){
                    console.log("%cUsuario No Encontrado","color:red");
                }else{
                    if(users[indice]['tareas'].length == 0){
                        console.log("%c- "+ nameWanted+" No tiene tareas!","color:red");
                    }else{
                        tareas = users[indice]['tareas'];
                        let tasks = "";
                        for (let i = 0; i < tareas.length; i++) {
                            tasks += `\n- ${tareas[i]}`
                        }
                        console.log(tasks);
                    }
                    break;
                }
            case 7: // 7. Ver usuarios que tienen tareas
                console.clear();
                let haveTasks = [];
                let someOne = false;

                for (let i = 0; i < users.length; i++) {
                    if(users[i]['tareas'].length > 0){
                        haveTasks.push(users[i]['nombre']);
                        someOne = true;
                    }
                }

                if(!someOne){
                    console.log('Ninguno tiene tareas!')
                }else{
                    let have = "";
                    for (let i = 0; i < haveTasks.length; i++) {
                        have += `\n- ${haveTasks[i]}`
                    }
                    console.log(have);
                }

                break;
            case 8: // 8. Ver tareas
                console.clear();
                let allTasks = [];
                let some = false;
                let push = false;
                for (let i = 0; i < users.length; i++) {
                    if(users[i]['tareas'].length > 0){
                        let t = users[i]['tareas'];

                        forT:
                        for (let j = 0; j < t.length; j++) {
                            if(allTasks.length > 0){
                                for (let n = 0; n < allTasks.length; n++) {
                                   if(allTasks[n] === t[j]){
                                        continue forT;
                                   }else{
                                       push = true;
                                   }
                                }
                                if(push){
                                    allTasks.push(t[j]);
                                    push = false;
                                }
                            }else{
                                allTasks.push(t[j]);
                            }
                        }
                        some = true;
                    }
                }
                allTasks.sort();
                if(!some){
                    console.log('Ninguno tiene tareas!')
                }else{
                    let h = "";
                    for (let i = 0; i < allTasks.length; i++) {
                        h += `\n- ${allTasks[i]}`
                    }
                    console.log(h);
                }

                break;
    
            case 9:
                console.clear();
                let nameToBeDeleted = prompt('Ingrese el nombre del usuario a eliminar');
                let indiceDelete = searchOne(nameToBeDeleted,users);
    
                if (isNaN(indiceDelete)){
                    console.log("%cUsuario No Encontrado","color:red");
                }else{
                    for (let i = 0; i < users.length; i++) {
                        if(indiceDelete != i){
                            console.log('\n Nombre:', users[i]['nombre'],'\n',
                                'Apellido:', users[i]['apellido'],'\n',
                                'Edad:', users[i]['edad'],'\n',
                                'Correo:', users[i]['correo'],'\n',
                                'Direccion:', users[i]['direccion']
                                )
                        }else{
                            console.log("%c\nNombre: "+ users[i]['nombre']+'\n'+
                                "Apellido: "+ users[i]['apellido']+'\n'+
                                "Edad: "+ users[i]['edad']+'\n'+
                                "Correo: "+ users[i]['correo']+'\n'+
                                "Direccion: "+ users[i]['direccion']+"\n\n"+'Registro Eliminado',"color:red"
                                )
                        }
                    }
                    users.splice(indiceDelete,1);
                    console.log("%cEliminado Con Exito!","color:green");
                }
    
                break;
    
            case 0:
                salir = true;
                break;
    
            default:
                break;
        }
    
    }
},3000)