const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e)=>{
     e.preventDefault();                              //previene el comportamiento por defecto del boton que es actualizar la pagina cuando se clikea. Pero si queremos que funcione el "required" del html no lo ponemos.
    let error = validarCampos();                     //esta funcion va a validar los datos. y mas abajo le vamos a dar 2 parametros, cuando creemos la funcion. [0] va a ser true o false, y [1] un mensaje
    if (error[0]) {                                  //aca decimos que si hay un error va a devolver true. y se va a ejecutar este if. 
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    } else {                                        //Si no hay errores devuelve false y se ejecuta esto.
        resultado.innerHTML = "solicitud enviada correctamete";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})


//mas alla del required, es necesario hacer una validacion en js para evitar que cualquiera pueda sacar el required desde la consola. Tambien es necesario validar que el email sea de tipo email, xq si alguien lo cambia a text va a poder enviar el formulario =.

const validarCampos = ()=>{
    let error = [];                                             //la variable error va a ser un arrai
    if (nombre.value.length < 5 || nombre.value.length > 40) {  //aca se valida el primer elemento, las condiciones son que si el valor (n° de caracteres) de nombre sea menor que 5 y mayor q 40, da error
        error[0] = true;
        error[1] = "el nombre es invalido.";
        return error;
    } else if (email.value.length < 5 ||
               email.value.length > 40 ||
               email.value.indexOf("@") == -1 ||
               email.value.indexOf(".") == -1) {
                   error[0] = true;
                   error[1] = "el mail es inválido";
                    return error;
        } else if (materia.value < 4 || materia.value > 40) {
            error[0] = true;
            error[1] = "la materia no existe";
        }
                                                                //no va un else al final xq el return ya termina la funcion
    error[0] = false;
    return error;
}


















