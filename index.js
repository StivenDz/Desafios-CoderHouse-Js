// class User {
//     constructor(name, apellido, edad, correo, direccion) {
//         this.name = name;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.correo = correo;
//         this.direccion = direccion;
//     }
// }


let salir = false;
let opcion;
let users = [
    {
        nombre: 'Stiven',
        apellido: 'Diaz',
        edad: 19,
        correo: 'ste@gmail.com',
        direccion: null
    },
    {
        nombre: 'Hai',
        apellido: 'Cameron',
        edad: 39,
        correo: 'hai@gmail.com',
        direccion: 'calle 15 #24-22 San Pedro'
    },
    {
        nombre: 'Luana',
        apellido: 'Diaz',
        edad: 19,
        correo: 'Lua@gmail.com',
        direccion: null
    },
    {
        nombre: 'Sara',
        apellido: 'Ruiz',
        edad: 22,
        correo: 'saRuiz@gmail.com',
        direccion: null
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
                4. Eliminar un Usuario
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
    
            let op = [1, 2, 3, 4, 0];
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
            
        }
    
    
        switch (opcion) {
            case 1:
                console.clear();
                nombre = question(nombre, 'Ingresa el Nombre del nuevo usuario', true, false);
                apellido = question(apellido, 'Ingresa el Apellido del nuevo usuario', true, false);
                edad = question(edad, 'Ingresa la edad del nuevo usuario', false, false);
                correo = question(correo, 'Ingresa el Correo del nuevo usuario', true, false);
                direccion = question(direccion, 'Ingresa la Direccion del nuevo usuario', true, true);
    
                users.push({
                    nombre: nombre,
                    apellido: apellido,
                    edad: edad,
                    correo: correo,
                    direccion: direccion
                })
                console.log("%cUsuario Registrado Satisfaactoriamente!", "color:green");
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
                let nameWanted = prompt('Ingrese el nombre del usuario a buscar');
                let indice = searchOne(nameWanted,users);
    
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
    
            case 4:
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
