const users = [
    {
        id: 1,
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        id: 2,
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        id: 3,
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        id: 4,
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        id: 5,
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
];
let editingUSer = false;

function printUsers() {

    const tableBody = document.getElementById('users-table-body')
    tableBody.innerHTML = ''
    users.forEach((user) => {
        const td = `<tr>
                        <td>
                            ${user.name}
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="removeUser(${user.id})">
                                Eliminar
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-warning" onclick="editUserButton(${user.id})">
                                Editar
                            </button>
                        </td>
                    </tr>`
        tableBody.innerHTML += td;
    })
}


function submitUser() {
    console.log(editingUSer)
    if(editingUSer) {
        editUser();
    } else {
        addUser();
    }
}
function editUser() {
    const name = document.getElementById('name').value;
    editingUSer.name = name
    printUsers();
    editingUSer = false;
    document.getElementById('name').value = ''
}
function editUserButton(id) {
    const user = users.find((user) => user.id === id);
    // const user = users[position];
    document.getElementById('name').value = user.name;
    editingUSer = user;
    // console.log(user);
}

function addUser() {
    // .value es el texto que tiene el input
    const name = document.getElementById('name').value;
    // Estas 2 líneas son equivalentes a la de arriba
    // const input = document.getElementById('name');
    // const name = input.value

    // Creo un nuevo usuario que es un objeto
    const newUser = {
        id: users.length + 1,
        name: name
    }
    // Agrego el usuario creado al array que tiene todos los usuarios
    users.push(newUser);
    // imprimo nuevamente a todos los usuarios
    printUsers();

}
function removeUser(id) {

    // console.log(id);
    const position = users.findIndex((user) => user.id === id);
    // console.log(position)
    users.splice(position, 1);
    printUsers();
}


// Ejecuto esta función para que al cargar la página se impriman todos los usuarios del array que tengo actualmente
printUsers();