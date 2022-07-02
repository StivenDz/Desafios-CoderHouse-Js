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

// localStorage.setItem('users',(JSON.stringify(users)));
// users = JSON.parse(localStorage.getItem('users'));

const updateTable = (users) => {

    localStorage.setItem('users',(JSON.stringify(users)));
    console.log(typeof localStorage.getItem('users'));
    users = JSON.parse(localStorage.getItem('users'));
    console.log(typeof users);

    console.log(users);

    htmlUsers = "";
    for (let i = 0; i < users.length; i++) {
        listTasks = ``;
        if (users[i]['tareas'].length > 0) {
            usTask = users[i]['tareas'];
            for (let j = 0; j < usTask.length; j++) {
                listTasks += `<p>-${usTask[j]}.</p>`;
            }
            htmlUsers += `<tr>
            <td class="column1">${users[i]['nombre']}
                <i id="${i}" class="fa-solid fa-plus add " title="add task"></i>
                <i id="${i}" class="fa-solid fa-minus deleteTask" title="delete task"></i>
            </td>
            <td class="column2">${users[i]['apellido']}</td>
            <td class="column3">${users[i]['edad']}</td>
            <td class="column4">${users[i]['correo']}</td>
            <td class="column5"><p class="center">${users[i]['direccion']}</p></td>
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
            <td class="column1">${users[i]['nombre']}
                <i id="${i}" class="fa-solid fa-plus add "title="add task"></i>
                
            </td>
            <td class="column2">${users[i]['apellido']}</td>
            <td class="column3">${users[i]['edad']}</td>
            <td class="column4">${users[i]['correo']}</td>
            <td class="column5"><p class="center">${users[i]['direccion']}</p></td>
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
    //add task

    const addTask = document.querySelectorAll('.add');
    const deleteTask = document.querySelectorAll('.deleteTask');

    for (let i = 0; i < users.length; i++) {
        addTask[i].addEventListener('click', () => {
            const alert = document.querySelector('.alert');
            const alertContainer = document.querySelector('.alert-container');
            alertContainer.classList.add('show');
            alert.innerHTML = `
        <i id="closeAdd" class="fa-solid fa-x"></i>
        <img class="img-alert" src="./coderhouse.jpeg" alt="">
        <p>Que tarea deseas agregarle a ${users[i]['nombre']}?</p>
        <form id="add">
            <input autocomplete="off" class="new-user" id="new-task" name="new-task" type="text">
            <button type="submit">Add</button>
        </form>
    `;
            const newTaskInput = document.getElementById('new-task');
            const closeAdd = document.getElementById('closeAdd');
            closeAdd.addEventListener('click', () => {
                alertContainer.classList.remove('show');
            })

            const formAdd = document.getElementById('add');
            formAdd.addEventListener('submit', (e) => {
                e.preventDefault();
                const formtask = new FormData(e.target);
                let newTask = formtask.get('new-task');
                if (newTask.length < 4) {
                    invalid(newTaskInput);
                } else {
                    let j = addTask[i].id;
                    users[j]['tareas'].push(newTask);
                    updateTable(users);
                    formAdd.reset();
                    alertContainer.classList.remove('show');
                }
            })
        })
    }

    for (let i = 0; i < deleteTask.length; i++) {
        deleteTask[i].addEventListener('click', () => {
            const alert = document.querySelector('.alert');
            const alertContainer = document.querySelector('.alert-container');
            let taskToDelete = users[deleteTask[i].id]['tareas'];
            let options = ``;
            for (let j = 0; j < taskToDelete.length; j++) {
                options += `
                <option value="${taskToDelete[j]}">${taskToDelete[j]}</option>
                `;
            }
            alertContainer.classList.add('show');
            alert.innerHTML = `
            <i id="closeRemove" class="fa-solid fa-x"></i>
            <img class="img-alert" src="./coderhouse.jpeg" alt="">
            <p>Que tarea deseas eliminarle a ${users[i]['nombre']}?</p>
            <form id="remove">
                <select class="new-user" id="remove-task" name="remove-task">
                    ${options}
                </select>
                <button type="submit">Remove</button>
            </form>
        `;
            const TaskToDInput = document.getElementById('new-task');
            const closeRemove = document.getElementById('closeRemove');
            closeRemove.addEventListener('click', () => {
                alertContainer.classList.remove('show');
            })

            const formRemove = document.getElementById('remove');
            formRemove.addEventListener('submit', (e) => {
                e.preventDefault();
                const formTaskToDelete = new FormData(e.target);
                let taskD = formTaskToDelete.get('remove-task');
                if (taskD.length < 4) {
                    invalid(TaskToDInput);
                } else {
                    let j = deleteTask[i].id;
                    let indexOf = users[j]['tareas'].indexOf(taskD);
                    users[j]['tareas'].splice(indexOf, 1);
                    formRemove.reset();
                    alertContainer.classList.remove('show');
                    updateTable(users);
                }
            })
        })
    }
}
//localStorage.clear()
if(localStorage.getItem('users')){
    updateTable(JSON.parse(localStorage.getItem('users')));
}else{
    updateTable(users)
    console.log('No hay localStorage');
}

// new user
const newUserButton = document.getElementById('new-user');
const newUserContainer = document.getElementById('add-user');
const closeButton = document.getElementById('close');
const closeButtonRes = document.querySelector('.close');


newUserButton.addEventListener('click', () => {
    newUserContainer.classList.add('show');
})

closeButton.addEventListener('click', () => {
    newUserContainer.classList.remove('show');
})
closeButtonRes.addEventListener('click', () => {
    newUserContainer.classList.remove('show');
})

// Funciones
const deleteUser = (array, indice) => {
    const alert = document.querySelector('.alert');
    const alertContainer = document.querySelector('.alert-container');
    alertContainer.classList.add('show');
    alert.innerHTML = `
        <img class="img-alert" src="./coderhouse.jpeg" alt="">
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
        updateTable(array);
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

// uName.value = 'Leandro';
// lastName.value = 'Paredes';
// age.value='18';
// email.value='lea@gmail.com';


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

    if (dataUser.tareas === null || dataUser.tareas.length == 0) {
        dataUser.tareas = [];
    } else {
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
        updateTable(users);
        form.reset();
        closeButton.click();
    }
});