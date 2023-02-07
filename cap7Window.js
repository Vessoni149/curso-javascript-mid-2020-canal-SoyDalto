//window es un objeto. Es el objeto mas grande y de mas alta jerarquia en js. Hasta el dom es parte del window.
//hereda las propiedades de EventTarget.
//vamos a ver los metodos y propiedades.

//let ventana = window.open("https://youtube.com");             //abre una pestaña o ventana.

//ventana.close(); la cierra

//ventana.closed(); devuelve t o f dependiendo de si la ventana esta abierta o cerrada.

//ventana.stop()// detiene la carga del sitio web cuando esta cargando (ex como apretar la x caundo se carga la pag.)

//alert tmb es de window pero no se necesita escribir el window.alert.

//.print imprime. Abre la ventana de impresion.

//prompt: pide un dato y devuelve siempre un string (lo que escriban)


// respuesta = confirm("estas seguro que queres salir del sitio?");         //se usa cuando el usuario quiere salir del sitio o algo parecido o guardar algun dato.
// console.log(respuesta);                                                  //confirm devuelve true o false, hay que verlo en la consola.


// const screen = window.screen;                                            //screen es una propiedad que trabaja con la pantalla, es una forma de crear un objeto o acceder a las propiedades del screen (se
                                                                            // pueden ver en la consola y despues acceder a ellas), q las vamos a ver mas adelante.
// console.log(screen);
 
// document.write(screen.availWidth);                                       //dice el ancho que puede tener la ventana del navegador si esta maximizada, incluidas las barras del browser, screen.availHeight devuelve 
// document.write(screen.availHeight);                                      //el alto que puede tener la screen si esta maximizada. Basicamente el tamaño de la pantalla del monitor
//document.write(screen.width);                                             //dice el ancho que efectivamente tiene la screen, que va a depender de que tan minimizada esté. Lo mismo pasa con screen.height       
//document.write(screen.height);

// const screenLeft = window.screenLeft;                                    //muestran lo separado que esta la ventana del contorno del monitor, si movemos la ventana y actualizamos cambian las coordenadas. Y si 
                                                                            //esta maximizado va a ser 0, 0.
// const screenTop = window.screenTop;                                      //son porpiedades de lectura (no de escritura), no se pueden modificar.
// document.write(screenLeft,"<br>", screenTop);

// const scrollY = window.scrollY;                                          //dice cuando nos desplazamos en px en eje y.
// const scrollX = window.scrollX;                                          // scrollX es lo mismo pero para el eje x.
// alert(scrollY + " " + scrollX);

//scroll y scrollTo se le da entre (x e y) como parametros para que le digamos donde posicionarse. Se puede usar en la consola

//----------------------------------------------------------

//resize y move, no se pueden usar en consola, se tienen q hacer desde un servidor, igual casi ni se usa.
// window.resizeBy()                                                        //cambia el tamaño de la ventada actual en una cantidad específica. Le tenemos q pasar como parametro xpx e ypx. es absoluto (no toma en 
                                                                            //cuenta la posicion inivial de la ventana)
// window.resizeTo()                                                        //es relativo, toma en cuenta la posición nicial de la ventana


//moveBy()            mueve la ventana en una ubicacion absoluta
//moveTo()            lo hace en una relativa.

//----------------------------------------------------------

// const href = window.location.href;                                              //href dice donde esta localizado el archivo, es la url de la pagina completa (protocolo, hostname, y pathname)
// document.write(href + "<br>");

//window.location.hostname                                                           //si ponemos esto en consola devuelve el hostname, el dominio (facebook.com / youtube.com)

//window.location.pathname                                                          //dice en que parte del dominio estamos, ej si estas en un canal de yt te va a decir lo que viene despues del dominio "youtube.com"

//window.location.protocol                                                          //el protocolo es http o https, este ultimo es el seguro

// let x = window.location.asign("https://youtube.com");                                       //se hace en consola, carga un nuevo documento que le digamos en parametro.                                  //carga lo que queramos






