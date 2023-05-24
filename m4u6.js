

// ASYNC AWAIT

const urlApi = `https://jsonplaceholder.typicode.com/users`;


let risultatoUtenti;
async function apiUtenti() {
    try {
        const response = await fetch(urlApi)
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error)
    }
}

apiUtenti().then(data => {
    risultatoUtenti = data;
    addTable(risultatoUtenti)
})



// CREAZIONE DELLA TABELLA E INSERIMENTO DEGLI UTENTI

function addTable(risultatoUtenti) {
    let table = document.querySelector('.table')
    table.innerHTML = `
    <!--Table head-->
    <thead>
    <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Cognome</th>
        <th>Email</th>
        <th>Città</th>
        <th>Telefono</th>
    </tr>
    </thead>
    <!--Table head-->
    `
    let tbody = document.createElement('tbody')
    table.appendChild(tbody)
    risultatoUtenti.forEach((elem, i) => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <th scope="row">${elem.id}</th>
        <td>${elem.name}</td>
        <td>${elem.username}</td>
        <td>${elem.email}</td>
        <td>${elem.address.city}</td>
        <td>${elem.phone}</td>
        `
        tbody.appendChild(tr)
    });
}