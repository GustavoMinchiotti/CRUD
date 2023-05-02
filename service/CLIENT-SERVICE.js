
//? abrir http recibe 2 parámetros (método y url)
// CRUD     - Métodos HTTP
// Create   - POST
// Read     - GET
// Update   - PUT/PATCH
// Delete   - DELETE

//? Creo la promesa, .then la recibe y la convierte en .json

const listaClientes = () => fetch('http://localhost:3000/perfil').then(respuesta => respuesta.json());

const crearClientes = (nombre, email) => {
    return fetch('http://localhost:3000/perfil', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }) // parsea la info a string -- con uuid.v4() genero los Id
    });
}

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",

    })
}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
}

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({ nombre, email })
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
}

export const serviciosCliente = {   //  creo este objeto para exportar los distintos controladores
    listaClientes,
    crearClientes,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};



//* En este archivo lo que nosotros vamos a tener, es esta función que se va a encargar de hacer la comunicación
//* con el servidor, recibir la respuesta y después simplemente generarla en un JSON.