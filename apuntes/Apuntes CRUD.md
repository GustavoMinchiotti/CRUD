# CRUD

## Exhibiendo datos #1

Con la carpeta de la clase descargada vamos a simular una base de datos.

Voy al navegador y abro <https://www.npmjs.com/package/json-server> luego copio el comando de instalación provisto en la pagina.

`npm install -g json-server` para instalarlo a través de la terminal.

Tenemos la palabra install, que hace referencia a que se instale y nuestra flag o una opción que es -g. En este caso es 
para que lo pueda instalar de manera global. Y por último tenemos el nombre de nuestro paquete o librería, que se llama 
json-server. Le voy a dar entonces aquí enter, voy a esperar a que descargue todas las dependencias o todo el código que
necesita para poder ejecutar y te veo cuando termine de hacer la instalación.

Con el comando `json-server` verifico que está instalado.

Para iniciar el servidor uso el comando: `json-server --watch db.json` *db.json* es uno de los archivos provistos.

![img.png](img.png)

Luego abro la dirección que generó ya sea copiando y pegando en el navegador o con ctrl + click en Vscode

http://localhost:3000/perfil

![img_1.png](img_1.png)

![img_2.png](img_2.png)

NO CERRAR LA TERMINAL

Descargue la extensión chrome json formatter.

**Ver curso de HTTP**

### AJAX Asynchronous JavaScript and XML

para comenzar creo la carpeta `service` y dentro el archivo `CLIENT-SERVICE.js`. Luego lo conecto desde el html.

![img_3.png](img_3.png)

Compruebo la comunicación

![img_4.png](img_4.png)

Creo una request

![img_6.png](img_6.png)

![img_7.png](img_7.png)

El resultado es una nueva instancia de la clase HTTPrequest con varios métodos

![img_8.png](img_8.png) _Busco respuesta del servidor_

_Verifico la respuesta_

![img_9.png](img_9.png) 

### Creando templates

Creo un, `template` con el código HTML para generar en Js. los campos del formulario.

corté la seccion de html que creaba al usuario y creé en Js una función que lo genere desde ahí.

![img_10.png](img_10.png)

En este paso puedo borrar las etiquetas `tr` porque ya indico que lo genere, y hago dinámicos los campos 
Email y nombre queda así:

![img_11.png](img_11.png)

#### Ahora modifico a `miHTTP`

![img_12.png](img_12.png)

Esto va a dar un error:

![img_13.png](img_13.png) 

Porque estamos usando un método de arrays y no lo ve como código sino como una string entonces lo debo transformar.

![img_14.png](img_14.png)

![img_15.png](img_15.png)

### Lidiando con Promises

El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

Una Promesa (Promise) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite 
asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona.

Modifico el código para que sea una promesa.

![img_16.png](img_16.png)

llamo a la promesa

![img_18.png](img_18.png)

![img_19.png](img_19.png)

### Reescribiendo con Fetch API

La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones 
y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener 
recursos de forma asíncrona por la red.

fetch toma automáticamente el método GET

Este ejemplo reduce mucho las líneas de código

![img_20.png](img_20.png)

Y puede ser reducido a esto porque al ser funciones simples podemos eliminar las llaves y el return.

![img_21.png](img_21.png)

### Refactorizando responsabilidades

Los cambios son muchos, creo un archivo separado para el manejo del html, desde el JS principal (CLIENT-SERVICE) exporto 
ahora al nuevo archivo cliente_controlador, por esa razón debo modificar en el html la ruta y decir que ahora son tipo modulos

![img_22.png](img_22.png)

En el nuevo controlador comunico a través de, `serviciosCliente.` a la función que obtiene datos para rellenar los 
campos de la tabla con el objeto nuevo

![img_23.png](img_23.png)

### Event Loop

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

## Creando un cliente

Creo un módulo para crear los nuevos registros y lo conecto al html `registrar cliente`.

![img_24.png](img_24.png)

Necesito escuchar el submit .. Ahora vamos a tener nuestra constante formulario y nosotros podemos ya tener disponibles 
diferentes métodos. El que queremos es addEventListener, es decir agregar un escuchador. Recibe aquí dos parámetros. 
El primero es el tipo de evento que quiere escuchar, que en este caso va a ser submit y el segundo, una función que se 
va a disparar una vez que el usuario o que se cumpla esta condición.

![img_25.png](img_25.png)

Los formularios tienen un comportamiento _ya definido dentro de JavaScript_ o dentro del navegador. 
Lo que nosotros queremos es prevenir que funcione como ya está definido. Para eso, nosotros aquí recibimos nuestro 
evento.

Dentro de este evento tenemos una propiedad que se llama `.preventDefault` y lo mandamos a llamar. Es decir, no queremos
que este formulario funcione como normalmente debería. Para eso, vamos a utilizar este método. Ahora, ya tenemos nuestro
evento. Esta función que se mandó a llamar.

![img_26.png](img_26.png)

Para recuperar los datos en este caso usamos los `data-attributes` ![img_27.png](img_27.png) 

Solo queremos el valor así que agregamos `.value`

![img_29.png](img_29.png)

![img_28.png](img_28.png)

Ya tenemos capturada la información, ahora necesitamos delegar la responsabilidad a otra función que
reciba esos datos y que se encargue de enviárselos a nuestro servidor o a nuestra API.

en el archivo `CLIENT-SERVICE` creo la función y le paso los parámetros nombre y mail - 

**Muy importante No debo usar `get` que está por defecto** necesito usar POST

Vamos a ver entonces cómo es que podemos decir la **fetch** que trabaje con otro método.
 
Primero va a recibir la URL a la cual se va a conectar y después va a recibir un segundo parámetro, que va a ser un _**objeto.**_ 
En este objeto vamos a definir las demás propiedades de la llamada. Nosotros vamos a decir aquí cuál va a ser el método 
o method: Que será POST Después, dentro de este mismo objeto, vamos a definirle los _encabezados_. 
Estos encabezados son como para tener un estándar o que el servidor sepa qué tipo de archivo es el que va a recibir. 
Vamos a poner entonces es headers y va a ser un nuevo objeto, y dentro de este objeto, vamos a definir el Content-Type. 
A este Content-Type le vamos a decir que va a ser un "application/json".

![img_30.png](img_30.png)

Por último le vamos a definir también cuál va a ser el body o el cuerpo, que al final de cuenta termina siendo un objeto. 
En este objeto es donde nosotros vamos a poner toda la información que nosotros queremos que se envíe a través del cuerpo 
de la petición. Entonces vamos a poner que queremos el nombre y el correo electrónico. 
La comunicación http trabaja con texto, lo que necesitamos ahora es transformar este objeto en texto.

Utilizando JSON.stringify  Entonces lo que le estamos mandando aquí ya es un objeto, pero JSON.stringify se va a encargar 
de formatearlo en texto para que lo pueda enviar http. 

![img_31.png](img_31.png)

Antes de probar todo esto, es si nosotros venimos aquí a nuestro db.json, tenemos tanto el nombre, el correo electrónico y el `id.`
para simplificar usamos una librería -- UUID CDN -- https://cdnjs.com/libraries?q=uuid

No la instalo sino que la agrego via link al html.

![img_33.png](img_33.png)

Puedo acceder al método desde la consola: escribiendo uuid

![img_34.png](img_34.png)

usamos la version 4 con esta sintaxis: `uuid.v4()` + enter y cada vez que lo use genera un ID nuevo.

![img_35.png](img_35.png)

 Así lo uso

![img_36.png](img_36.png)

Ahora lo debo exportar: 

![img_38.png](img_38.png)

Lo importo en registro-controlador:

![img_37.png](img_37.png)

![img_39.png](img_39.png)

En el controlador de registros queda así: 

![img_40.png](img_40.png)

Esta es la respuesta:

![img_41.png](img_41.png)

Y todo esto generó un nuevo usuario en la base de datos:

![img_42.png](img_42.png)

Para mejorar la experiencia de usuario lo redirijo a la página de registro completado:

![img_43.png](img_43.png)

Queda esto luego de completar

![img_44.png](img_44.png)

### Borrar clientes

https://app.aluracursos.com/course/js-web-crud-javascript-asincrono/task/77103

En esta clase hace un refactor del código:

![img_45.png](img_45.png)

Cambia a este

![img_46.png](img_46.png) trata como un objeto a los datos / parámetros

Creo función para borrar clientes, en `cliente-controlador` dentro de la func. `crear nueva linea` selecciono el botón 
**Hay uno solo!!** porque edit aunque en pantalla parezca un botón es un `<a>`.

Luego lo escucho.

![img_47.png](img_47.png)

Ahora que escucho el botón debo ir al backend y crear una nueva función para la lógica de borrar

![img_48.png](img_48.png) son backticks no comilla

De vuelta en cliente controlador termina el código

![img_49.png](img_49.png)


Lo que aprendimos en esta aula:

* Usar el método closest para encontrar el elemento del DOM más próximo al cual queremos remover.
* Crear un cliente utilizando el verbo http POST.
* Remover un elemento del dom con el método remove().
* Borrar un cliente utilizando el verbo http DELETE.

## Editar datos

Para editar datos primero debo identificar a cual cliente estoy editando, entonces en la etiqueta `<a>` en la ruta le 
agrego: `?${id}` 

![img_50.png](img_50.png)

se puede ver en el navegador: 

![img_51.png](img_51.png) -- ![img_52.png](img_52.png)

Para poder trabajar con esos parámetros le ponemos nombre: `? id = ${id}` **¡para que funcione se escribe todo junto esto es solo ejemplo!**

![img_53.png](img_53.png)

Luego de hacer el link desde html al script de actualizar_controlador creo una const : `const url = new URL(window.location)`
con este resultado:

![img_54.png](img_54.png)

![img_55.png](img_55.png) Busca el parámetro en este caso id

![img_56.png](img_56.png)

Creo la función para obtener los datos

![img_58.png](img_58.png)

![img_60.png](img_60.png)

resultado

![img_61.png](img_61.png)

Lo que necesitamos hacer es indicarle a este formulario cuál es el nombre y que lo autocomplete con nombre, y el email

![img_62.png](img_62.png)

### Editando (No entendí)

![img_63.png](img_63.png)

![img_64.png](img_64.png)

![img_65.png](img_65.png)

### Async await

Código mejorado:

![img_66.png](img_66.png)




























