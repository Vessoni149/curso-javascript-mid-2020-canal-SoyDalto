let alumnos = [{
    nombre: "Lucas Dalto",
    email: "soydalto@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Karing Guerra",
    email: "karin@gmail.com",
    materia: "Fisica 1"
},{
    nombre: "Jorge Ramirez",
    email: "ramirez@gmail.com",
    materia: "Calculo 2"
},{
    nombre: "Facundo Roberto",
    email: "robert@gmail.com",
    materia: "Literatura"
},{
    nombre: "Cofla XD",
    email: "cofla@gmail.com",
    materia: "Recreo"
}];

const boton = document.querySelector(".boton-confirmar");


for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;
    document.querySelector(".grid-container").innerHTML+= htmlCode;
}


boton.addEventListener("click",()=>{                                        //aca decimos: cuando demos click en el boton, ejecuta la funcnion
    let confirmar = confirm("¿realmente desea confirmar als mesas?");       //emite un mensaje de confirmacion
    if (confirmar){
        document.body.removeChild(boton);
    let elementos = document.querySelectorAll(".semana");                    //selecciona todos los elementos semana
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
    }
}
})

