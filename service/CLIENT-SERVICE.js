
//? abrir http recibe 2 parámetros (método y url)
// CRUD     - Métodos HTTP
// Create   - POST
// Read     - GET
// Update   - PUT/PATCH
// Delete   - DELETE

//? Creo la promesa, .then la recibe y la convierte en .json

const listaClientes = () => fetch('http://localhost:3000/perfil').then(respuesta => respuesta.json());

export const serviciosCliente = {   //  creo este objeto para exportar los distintos controladores
    listaClientes
};


//* En este archivo lo que nosotros vamos a tener, es esta función que se va a encargar de hacer la comunicación
//* con el servidor, recibir la respuesta y después simplemente generarla en un JSON.