import { serviciosCliente } from "../service/CLIENT-SERVICE.js";

const formulario = document.querySelector("[data-form]"); //selecciono al formulario

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const nombre = document.querySelector('[data-nombre  ]').value // luego de seleccionado -- solo quiero acceder al valor
    const email = document.querySelector('[data-email]').value

    serviciosCliente.crearClientes(nombre, email).then(() => {
        window.location.href = "../screens/registro_completado.html"

    }).catch(err => console.log('err'))
});