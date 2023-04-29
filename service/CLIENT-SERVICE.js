
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

export const serviciosCliente = {   //  creo este objeto para exportar los distintos controladores
    listaClientes,
    crearClientes,
    eliminarCliente,
};



//* En este archivo lo que nosotros vamos a tener, es esta función que se va a encargar de hacer la comunicación
//* con el servidor, recibir la respuesta y después simplemente generarla en un JSON.