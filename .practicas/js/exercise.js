const users = [
    {
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
// Obtengo el elemento HTML donde quiero agregar nuevo contenido
const tableBody = document.getElementById('table-users-body');
// Obtengo los datos que quiero agregar
// const user0 = users[0];
// const user1 = users[1];
// Armo mi html
// const row = '<tr><td>'+ user0.name +'</td></tr>';
// const row = '<tr><td>'+ users[1].name +'</td></tr>';
// Agrego todo el html al elemento que obtuve en el paso 1
// tableBody.innerHTML = row;

function printUsers() {
    for(let i = 0; i < users.length; i++) {
        const row = '<tr><td>'+users[i].name+'</td><td>' + users[i].email + '</td></tr>'
        tableBody.innerHTML += row;
    }
}

function academloUsers() {
    for(let i = 0; i < users.length; i++) {
        if(users[i].email.endsWith('academlo.com')) {
            const row = '<tr><td>'+users[i].name+'</td><td>' + users[i].email + '</td></tr>'
            tableBody.innerHTML += row;
        }
    }
}
