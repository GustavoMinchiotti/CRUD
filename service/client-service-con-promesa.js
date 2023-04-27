const crearNuevaLinea = (nombre, email) => {

    const linea = document.createElement('tr'); // creo el elemento "sacado del html"

    const contenido =
        `<td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`

    linea.innerHTML = contenido; // inserto el contenido en el html nuevamente
    return linea; // el retorno de la función
}

const table = document.querySelector("[data-table]")    // recorre el DOM hasta obtener el elemento data-table




//? abrir http recibe 2 parámetros (método y url)
// CRUD     - Métodos HTTP
// Create   - POST
// Read     - GET
// Update   - PUT/PATCH
// Delete   - DELETE

//? Creo la promesa:
const listaClientes = () => {
    const promesa = new Promise((resolve, reject) => { //Trabaja las promesas con Arrow function
        const miHTTP = new XMLHttpRequest();    //* esto crea la conexión con el server
        /* the code is attempting to retrieve data from the server at the specified URL. */
        miHTTP.open("GET", "http://localhost:3000/perfil");

        miHTTP.send();

        miHTTP.onload = () => {
            const response = JSON.parse(miHTTP.response); // debo transformar los datos de string a JSON para que funcione
            if (miHTTP.status >= 400) {
                reject(response);
            }
            else {
                resolve(response)
            }
        }
    })
    return promesa
};

/* This code is using a promise to retrieve data from a server and then using the retrieved data to
create new table rows using the `crearNuevaLinea` function. The `listaClientes()` function returns a
promise that resolves with the retrieved data. The `.then()` method is used to handle the resolved
promise and iterate over the data using a `forEach` loop. For each item in the data, a new table row
is created using the `crearNuevaLinea` function and then appended to the table using the
`appendChild` method. */
listaClientes().then((datos) => {
    datos.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email) // en la var uso la func.
        table.appendChild(nuevaLinea);  // agrego la nueva linea
    });
}).catch((error) => alert("Hubo un error"));

