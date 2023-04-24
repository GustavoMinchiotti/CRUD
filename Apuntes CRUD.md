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















