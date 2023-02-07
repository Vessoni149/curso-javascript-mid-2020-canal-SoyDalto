//un CallBack es un tipo de funcion, es una funcion dentro de otra funcion. Hay 2 formas, en funcion normal y en flecha

function callback(){            //aca creamos el callback que va a ser el parametro de una funcion, que es tmb una funcion.
    console.log("yo soy un callback");
}


function mensaje(fn){            //creamos la funcion mmensaje, y en el parametro le pasamos una funcion, que puede tener cualquier nombre, callback, o fn como abreviacion de funcion.
    fn();                        //Solo hay que saber que lo que esta entre () es un callback (1 funcion). Para ejecutar esa funcion callback solo escribimos su nombre y ().
}

mensaje(callback);              //utilizamos la funcion llamada callback como parametro de la funcion llamada mensaje

//el programa va a ejecutar la funcion mensaje (L12), y esa funcion esta recibiendo como patrametro una funcion, que en ESTE caso, seria la fucion "callback" 
//La funcion mensaje (L8) tiene en parametro una funcion ("fn"), que se ejecuta en L9. Esa función que se va a ejecutar es determinada al momento de llamar la funcion (L12)
//ahora bien, la función que se estaria ejecutando en L9 va a ser la funcion "callback", porque asi lo dijimos en L 12. y esa función "callback" es un console.log
//entonces en L9 basicament estamos ejecutando otra funcion. Que es este caso es "callback".
//En la funcion "mensaje" solo decimos que ejecute otra funcion (L9). Est, visto aisltadamente no tendría sentido, ya veremos para que sirve.


//ver este video: https://www.youtube.com/watch?v=DaXuPcdKqQ4

//Veamos otro ejemplo:

// function decirNombre(x){        //esta sera la función callback. Observese que ahora sí se le pasa un parámetro, que luego tmb se repite abajo como parametro del console.log
//     console.log(x)
// }

// function prueba(a){      //se pasa como parametro un nombre random p una funcion, que abajo se va a ejecutar (xq es un funcion)
//     a("pedro");           //se ejecuta esa funcion "a" pasada como parametro, que a su vez tiene como parametro un string "pedro", que se ejecuta pero no se muestra en ningun lado. Este parametro
                            //sera usado por la funciòn cb "decirNombre" ya que "a" es una función que no hace nada, es una referencia.
// }

// prueba(decirNombre);            // La funcion prueba va a ejecutar la función decirNombre, con el parámetro "pedro".


// //otra forma de hacer esto es:

// prueba(function decirNombre(nombre){        //aca se esta creando a la funcion preba que tiene como parametro la funcion decirNombre, que está siendo creada acá mismo y tiene como parámetro "nombre"
//     console.log(nombre)
// })

// //otra forma:

// prueba(function (nombre){        
//     console.log(nombre)
// })

// //tambien la podemos hacer flecha:

// prueba((nombre)=>{        
//     console.log(nombre)
// })

// //Ademas, como es una funcion flecha con un solo parametro (que es una funcion), podemos hacer esto:

// prueba(nombre=> console.log(nombre))

//------------------------------------------------------

// class Persona {
//     constructor(nombre,instagram){
//         this.nombre = nombre;
//         this.instagram = instagram;
//     }
// }
// console.log(new Persona("lucas dalto","@soydalto")) asi creamos una sola persona

//si quisieramos crear muchas personas podemos hacer arrays dentro de un array:
// const data = [
//     ["Lucas Dalto", "@soydalto"],
//     ["robertico", "@robertico"],
//     ["RancioRamirez", "@RancioRamirez"],
//     ["Camila Nesa", ]
// ];

// const personas = [];

// for (var i = 0; i < data.length; i++) {
//     personas[i] = new Persona(data[i][0], data[i][1]);          //Así se recorre un arrai dentro de otro arrai. i es cada array dentro del array "data". Así le decimos que acceda al indice 0 y 1 de data (es decir al nombre y al instragram). Son las posiciones dentro del array
// }                                                                //con este bucle creamos a las 4 personas.
// // console.log(personas);

// // console.log(personas[0])        //esto llama al primer array dentro del array padre. Ahora, si queremos conocer un elemento del array hijo podemos hacer lo siguiente:
// // console.log(personas[0].nombre);


// //vamos a crear una funcion que nos devuelva un nombre. No un metodo (funcion dentro de class), sino una funcion afuera de la clase.

// const obtenerPersona = (id,cb)=>{
//     if(personas[id] == undefined){
//         cb("no se ha encontrado la persona")             //si el nombre de la persona esta indefinido se va ejecutar el cb con un solo parámetro, que será esa string que representa el error, esto se entiende al ver
//     } else {                                             //la creación del cb (L 107), donde se indica que el 1er parámetro sera el error, y como en este caso solo le damos un parámetro, se va a ejecutar el mismo, q es el err
//         cb(null, personas[id],id)                        //sino, osea si el id está definido, el primer parametro será null, para que no se ejecute el mismo (que es err), y los otros 2 parametros sí se ejecuratán
//     }
// }

// const obtenerInstagram = (id,cb)=>{
//     if(personas[id].instagram == undefined){
//         cb("no se ha encontrado el instagram")
//     } else {
//         cb(null, personas[id].instagram)
//     }
// }


// obtenerPersona(0,(err,persona,id)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(persona.nombre);
//         obtenerInstagram(id,(err,instagram)=>{
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(instagram);
//             } 
//         })
//     }
// })

//lo que estamos haciendo aca arriba es: en caso de encontrar a la persona: x, y en caso de no encontrarla:y / en caso de encontrar el instagra: x y en caso de que no: y
//Si tuvieremeos que agregar otro dato al raay como por ej seguidores de instagram, tendriamos que agragar mas if y else,
//para evitar tanto uso de if y else que hacen ilegible el codigo, se usan las promesas.


//------------------------------------------------------------------------------

//las promesas son un objeto que adentro tienen 2 callbacks, reject y resolve. A su vez representan algo. uno la terminación de una operacion asíncrona y otro el fracaso de una operación asíncrona


// let nombre = "pedrox";
// const promesa = new Promise((resolve,reject)=>{                                         //se esta creando un objeto y pasandole como parametro constructor una funcion flecha
//                                                                             //es una funcion (un objeto) que tiene un callback que llama a otros 2 callbacks, a la cual le vamos a asignar una constante "promesa"
// if (nombre !== "pedro") reject("lo sineto, el nombre no es pedro");
// else resolve(nombre);
// })

// console.log(promesa);                                                         //no me dice que es un objeto. Es una promesa, que es un objeto en si, pero tiene los datos encapsulados, ej:
// console.log(promesa.nombre);                                                    //va a tirar undefined

// //para acceder a los datos encapsulados:                     //aca estamos ejecutando la función promesa con el .then para desencapsular datos, y como parametro le pasamos una función flecha, que la creamos aca mismo
// promesa.then((resultado)=>{                                  //then es un metodo que tienen las promesas que nos  accede al valor que tiene resolve
//     console.log(resultado)                                  //el parametro resultado podria tener cualquier nombre, solo es para llamar a promesa.then
// }).catch((e)=>{
//     console.log(e)
// })                                             
//el then es para que, cuando sale todo bien muestre el resolve. Pero si algo sale mal y se ejecuta el rejet, para acceder a su valor, usamos catch.
//como le cambie el nombre pedro a pedrox, se va a ejecutar el catch y va a lanzar el valor del reject

//---------------------------------------------------------------------------------------------

// class Persona {
//     constructor(nombre,instagram){
//         this.nombre = nombre;
//         this.instagram = instagram;
//     }
// }

// const data = [
//     ["Lucas Dalto", "@soydalto"],
//     ["robertico", "@robertico"],
//     ["RancioRamirez", "@RancioRamirez"],
//     ["Camila Nesa", ]
// ];

// const personas = [];

// for (var i = 0; i < data.length; i++) {
//     personas[i] = new Persona(data[i][0], data[i][1]);          
// }                                                               

// const obtenerPersona = (id)=>{                              //esta funcion es una funcion que lo que hace es retornar una promesa, 
//    return new Promise((resolve,reject)=>{                   //que en caso de que el id exista, nos va a devolver los datos de la persona
//        if (personas[id] == undefined) reject("No se ha encontrado la persona");  //en caso de que no exista, no la encuentra. Persona es un objeto con 2 propeidades, instagram y nombre.
//         else {resolve(personas[id])}                            //si la encuentra nos devuelve el objeto con la persona      
       
//    })
// }

// const obtenerInstagram = (id)=>{                            //esta funcion nos retorna otra promesa. si tiene IG lo retorna, sino tira un error diciendo que no tiene IG
//     return new Promise((resolve,reject)=>{
//         if (personas[id].instagram == undefined) reject("No se ha encontrado el instagram");
//         else {resolve(personas[id].instagram)} 
//     })
// }

// let id = 2;                            //aca cambiando de id vamos a estar cambiando el array del array data
// obtenerPersona(id).then((persona)=>{   //aca ejecutamos una funcion llamada "obtenerPersona", y estamos pasando como parametro id. Además, usamos .then para acceder al valor del resolve, y "persona" viene a representar -xq puede tener cualquier nombre- el parametro del resolve dado en la linea 176 (personas[id]), "personas" esta definido en L 170 .
// console.log(persona.nombre)             //si existe la persona se muestra el nombre. Acá a persona le ponemos .nombre, pero vemos q mas abajo a instagram lo ponemos solo(L 194), esto porque a intragram en L 184 ya le pusimos .instagram, en cambio a persona, en L 176 no.
// return obtenerInstagram(id);            //luego retornamos la promesa para que obtenga instagram, que al retornar una promesa, al lado le ponemos otro .then para que devuelva el valor desencapsulado (observar que los parénteiss se abren en el primer then y se cierran antes del segundo then)
// }).then((instagram)=>{                  //como es una promesa, para acceder al valor tenemos que usar un then. Y con then(instagram) accedemos al valor de IG dado en linea 184.
//     console.log(instagram)               
// }).catch((e)=>{                         //Y si tira un error lo manejamos con un catch.
//    console.log(e)
// })                                       //podemos tener muchos .then, y manejar todos los errores con un solo cath
//min 5.30.25 explica el resumen de lo que se hizo en este punto.    











