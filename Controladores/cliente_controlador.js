import { serviciosCliente } from "../service/CLIENT-SERVICE.js" // servicios cliente es el objeto creado en CLIENT-SERVICE para exportar.   

const crearNuevaLinea = (nombre, email, id) => {

    const linea = document.createElement('tr'); // creo el elemento "sacado del html"

    const contenido =
        `<td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html?id=${id}"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"   id="${id}" 
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`

    linea.innerHTML = contenido; // inserto el contenido en el html nuevamente
    const btn = linea.querySelector("button")//capturo el botón
    btn.addEventListener("click", () => {
        const id = btn.id;
        serviciosCliente.eliminarCliente(id).then(respuesta => {
            console.log(respuesta);
        }).catch((err) => alert("ocurrió un error"))
    })
    return linea; // el retorno de la función
}

const table = document.querySelector("[data-table]")    // recorre el DOM hasta obtener el elemento data-table


serviciosCliente.listaClientes().then((datos) => {
    datos.forEach(({ nombre, email, id }) => {
        const nuevaLinea = crearNuevaLinea(nombre, email, id) // en la var uso la func.
        table.appendChild(nuevaLinea);  // agrego la nueva linea
    });
}).catch((err) => alert("Hubo un error"));
