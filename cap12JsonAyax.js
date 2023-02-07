//HTTPS esun protocolo para el envío de peticiones que enviamos a un servidor, y este nos devuleve una informacion. Nuestro navegador es el cliente, y el servidor es el que tiene nuestra pagina web y porcesa la info.
//estas peticiones se trabajan o administran con ajax, fetch, axios, herramientas que permiten enviar la solicitud y gestionar su respuesta (ver que se hace con la respuesta -info- que envia el servidor)
//antes de ver como se trabaja con esas herramientas tenemos que ver como funcionan los datos estructurados (JSON)

//-----------------------------------------------------------------------------

//Json son datos estructurados (Javascript object notation)

//Json funciona muy parecido a un array asociativo (q son objetos)
//array asociativo:
// objeto = {
//     variable1 : "pedro",            //pedro y jorde son el valor de una propiedad de un objeto cualquiera
//     variable2: "jorge"
// }
// console.log(objeto); //el proto me  va a decir que es un objeto

// //un Json define las propeidades con comillas

// objetoJ = {
//     "variable1" : "pedro",       //pedro y jorde son el valor de una propiedad de un objeto Json
//     "variable2" : "jorge"
// }
// console.log(objetoJ);            //tambien me va a decir que es un objeto. Solo que tiene formato JSON

//--------------------

//cuando enviamos info a un servidor no podemos enviarla sin comillas porque puede traer muchos problemas, para eso se creo json
//enviamos hasta los nombres de variables entre " para que al intercambiar info no surjan problemas.

//Serialización y descerialización:
//cuando decimos q un json esta serializado es que el json es una cadena de texto con formato json. ej:
// const objetoJ = {"variable1" : "pedro", "variable2" : "jorge"};       //ESTO ES UN JSON DESCERIALIZADO.    es = que la L 20 pero todo junto
// console.log(typeof objetoJ)                                     //typeof es un operador q dice el tipo de dato. En este caso dice q es un objeto
// const objetox = '{"variable1" : "pedro", "variable2" : "jorge"}';     //ESTO ES UN JSON SERIALIZADO es una cadena de texto (string) que tiene formato Json
// console.log(typeof objetox)

// //para enviar datos a un servidor tienen que estar serializados, y cuando lo recibimos tambien los recibimos así.

// //con JSON.stringify podemos serializara un objeto (ahora objetoJ está serializado, x eso en la consola figurara como string)
// serializado = JSON.stringify(objetoJ);
// console.log(typeof serializado);

// //cuando recibamos datos serializados vamos a tener que descerializarlos. Se hace asi:
// descerializado = JSON.parse(objetox);            //*le quita el formato string y lo convierte en objeto 
// console.log(typeof descerializado);       

//------------------------------------------------------------------------------
//AYAX
//ayax no lo entendi, pero ya fue reemplazado por FETCH.
//Para hacer solicitudes javascript la gente usa Jquery, que es un libreria grande, pero aca vamos a trabajarlo solo con codigo js nativo. Xq a veces es innecesario descargarse una libreria tan grande para solo hacer una pequeña solcitud al servidor
//ayax significa asincronimus javascript and xml (js asíncrono y xml).
//con http enviamos una solicitud al server y este responde, pero cada vez que el server responde la pagina se actualiza, porque es una operacion sincrona, no se hace en tiempo real. Tenemos q esperar a q el server responda y cuando lo hace se actualiza al pag.
//con ayax se envia la solicitud en paralelo, agarra la respuesta del server, la ejecuta en paralelo, y termina devolviendo la data que buscabamos sin actualizar la pagina.


//Objeto XMLHttpRequest
//es un objeto que se crea así (la variable puede tener cualquier nombre)
// const peticion = new XMLHttpRequest();
// //este es un objeto para peticionar. Vamos a ver los tipos de peticiones GET y POST


// //console.log(peticion)
// //podemos ver que en la pestaña network del navegador se muestra  informacion.txt
// //y en consola, en response y responsetext tenemos los valores que hay en el archivo

// //Se nos va a devolver la info cuando el codigo de respuesta sea 3 o 4 y el status este en 200.

// // peticion.addEventListener("readystatechange", ()=>{
// //     console.log(peticion.readyState);
// //     console.log(peticion.response)
// // })
// // //nos va a mostrar en consola los 4 estados. El primero significa q la solicitud se creo correctamente, la segunda que fue enviada correctamente, la 3 que se esta procesando, y la 4 dice que nos dio una respuesta y el resultado ya se puede utilizar
// // //Por eso, cuando el readyState es 3 o 4 ya devielve la info.
// // //Entonces si queremos obtener la info deberiamos hacer una validacion:
// // peticion.addEventListener("readystatechange", ()=>{
// //     if(peticion.readyState == 4 && peticion.status == 200) {                          //si el estado es 4 se muestra la info en la consola
// //         console.log(peticion.response);
// //         console.log(peticion.status)                        
// //     }
// // })  //asi se hacian antes las validaciones para recibir info del server, luego se hizo así:

// let peticion;
// if (window.XMLHttpRequest){
//      peticion = new XMLHttpRequest();
// }else{
//      peticion = new ActiveXObject("Microsoft.XMLHTTP") //este es el objeto que tenemos que usar cuando estamos en internet explorer
//     }
// //para aplicaciones grandes qeu entran muchos usuarios esta bueno esto porque algun numero pequeño usara internet explorer


// peticion.addEventListener("load", ()=>{
//     let respuesta;
//     if (peticion.status == 200) respuesta = peticion.response;
//     else respuesta = "lo siento, no se ha encontrado el recurso"
//     console.log(JSON.parse(respuesta))      //con JSON.parse lo que hacemos es descerializarlo y convertirlo en un objeto (ya que lo recibimos como string)
// })

// // //hoy en dia se usa fetch, q lo vamso a ver ams adelante. Igualmente ayax sigue siendo util hoy en dia.



// peticion.open("GET", "informacion.txt");     //open es un metodo q abre una peticion, tiene 2 parametros la primera es GET o POST, en este caso vamos a usar GET, y el segundo parametro es la url del lugar al que estamos haciendo la solicitud
// // //si escribiesemos mal el nombre del archivo, saltaria en consola (por haberla invocado en L 76, un error 404, que es que no se encontro la direccion)
// peticion.send();                              //aca se envia la peticion
                    
//Ayax no es soortado por todos los navegadores, para internet explorer tenemos que usar ActiveXObject
//tenemos primero que verigficar que el usuario este usando internet explorer:

//--------------------------------------------------------------------------

//peticiones POST
//aca no se envias los datos por url, no quedan en el historial del navegador
//las peticiones se envian a traves del metodo post justamente

//diferencias entre get y post:
//los datos son visibles en la URL con get, con post no.
//Los datos pueden permanecer en el historial del navegador: con get si, con post no
//Una url ¿puede ser gardada conteniendo parametros de envio de datos?, con get si, con post no. Un parametro de envio de datos es por ej, si tenemos un sitio web que espera a  que alguien le envie una variable para hacer una operacion. Si uso una url que la guardo y la vuelvo a usar, esa puede enviar el parametro. Mientras q con post no podemos volver a  usar una url para ejecutar esa accion 
//Existen restriccion en la longitud de datos  enviados: en post no hay restricciones. Con GET no se peude superar la longitud maxima de una URL (aprox 2000caracteres)
//Se considera preferible para el envio de datos sensibles (contraseñas, n| de tarjetas bancarias, etc): con get no, los datos ademas de ser visibles puede ser almacenados en log. Mientras que con post si (sin que signifique que usando post haya seguridad asegurada, pero es mas seguro, xq si enviamos una contraseña, eso queda en la url, y si alguine entra a nuestro historial x ej puede ver que se envio una contraseña x)
//restricciones de tipos de datos: con get, las url admiten los datos ASC-II, que son los caracteres. Mientras que el post puede admitir cualquier tipo de dato.
//Que se considera preferible para disparar acciones: get no. Post si.
//posibles intentos de hackeo: con get es posible con facilidad, con post tambien pero con menos facilidad.



let peticion;
if (window.XMLHttpRequest){
     peticion = new XMLHttpRequest();
}else{
     peticion = new ActiveXObject("Microsoft.XMLHTTP") 
    }


peticion.addEventListener("load", ()=>{
    let respuesta;
    if (peticion.status == 200) respuesta = peticion.response;
    else respuesta = "lo siento, no se ha encontrado el recurso"
    console.log(JSON.parse(respuesta))      
})

peticion.open("POST", "informacion.txt"); 
peticion.send();  








