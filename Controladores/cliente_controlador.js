import { serviciosCliente } from "../service/CLIENT-SERVICE.js" // servicios cliente es el objeto creado en CLIENT-SERVICE para exportar.   

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


serviciosCliente.listaClientes().then((datos) => {
    datos.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email) // en la var uso la func.
        table.appendChild(nuevaLinea);  // agrego la nueva linea
    });
}).catch((error) => alert("Hubo un error"));