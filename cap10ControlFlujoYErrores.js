//El flujo es el flujo del programa. El flujo es como se va leyendo y ejecutando el programa.Ej

// let nombre ="pedro";
// if (3>3){
//     alert(nombre);
// }
//Esto no nos va a tirar error, pero tampoco va a hacer nada, xq estamos interrumpiendo el flujo, dando una condición que no se cumple, entonces esta parte no se lee y no se ejecuta
//por ej si escribo let nombre = "jorge", saltaria error xq la variable ya esta definida. Salvo que lo hagamos dentro de un bloque{}


//Las sentencias de control de flujo son las condicionales, if, else, while, etc. Tmb swich que veremos mas adelante

//sentencias de majeno de excepciones.
//ej:
// if (3 > 2){
//     fsafasf
// }



//SWTCH:

// let expr = "banana";
 
// switch(expr){
//     case "banana": 
//     console.log("esta fruta es amarilla");
//     break;
//     case "pera": 
//     console.log("tiene forma de mi tio Roberto");
//     break;
//     case "manzasa": 
//     console.log("los primeros humanos pecaron comiendola");
//     break;
//     default:
//         alert("no es ninguna");                                      //si el valor no se cumple y no es = a nada de lo anterior se ejecuta default
// }

//tambien se puede hacer esto con if y else.
// if (expr == "banana") console.log("esta fruta es amarilla");
// else if (expr == "pera") console.log("tiene forma de mi tio Roberto");
// else  console.log("los primeros humanos pecaron comiendola");
//si hacemos solamente una ejecucion no hacen falta llaves.
//el if tiene mejor rendimiento que el switch, pero a veces para hacer cosas complejas y que el codigo sea mas legible podemos usar switch



//SENTENCIAS DE MANEJO DE EXCEPCIONES.
//excepcion es un error que salta en la ejecucion del programa. Tambien lo puede usar el desarrollador para avisarle algo a los usuarios u otros desarrolladores.
//hay varios tipos de excepciones: ECMAscript, DOMException y DOMError      ver en developer.mozilla

//hay un bloque que maneja los errores y excepciones: try catch
//Si el try nos da un error, el catch tiene que estar si o si.

// try {               //si aca tenemos un error, ese mismo error se lo vamos a pasar como parametro al catch, y éste va a ver que es lo que hace
//     asdasd
// }                   //el try tiene que si o si estar acompañado del catch o del finaly.

// catch(error){            //como parametro siempre se suele pasar error o e, por cuestiones de legibilidad
//     console.log("lo siento, ocurrio un error de referencia");                //caundo salte un error aparecera esto en consola.
// }

// catch(error) {
//     console.log(typeof error)           //typeof puede no estar, nos indica que tipo de dato es el error, en este caso es un objeto, si estuviese entre "" seria un string x ej
// }
//try y catch eliminan los eventhandler, que son para adminitrar los errores, son los eventos que ocurren cuando hay un error. Se desactivan por completo en el navegador y por ende no van a saltar errores ahi, 
//sino que los vamos a tener que trabajar nosotros. Pero esto solo funciona con un tipo de error, en los basados en los comportamientos que el programador espera, ej, una variable mal definida.
//no funciona con errores de sintaxis, x ej si nos sobre una llave "}".

//hay 2 tipos de cath, el condicional y el incondicional. Los que vimos antes son incondicionales, no tienen condicion

//condiiconal:
// catch(error){
//     if (3 > 5) {
//         console.log("ha ocurrido un error");
//     } else {
//         console.log("pito");
//     }
// }

// finally {                                       //el finally se ejecuta pase lo que pase.
//     console.log("me muestro igual"); 
// }


//finally  Tiene prioridad aun sobre el try, entonces sobreescribe el valor de try y catch.
//ormalmente con un return se deja de ejecutar el resto de la función, pero el finally es una excepción a esta regla
// const pruebaTry = ()=> {
//     try{
//         return 1;
//     }
//     catch(e){
//         return 2;
//     }
//     finally {
//         return 3;
//     }
// }
// console.log(pruebaTry());



// try{
//    throw "pito";                //throw es para tirar un error. Una excepcion. se puede usar fuera del try
// }                               //dentro del try no va a aparecer en la consola como un error por la misma naturaleza del try

// catch(e){
//     console.log(e)
// }

// throw "tu veija";   

try{
    throw {                             //si el throw estadentro de un try se puede poner dentro de el un objeto, entre {} y separando sus elementoscon ,. Tambien arrais
        error:"pito",
        info:"pito2"              
 }}
 catch(e){
     console.log(e.info)
 }
 //se usan en casos muuuy especificos, siempre es mejor depurar el codigo y solucionar el error.
 //Se deberia usar el try cuando hay un porgrama grnade y hay una minima probabilidad de qeu ocurra un error.