let users = [
    {
        nombre: 'Stiven',
        apellido: 'Diaz',
        edad: 19,
        correo: 'ste@gmail.com',
        direccion: null,
        tareas: ['Programar el backend', 'Aprender Reactjs', 'Actualizar las bases de datos', 'Testing']
    },
    {
        nombre: 'Hai',
        apellido: 'Cameron',
        edad: 39,
        correo: 'hai@gmail.com',
        direccion: 'Calle 15 #24-22 San Pedro',
        tareas: ['Programar el FrontEnd', 'Aprender Angular']
    },
    {
        nombre: 'Juan',
        apellido: 'Ramirez',
        edad: 69,
        correo: 'juan@gmail.com',
        direccion: null,
        tareas: ['Programar el Both con Atom', 'Aprender Svelte']
    },
    {
        nombre: 'Luana',
        apellido: 'Diaz',
        edad: 19,
        correo: 'Lua@gmail.com',
        direccion: null,
        tareas: ['Crear La API', 'Aprender Reactjs']
    },
    {
        nombre: 'Sara',
        apellido: 'Ruiz',
        edad: 22,
        correo: 'saRuiz@gmail.com',
        direccion: 'Calle 115 #54-22 Quinta B',
        tareas: ['Programar el backend', 'Testing', 'Aprender React Native']
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

const usersList = document.getElementById('users');

let htmlUsers = ``;
let listTasks = ``;
let usTask;

const updateUsers = (users) => {
    htmlUsers = "";
    for (let i = 0; i < users.length; i++) {
        listTasks = ``;
        if (users[i]['tareas'].length > 0) {
            usTask = users[i]['tareas'];
            for (let j = 0; j < usTask.length; j++) {
                listTasks += `<p>-${usTask[j]}.</p>`;
            }
            htmlUsers += `<tr>
            <td class="column1">${users[i]['nombre']}</td>
            <td class="column2">${users[i]['apellido']}</td>
            <td class="column3">${users[i]['edad']}</td>
            <td class="column4">${users[i]['correo']}</td>
            <td class="column5">${users[i]['direccion']}</td>
            <td class="column6">${users[i]['tareas'].length}
                <div class="entregas">
                    <button id ="entregas"><i class="fa-solid fa-caret-down"></i></button>
                    <div class="cal">
                        ${listTasks}
                    </div>
                </div>
                <i id="${i}" class="fa-solid fa-x delete" title="delete"></i>
            </td>
            </tr>`
        } else {
            listTasks = "<p>Doesn't Have</p>";
            htmlUsers += `<tr>
            <td class="column1">${users[i]['nombre']}</td>
            <td class="column2">${users[i]['apellido']}</td>
            <td class="column3">${users[i]['edad']}</td>
            <td class="column4">${users[i]['correo']}</td>
            <td class="column5">${users[i]['direccion']}</td>
            <td class="column6">${users[i]['tareas'].length} <p class="text-right"> Doesn't Have</p>
            <i id="${i}" class="fa-solid fa-x delete" title="delete"></i>
            </td>
            </tr>`;
        }
    }
    usersList.innerHTML = htmlUsers;
    const deleteButton = document.querySelectorAll('.delete');
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', () => {
            deleteUser(users, deleteButton[i].id);
        })
    }
    // tasks list
    const taskContainer = document.querySelectorAll('.entregas');
    const taskButton = document.querySelectorAll('#entregas');
    const list = document.querySelectorAll('.cal');


    for (let i = 0; i < taskButton.length; i++) {
        const table = document.getElementById('table');
        taskButton[i].addEventListener('mouseover', () => {
            table.style.overflow = 'visible';
            list[i].classList.add('op');
            for (let j = 0; j < taskContainer.length; j++) {
                if (j != i) {
                    taskContainer[j].style.zIndex = '400';
                    taskContainer[j].style.opacity = '0';
                }
            }
        })
        taskButton[i].addEventListener('mouseout', () => {
            table.style.overflow = 'hidden';
            list[i].classList.remove('op');
            for (let j = 0; j < taskContainer.length; j++) {
                if (j != i) {
                    taskContainer[j].style.zIndex = '700';
                    taskContainer[j].style.opacity = '1';
                }
            }
        })
    }
}

updateUsers(users);
//     1. Ingresar Usuario
//     2. Ver Usuarios Y Sus Datos
//     3. Buscar un Usuario
//     4. Agregarle una tarea a un usuario
//     5. Eliminar una tarea de un usuario
//     6. Ver tareas de un usuario
//     7. Ver usuarios que tienen tareas
//     8. Ver tareas
//     9. Eliminar un Usuario




// new user
const newUserButton = document.getElementById('new-user');
const newUserContainer = document.getElementById('add-user');
const closeButton = document.getElementById('close');

newUserButton.addEventListener('click', () => {
    newUserContainer.classList.add('show');
})

closeButton.addEventListener('click', () => {
    newUserContainer.classList.remove('show');
})

// Funciones
const deleteUser = (array, indice) => {
    const alert = document.querySelector('.alert');
    const alertContainer = document.querySelector('.alert-container');
    alertContainer.classList.add('show');
    alert.innerHTML = `
        <p>Deseas Eliminar los datos de ${array[indice]['nombre']}?</p>
        <div>
            <button id="si">SI</button>
            <button id="no">NO</button>
        </div>
    `;

    const resYes = document.getElementById('si');
    resYes.addEventListener('click', () => {
        alertContainer.classList.remove('show');
        array.splice(indice, 1);
        updateUsers(array);
    })
    const resNo = document.getElementById('no');
    resNo.addEventListener('click', () => {
        alertContainer.classList.remove('show');
    })

}

const form = document.getElementById('form-user');
const uName = document.getElementById('name');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const email = document.getElementById('email');
const address = document.getElementById('address');
const task = document.getElementById('task');

uName.value = 'Leandro';
lastName.value = 'Paredes';
age.value='18';
email.value='lea@gmail.com';



const invalid = (input) => {
    input.classList.add('invalid');

    setTimeout(() => {
        input.classList.remove('invalid');
    }, 2000);
}
const validationEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formUser = new FormData(e.target);
    const dataUser = {
        nombre: formUser.get('name'),
        apellido: formUser.get('lastName'),
        edad: formUser.get('age'),
        correo: formUser.get('email'),
        direccion: formUser.get('address') || null,
        tareas: formUser.get('task')
    };

    if(dataUser.tareas === null || dataUser.tareas.length == 0){
        dataUser.tareas = [];
    }else{
        dataUser.tareas = [`${formUser.get('task')}`];
    }

    if (dataUser.nombre.length <= 2) {
        invalid(uName);
    }
    else if (dataUser.apellido.length <= 2) {
        invalid(lastName);
    }
    else if (dataUser.edad <= 0) {
        invalid(age);
    }
    else if (!validationEmail.exec(dataUser.correo) || dataUser.correo.slice(-4) != '.com') {
        invalid(email);
    }
    else {
        users.push(dataUser);
        updateUsers(users);
        form.reset();
        closeButton.click();
    }

});
/*
Leandro
Paredes
leo@gmail.com
*/

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

const searchOne = (name, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i]['nombre'].toLowerCase() === name) {
            return i;
        }
    }
    return 'Not Found';
}
