//! este código es de antes de hacer la promesa.

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



const miHTTP = new XMLHttpRequest();    //* esto crea la conexión con el server

//? abrir http recibe 2 parámetros (método y url)
// CRUD     - Métodos HTTP
// Create   - POST
// Read     - GET
// Update   - PUT/PATCH
// Delete   - DELETE

/* the code is attempting to retrieve data from the server at the specified URL. */
miHTTP.open("GET", "http://localhost:3000/perfil");

miHTTP.send();

miHTTP.onload = () => {
    const datos = JSON.parse(miHTTP.response); // debo transformar los datos de string a JSON para que funcione
    datos.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email) // en la var uso la func.  
        table.appendChild(nuevaLinea);  // agrego la nueva linea
    });
}

console.log(miHTTP);

