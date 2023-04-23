const miHTTP = new XMLHttpRequest();

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
    const datos = miHTTP.response;
    console.log(datos);
}


console.log(miHTTP);

