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

