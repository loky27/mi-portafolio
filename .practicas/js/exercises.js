import users from "./users.js";

// Obtengo el elemento HTML donde quiero agregar nuevo contenido
const tableBody = document.getElementById(
	"table-users-body"
);
// Obtengo los datos que quiero agregar
// const user0 = users[0];
// const user1 = users[1];
// Armo mi html
// const row = '<tr><td>'+ user0.name +'</td></tr>';
// const row = '<tr><td>'+ users[1].name +'</td></tr>';
// Agrego todo el html al elemento que obtuve en el paso 1
// tableBody.innerHTML = row;

function printUsers() {
	tableBody.innerHTML = "";
	for (let i = 0; i < users.length; i++) {
		const row =
			"<tr><td>" +
			users[i].name +
			"</td><td>" +
			users[i].email +
			"</td><td>" +
			users[i].age +
			"</td></tr>";
		tableBody.innerHTML += row;
	}
}

function printAcademloUsers() {
	tableBody.innerHTML = "";
	for (let i = 0; i < users.length; i++) {
		if (users[i].email.endsWith("academlo.com")) {
			const row =
				"<tr><td>" +
				users[i].name +
				"</td><td>" +
				users[i].email +
				"</td><td>" +
				users[i].age +
				"</td></tr>";
			tableBody.innerHTML += row;
		}
	}
}

// Crear una tabla que muestre a las personas en rango de 20 y 40 años

function printPersons() {
	tableBody.innerHTML = "";
	// tableBody.innerHTML = ''
	for (let i = 0; i < users.length; i++) {
		if (
			users[i].age >= 20 &&
			users[i].age <= 40
		) {
			// const row = '<tr><td>'+users[i].name+'</td><td>' + users[i].email + '</td><td>' + users[i].age + '</td></tr>'
			const row = `<tr>
                            <td>${users[i].name}</td>
                            <td>${users[i].email}</td>
                            <td>${users[i].age}</td>
                        </tr>`;
			tableBody.innerHTML += row;
		}
	}
}

function printInfoUsers() {
	const usersInfo = document.getElementById(
		"users-info"
	);

	for (let i = 0; i < users.length; i++) {
		usersInfo.innerHTML +=
			'<div class="card"><div class="card-body">This is some text within a card body.</div></div>';
		let social = users[i].social; // -> esto es un array
		for (let j = 0; j < social.length; j++) {
			console.log(social[j].url); //-> esto es cada objeto dentro de social
		}
	}
}
// sprintInfoUsers();
window.printPersons = printPersons;
window.printInfoUsers = printInfoUsers;
