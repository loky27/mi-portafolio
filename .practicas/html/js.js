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


let editingUser =false;
function printUsers() {
	const tableBody = document.getElementById(
		"user-table-bodyy"
	);
	tableBody.innerHTML = ''
	users.forEach((user) => {
		const td = `<tr>
                        <td>
                        ${user.name}
						</td>
						<td>
						${user.gender}
						</td>
						<td>
							<button class="btn btn-danger" onclick="removeUser(${user.id})"> 
								Eliminar 
							</button>
						</td>
						<td>
							<button class="btn btn-danger" onclick="editUserButon(${user.id})"> 
								Editar
							</button>
						</td>
					</tr>`;
					//user.id es para encontrar el identificador unico del elemento 
								   //'${user.name}' es para buscaarlo por nombre
		tableBody.innerHTML += td;
	});
}
function submitUser(){
	if(editingUser){
		editUser();
	}
	else{
		addUser();
	}
}
function editUser(){
	const name= document.getElementById('name').value
	editingUser.name = name
	printUsers();
	editingUser=false;
	document.getElementById('name').value =''
}
function editUserButon(id){
	const user = users.find((user) => user.id === id );
	document.getElementById('name').value = user.name;
	editingUser = user;
}
//esta parte e para agregar usuarios
function addUser() {
	//const tableBody = document.getElementById(
	//	"user-table-bodyy"
	//);
	const name = document.getElementById("name").value;
	//event.preventDefault(); //esta parte previene el refres de la pagina desde el js 

	const newUser ={id: users.length+1,name: name}
	users.push(newUser) //estas tres lineas lo que hacen es crear un nuevo objeto
	printUsers(); //esta linea imprime usuarios
}
//function removeUser(name){
	//esto es para buscar y eleminar por nombre
	//const position=users.findIndex((user)=>user.name === name);//listo los elementos y de vuelvo la pocion del elemneto deseado
	//users.splice(position,1)//indicual elemento deseo eliminar
	//printUsers();//pinto los usuarios del array completo

//}
function removeUser(id){
	//esto es para eleminar mediante el id 
	const position =users.findIndex((user)=> user.id ===id);
	users.splice(position,1);
	printUsers();
}

printUsers();
