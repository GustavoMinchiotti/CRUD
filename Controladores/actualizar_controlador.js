import { serviciosCliente } from "../service/CLIENT-SERVICE.js";

const formulario = document.querySelector("[data-form]"); //selecciono al formulario para editar

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if (id === null) {
        window.location.href = "/screens/error.html"
    };

    const nombre = document.querySelector("[data-nombre]"); //selecciono del form
    const email = document.querySelector("[data-email]");

    const perfil = await serviciosCliente.detalleCliente(id)
    nombre.value = perfil.nombre;
    email.value = perfil.email;
};

obtenerInformacion();


formulario.addEventListener("submit", (evento) => { //captura y modifica los campos falta la función para hacer el post en la base de datos
    evento.preventDefault()

    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const nombre = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email]").value
    serviciosCliente.actualizarCliente(nombre, email, id).then(() => {
        window.location.href = "/screens/edicion_concluida.html"
    })
})
