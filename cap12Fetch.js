//Fetch es el nombre de una nueva API para Javascript con la cuál podemos realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo.
//esta todo basado en promesas. Fetch nos devielve la respuesta siempre en forma de una promesa encapsulada.
//tenemos q usar ciertos metodos para convertir ese resultado a un tipo de dato que nos sirva.

//JSON: 
//
//El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON, o lo que es lo mismo, un json serializado.
//por otro lado, con json.parse(x) convertimos x de un objeto json a un objeto js. Es decir, deserializamos.
//el resumen: con json.stringify() serializamos, con json.parse() deserializamos.
//por otra parte respuesta.json() es asincrónico y devuelve un Promise objeto que se resuelve en un objeto JavaScript con .then(). Y JSON.parse() es sincrónico y convierte un objeto o valor de js a texto en formato json.


peticion = fetch("https://reqres.in/api/unknow/2");  //no hace falta poner "GET", lo tiene por defecto. Salvo que le pongamos otro metodo, pero en fetch el metodo va como segundo parametro, no como primer, como en xmlhttprequest.
//con fetch nos ahorramos todo esto:

// let peticion;
// if (window.XMLHttpRequest){
//      peticion = new XMLHttpRequest();
// }else{
//      peticion = new ActiveXObject("Microsoft.XMLHTTP") 
//     }
//peticion.open("POST", "https://reqres.in/api/unknow/2");


// peticion.then(res=>console.log(res));   //esto devuelve la peticion desencapsulada, pero en formato Json, ahora vamos a ver metodos para transformar ese json en una respuesta cuyos datos se lean mejor.
peticion
    .then(res=>res.json())                  //.then devuelve la promesa desencapsulada y con el metodo .text() nos devuelve  los datos en formato texto pero se vuelve a encapsular. Para desencapsularla nuevamente usamos .then():
    .then(res=>console.log(res));

//si quisieramos obtener un Json:
peticion2 = fetch("https://reqres.in/api/unknow/2");
peticion2
    .then(res=>res.json())          //decir ".json" es como decir "JSON.parse(res)"         
    .then(res=>console.log(res));    //con el typeof nos va a decir que es un objeto, ya que json es un objeto




// -----------------         RESUMEN PETICION GET CON FETCH:
peticion1Estado1 = fetch("https://reqres.in/api/users?page=2")
console.log(peticion1Estado1)
//devuelve una promesa ENCAPSULADA.


peticion2Estado1 = fetch("https://reqres.in/api/users?page=2")
peticion2Estado2 = peticion2Estado1.then(res => console.log(res));
//devuelve la promesa desencapsulada pero en formato JSON "response", no podemos acceder a su cuerpo.


peticion3Estado1 = fetch("https://reqres.in/api/users?page=2")
peticion3Estado3 = peticion3Estado1.then(res => res.json());
console.log(peticion3Estado3);
//devuelve la promesa transformada de json a OBJETO JS pero ENCAPSULADO.

peticion4Estado1 = fetch("https://reqres.in/api/users?page=2")
peticion4Estado2 = peticion4Estado1.then(res => res.json());
peticion4Estado3 = peticion4Estado2.then(res => console.log((res)));
//devuelve el OBJETO JS pero DESENCAPSULADO.



const imagen = document.querySelector(".imagen")    //suponiendo que tenemos un html.
peticion = fetch("urlDeUnPng/jpg");
peticion
    .then(res=>res.blob())                          //blob recibe una respuesta y devuelve una promesa.
    .then(img=>imagen.src = URL.createObjectURL(img)); //URL es una API nativa, un objeto que tiene un metodo que nos crea una url para poder visualizar la la respuesta del servidor. Esta URL es temporal, se almacena soo durante la peticion, si actualiamos la pag. la url cambia.


// -------------------           PETICION POST:

//Como segundo parametro de la funcion fetch hay que poner un objeto que debe tener como mínimo 3 propiedades para funcionar (puede tener mas). 
// ---1) la primer propiedad sera el metodo y su valor "POST",
// ---2) la segunda propiedad es el body que va a tener los datos que queremos enviar al servidor. Y al igual que cuando recibimos datos del sv con get, que los recibimos en formato json serializado (pasado a string), cuando vamos a enviar datos al sv también hay que enviarlos en formato json serializado.
// ---3) la tercer propiedad son los headers, son cabeceras de info sobre lo que estamos enviando, dependerá de que dato enviemos (json, string, img, formulario) el header a usar.
fetch("https://reqres.in/api/users",{
    method : "POST",
    body : JSON.stringify({         //json.stingify recibe un json y lo serializa
        "nombre" : "Lucas",
        "apellido" : "Dalto"
    }),
    headers: {"Content-type" : "application/json"}      //hay muchos tipos de headers, dependiendo de el tipo de info q enviemos al servidor vamos a tener distintos tipos de header. Se ponen cabeceras y valores distintos.(cabecera es lo que esta antes de los : y el valor lo q esta despues.)
})
    .then(res=>res.json())
    .then(res=>console.log(res))

   //una alternativa al codigo anterior para serialiar seria en vez de usar json.stringify, poner el objeto json entre backtiks. Sirve para el caso de que el json sea muy pequeño: 
   fetch("https://reqres.in/api/users",{
    method : "POST",
    body : `{"nombre" : "Lucas","apellido" : "Dalto"}`,
    headers: {"Content-type" : "application/json"} 
})


//Envio de png al servidor:


