//las promesas son asincronas, osea que trabajan en tiempo real. 


// const objeto = {
//     propiedad1 : "valor1",
//     propiedad2 : "valor2",
//     propiedad3 : "valor3"
// };

// const obtenerInformacion = ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve (objeto)},1000)
//   })
// }
// obtenerInformacion().then(resultado => console.log(resultado))   //asi obtenemos el resultado despues de 1 segundo, porque las promesas son asincronas, trabajan en tiempo real.
//Pero hay otra forma de trabajar con esto distinto, con await y async.



// const mostrarResultado = async ()=>{            //si no es funcion flecha se pone asi: async function mostrarResultado(){}
//     resultado = await obtenerInformacion();
//     console.log(resultado);
// }
// mostrarResultado();                              //las lineas de codigo de la 20 a la 24 reemplazarian a la 15. Sí, es mas facil poner la 15 en este caso. Pero hay casos donde es mejor trabajar con await.

//----------------------------
//hagamos de cuenta que estamos llamando a un servidor:
const obtenerInformacion = (text)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve (text)},Math.random()*2000)    //esto es para que el tiempo de aparicion sea aleatorio entre 0 y 2 seg
    })
  }

// obtenerInformacion("1 pito").then(resultado => console.log(resultado))          //veremos que van a salir en consola en orden aleatorio
// obtenerInformacion("2 bernardo").then(resultado => console.log(resultado))      //así, el servidor estaria trayendo las respuestas desordenadamente, si yo quisiera mostrar un dato primero que otro no podria, y no nos servirian las promesas. 
// obtenerInformacion("3 eduardo").then(resultado => console.log(resultado))       //Entonces debemos usar las funciones asíincronas:

//funciones asíncronas:
const mostrarData = async ()=>{
    data1 = await obtenerInformacion("1: pito");          //ahora lo va a devolver en orden.
    data2 = await obtenerInformacion("2: bernardo");        //con await le decimos al servidor "obtene esta informacion", y hasta que no la obtenga no pasa a la siguiente
    data3 = await obtenerInformacion("3: eduardo");     //await basicamente accede al valor que retorna la promesa, = que .then. Si no estuviera await no aparecerian los valores de la promesa por estar encapsulados.
    console.log(data1);
    console.log(data2);
    console.log(data3); 
}
mostrarData();





