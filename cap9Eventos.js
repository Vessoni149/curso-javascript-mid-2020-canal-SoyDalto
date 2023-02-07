const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor1");
const contenedor2 = document.querySelector(".contenedor2");

// button.addEventListener("click", saludar);      //aca se pone el evento como primer parametro y lo que sucedera en el segundo, en este caso una funcion que no puede ser flecha

// function saludar() {                            //la funcion del addEventListener no acepta parametros, y no puede ser flecha, debe ser comun. Salvo: linea 12
//     alert("hola");                              
//      button.removeEventListener("click", saludar);  //para que el alert salga una sola vez se puede poner esto, que remnueve el evento
// }
 
// //salvo que este redactada asi (se agrega el evento y se crea la funcion flecha en el 2do parametro):
//aca en el parametro de la funcion flecha, esta "e" para referirnos a evento
// button.addEventListener("click", (e)=>{           //se le puede pasar parametro, se suele poner e o evt de evento, pero siempre es el evento (que tmb es un objeto), lleve el nombre que lleve, siempre se va a referir al evento. POR DEFECTO SIEMPRE VA A SER EL OBJERO EVENT
//    console.log(e);                                //nos va a decir que tipo de evento es, en este caso click, y nos va a mostrar en consola todas las propiedades del evento click. y se puede poner evento.propiedad para ver una en especifico, sino en el navegador nos muestra todas.
// })

//flujo de eventos.
//refiere al orden en el que se van a ejecutar los eventos.

//veremos que normalmente se ejecutan del objeto mas específico al mas abarcativo.

// contenedor1.addEventListener("click", (e)=>{
//     alert("di clik en el contenedor rojo")
// },true);                                                    //para cambiar el orden de ejecución le damos true al que queremos que suceda primero

// contenedor2.addEventListener("click", (e)=>{
//     alert("di clik en el contenedor azul")
// });

// button.addEventListener("click", (e)=>{
//     alert("di clik en el boton");
//     e.stopPropagation();                                   //stopPropagation es un metodo del objeto evento (llamado en este caso "e")
                                                             //para que una vez sucedido el evento, dejen de suceder los eventos asociados que le siguen, en este caso el alert de div azul
                                                             //con evento asociado me refiero a otros "e"
// })


//eventos del mouse
//click ya lo vimos
//double click:

// contenedor2.addEventListener("dblclick", (e)=>{
//     alert("di  2 cliks en el contenedor azul")
// });

// contenedor1.addEventListener("mouseover", (e)=>{            //sucede caundo el mause entra o sale del elemento o del delemento secundario (hijo)
//     alert("di clik en el contenedor rojo")
// });


// contenedor1.addEventListener("mouseout", (e)=>{            //sucede caundo el mause se mueve fuera de un elemento o de sus elementos secundarios (hijos)
//     alert("di clik en el contenedor rojo")
// });


// contenedor1.addEventListener("contextmenu", (e)=>{             //ocurre cuando damos clik derecho. cuando aprieto y suelto, no basta solo con apretar.
//     alert("di clik en el contenedor rojo")
// });

//luego tenemos mouseenter, mouseleave (cuando entra y sale del elemento).No tiene en cuenta los hijos
//mouseup, mousedown: cuando haces click y cuando desckileas. el primero se ejecuta solo cn apretar y sin soltar, el segundo solo se ejecuta si se suelta en el elemento con el evento.



//eventos del teclado:

const input = document.querySelector(".input-prueba");     

// input.addEventListener("keydown", (e)=>{                     //cuando se presiona en un elemento
//     console.log("una tecla fue presionada");
// })

// input.addEventListener("keypress", (e)=>{                     //cuando se presiona y se suelta en el mismo elemento
//     console.log("un usuario presiono una tecl y la solto");
// })

// input.addEventListener("keyup", (e)=>{                      //cuando se suelta en un elemento.
//     console.log("una tecla fue soltada");
// })


//eventos de la interfaz.

// const img = document.querySelector(".img-prueba");

// img.addEventListener("error",()=> {                             //cuando pausamos la carga antes de que se cargue la img en el navegador va a saltar este mensaje
//     console.log("ha sucedido un error");
// })

// window.addEventListener("load",()=> {                               //solo funciona con el objeto window, xq load es un evento del objeto window, que ni siquiera requiere ser llamado, con solo addEventListener funcionaria.
//     console.log("ha cargado el sitio");                             //es el evento de cuando termina de cargar el sitio.
// })

// addEventListener("beforeunload",()=> {                              //este evento sucede justo antes de irse a otro sitio, de cargar otra direccion.    
//     console.log("te estas por ir del sitio");                             
// })


// addEventListener("resize",()=> {                             
//     console.log("se ha actualizado la resolución");                         //cuando moves la resolución de la ventana.         
// })

//scroll        cuando se scrolea.


//select es el evento de seleccionar.
const input2 = document.querySelector(".input-prueba2"); 
const contenedor = document.querySelector(".seleccionado");
// input2.addEventListener("select",(e)=> {                      //se aplica al input o al text area       
//     let start = e.target.selectionStart;                       //e es el evento, target es lo que tenemos que preseleccionar para poder seleccionar "selectionSart / End"
//     let end = e.target.selectionEnd;                           //las variables start y end van a ser = a desde donde empieza la seleccion ahsta donde termina.
//     let textoCompleto = input2.value;                          //la variable textoCompleto va a ser = a el valor del imput2, es decir lo que este escrito en el input
//     contenedor.innerHTML = textoCompleto.substring(start,end);  //La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Lo apropiado 
//                                                              acá sería usar textContent para q devuelva el nodo texto que está dentro del input. substring devuelve los caracteres que le indiquemosentre parámetros.
                                                                     //Y en este caso lo que hará es escribir el texto del input pero por tener en parametros start y end, solo lo seleccionado.                                         
    
    
                                             
// })                                                          //podemos ir a la consola, al path, input, y bajar hasta la s, nos dice selection start y end, que es desde donde empezo a 
                                                                //seleccionay y hasta donde
       

input2.addEventListener("keyup",(e)=> {                        
    let tecla = e.key;
    nuevoContenido = `la ultima tecla presionada fue ${tecla}`;
    contenedor.innerHTML= nuevoContenido
})


 //PARA VER TODO LO QUE SE PUEDE HACER CON UN EVENTO BASTA CON PONER  CONSOLE.LOG A LA E.

input2.addEventListener("keydown", (e)=>{
    console.log(e);
})

//TEMPORIZADORES.
//consumen mucho recurso asique no es recomendado usarlo demasiado.

const temporizador = setTimeout (()=>{                   //Despues de cierto tiempo se ejecuta la funcion. Recibe 2 parametros, una funcion y un tiempo en milisegundos, x eso la coma entre la
                                                         // funcion y el 2000. Es buena idea asignar esto a una variable para despues poder hacer que no se ejecute con setTimeout
    document.write("hola");
},2000)

//otra forma de hacerlo es:

// const saludar = ()=>{
//     document.write("hola");
// },

//setTimeout(saludar,2000);         //se usa el setTimeout y se crea la funcion por fuera

//para que no se ejecute el temporizador:
 clearTimeout(temporizador);


 //para ejecutar una funcion constantemente, cada x segundos:

 const intervalo = setInterval(()=>{
     document.write("hola")
 },2000)
//para detenerlo hay que ir a la consola y poner clearInterval(intervalo) o:
setTimeout(()=>{
    clearInterval(intervalo);
},5000)

 
