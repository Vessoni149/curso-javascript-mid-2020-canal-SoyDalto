//usar try y cath no es la mejor forma de hacer eso, aca solo se hace asi para ejercitar lo aprendido.
const sndButton = document.getElementById('snd-nota');                      //llamo al boton
sndButton.addEventListener("click", ()=>{                                   //agrego evento clik y la funcion
    let resultado,mensaje;
    try {                                                                   //Un bloque catch contiene sentencias que especifican que hacer si una excepción es lanzada en el bloque try. Si 
                                                                            //cualquier sentencia dentro del bloque try (o en una funcion llamada desde dentro del bloque try) lanza una excepción,
                                                                            // el control cambia inmediatamente al bloque catch . Si no se lanza ninguna excepcion en el bloque try, el bloque 
                                                                            //catch se omite el try es "intenta", se va a intentar ejecutar esto que esta dentro del if, el thow mensaje. Si no
                                                                            // se puede ejecutar
       prevRes = parseInt(document.getElementById('nota').value);           //este es el valor del boton que ingresa el usuario, pasado a entero. PERO si el usuario ingresa un texto no se va a 
                                                                            //poder ejecutar el parse int y va a lanzar un error.
       if (window.isNaN(prevRes)){                                          //si el usuario cambia desde el navegador el tipo de input a texto e introduce una letra va a saltar NaN. Aca se
                                                                            //esta diciendo que si prevRes no es un numero, que lance un error, para que luego se pueda ejecutar el catch.
            throw asdasdas;                                                //el throw lanza un error, no importa lo que tenga al lado, ya por lanzar un error se va a ejecutar el catch.
       }
      resultado = verificarAprobacion(9,5,prevRes);                       //aca definimos la variable resultado, que va a ser una funcion creada mas abajo. Los parametros 9 y 5 son las notas 
                                                                            //anteriiores, y prevRes la tercer nota (que va a ingresar el profesor).
      mensaje = definirMensaje(resultado[1]);                              //aca definimos lavariable mensaje, que va a ser una funcion.
     
    } catch (e){                                                            //si el usuario ingresa un texto, hay un error y se da esta excepcion, va a ocurrir lo que esta en el catch.
        resultado = "¿sos gracioso?"                                        //lo que esta en el cath es simplemente un cambio de valor de las variables. lo que efectivamente se ejecuta es la 
                                                                            //funcion abrirModal
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado,mensaje);                                 //aca ejecuto la funcion creada mas abajo en L38. los valores de resultado y mensaje son los de las Ls 15 y 17 respectivamente
                                                                    //que a su vez, ambos son funciones.
})


const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7){ 
        return ["<span class='green'>APROBADO, tu promedio</span>", Math.round(promedio)];
    } 
    return["<span class='red'>DESAPROBADO, tu promedio </span>", Math.round(promedio)];
}


const abrirModal = (res,msg)=>{                                      //esta funcion va a tener 2 parametros, el primero correspondera al <h3> y el segundo al <p>
    document.querySelector(".resultado").innerHTML = res;            // innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. en este caso tanto 
                                                                    //.resultado como .mensaje van a tener texto adentro. Texto que sera establecido en las funciones VerificarAprobacion (L29)
                                                                    // y definirMensaje (L47) Eso va a ser igual a los parametros res y msj.
    document.querySelector(".mensaje").innerHTML =  msg;
    let modal = document.querySelector(".modal-background");        //aca llamamos o seleccionamos al div que contiene al h3 y al p
    modal.style.display = "flex";                                   //y aca le damos estilo al div.
    modal.style.animation = "aparecer 1s forwards";
}

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {                                                    //La declaración switch (cambiar) evalúa una expresión (en este caso "pr"), comparando el valor de esa expresión con una 
                                                                     //instancia case (caso), y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
        case 1: resultado = "No podes ser tan HDP";                 //esto es: "en caso de que el PROMEDIO sea 1: el valor de resultado va a ser 'No podes ser...'". No le estamos diciend que 
                                                                    //retorne nada todavia.
        break;                                                      //La declaración break es opcional y está asociada con cada etiqueta de case y asegura que el programa salga del switch una 
                                                                    //vez que se ejecute la instrucción coincidente y continúe la ejecución en la instrucción siguiente. Si se omite el  break  
                                                                    //el programa continúa la ejecución en la siguiente instrucción en la declaración de switch .
        case 2: resultado = "sos malisimo para mi materia"; 
        break;
        case 3: resultado = "No sabes casi nada"; 
        break;
        case 4: resultado = "Muy mal"; 
        break;
        case 5: resultado = "mal"; 
        break;
        case 6: resultado = "Regular"; 
        break;
        case 7: resultado = "Bien, pero puede mejorar"; 
        break;
        case 8: resultado = "¡Muy bien!"; 
        break;
        case 9: resultado = "¡Excelente!"; 
        break;
        case 10: resultado = "¡Insuperable!"; 
        break;
        default: resultado = "asdasdasdasd";                        //esto solo va a suceder cuando el PROMEDIO no sea ninguno de los valores de case.
        break;
    }   
    
    return resultado;                                                 //aca va a retornar resultado, y el valor de resultado va a depender del valor de "case" dado por el usuario.
    
}




