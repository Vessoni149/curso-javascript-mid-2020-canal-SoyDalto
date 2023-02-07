//La libreria axios viene a reemplazar fetch, pero fetch se sigue usando para peticiones especificas o hacer pocas.
//axios esta basado en promesas como fetch, pero utilizan el objeto XMLHttprequest, usa ese objeto para ejecutar sus promesas.
//Una libreria es un conjunto de funciones que tienen un fin deteminado, hay librerias para enviar formularios, para validar peticiones, etc.
//un framework seria un conjunto de librerias.


//veamos las diferencias con fetch
fetch("informacion.txt")
    .then(res=>res.json())
    .then(res=>console.log(res))

//La libreria axios esta en github

//npm install axios
//Once the package is installed, you can import the library using import or require approach:

//import axios, {isCancel, AxiosError} from 'axios'; o import axios from 'axios'

// tambien se puede usar el siguiente scrit en html, hay que ponerlo antes del script que nosotros creemos, para poder usar las funciones de la lireria.
//<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

axios("informacion.txt")
    .then(res=>console.log(res))

//axios nos ahorra una linea, porque la promesa no viene encapsulada 
 //al igual que fetch, axios trabaja por defecto con GET.
 //si queremos usar POST, por defecto ya viene configurado el tema el body, header, etc:
 //envio de string
 axios.post("informacion.txt", "lo que enviaremos al server.")
    .then(res=>console.log(res))

//envio de json:
axios.post("informacion.txt", {
    "nombre": "lucas",
    "apellido": "dalto"
})
    .then(res=>console.log(res))

    //si queremos enviar un post pero configurar nosotros la peticion:
    axios("informacion.txt", {
        method: "post",
        data: {                     //no hace falta serializar el json
            "nombre": "lucas",
            "apellido": "dalto"
        }
    })
        .then(res=>console.log(res))


        //FETCH y AXIOS CON ASYNC Y AWAIT:

        //await espera a que algo termine de ejecutarse para seguir el flujo. También obtiene el valor de las promesas sin usar .then().

        const getName = async ()=>{
            let peticion = await fetch("informacion.txt")
            let resultado = await peticion.json();
            console.log(resultado);
        }
        //como await desecapsula no hace falta usar .then().
        getName();

        const getNomre = async ()=>{
            let resultado = await axios("informacion.txt")  //nos ahorramos un await, y accedemos con .data a los valores del objeto js.
            console.log(resultado.data.nombre);
        }
        getNombre();