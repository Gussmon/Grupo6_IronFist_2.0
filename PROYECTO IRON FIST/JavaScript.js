Swal.fire({
    title: 'MISIÓN: DEFENDER LA TIERRA <br><br> <img src="IMG/logo_ironfist.png" alt="Logo Iron Fist"><br>',
    html: 'IRON FIST pondrá a prueba tus reflejos mientras avanzas por niveles cada vez más desafiantes. Supera cada misión, desbloquea logros y demuestra que tienes lo necesario para proteger la Tierra.',
    icon: 'success',
    confirmButtonText: 'COMENZAR MISIÓN',

    customClass: {
        popup: 'Modal_Mision',
        title: 'Modal_Mision_Titulo',
        htmlContainer: 'Modal_Mision_Texto',
        confirmButton: 'Modal_Mision_Boton'
    },

    buttonsStyling: false,

    width: '50%',
    height: '80%',
    timer: 100000,

    timerProgressbar: true,
    allowOutsideClick: true,
    allowEscapeKey: false,
    allowEnterkey: false,
    stopKeydownPropagation: false,
});



Tiempo = 51 //VARIBLE DE INICIO TIEMPO
Puntaje = 0 //VARIABLE DE INICIO PUNTOS



//FUNCION DE NARRACIONES

Narracion = 1
document.getElementById("Contenedor_narracion").addEventListener('click', Iniciar_narracion)

function Iniciar_narracion() {
    if (Narracion == 1) {
        document.getElementById("narracion").play()
        document.getElementById("VOLUMEN").style.display = "none"
        document.getElementById("PAUSE").style.display = "table"
        Narracion = 2
    }
    else {
        document.getElementById("narracion").pause()
        document.getElementById("VOLUMEN").style.display = "table"
        document.getElementById("PAUSE").style.display = "none"
        Narracion = 1
    }
}




Graficos = 1 //Este es el medidor de graficos

//En esta funcion cambio de fondo al presionar el CHEKBOX, para graurar los graficos dentro del juego
function Graficos_fondo() {
    var fondo = document.getElementById("Fondo");
    var circulo = document.getElementById("Recursos");

    if (Graficos == 1) {
        circulo.style.marginLeft = "60%";
        fondo.classList.add("Modo_Oscuro");
        Graficos = 2;
    } else {
        circulo.style.marginLeft = "0%";
        fondo.classList.remove("Modo_Oscuro");
        Graficos = 1;
    }
}






//CONTENEDOR QUE CONTEIENE TOO EL JUEGO
//DE POR SI ESTA FUNCION NO SE EJECUTA HASTA QUE SE LA LLAMA, MAS ADELANTE LA LLAMAREMOS
//PARA QUE EL JUEGO INICIE UNA VEZ SE PRESIONE JUGAR
function JUEGO() {
    Juego_Terminado_lvl1 = false //reseteamos la bandera de derrota por si es un reintento

    function Tiempo_Disminur() { //FUNCION QUE REDUCE EL TIEMPO Y RESETEAL EL RESULTADO UNA VEZ LLEGUE A 0
        Tiempo--;
        document.getElementById("Tiempo").innerHTML = Tiempo
        if (Tiempo == 0) {
            Mostrar_Derrota("Se agotó el tiempo.")
        }
    }


    Restar_Tiempo = setInterval(Tiempo_Disminur, 1000)

    //AÑADIMOS LA FUNCION AUMENTAR PUNTOS Y EXPULSAR AL PASAR EL CURSOR SOBRE LOS METEORITOS
    //(antes era addEventListener: al reintentar tras perder, JUEGO() se vuelve a
    //llamar y se apilaban listeners repetidos, sumando puntos varias veces por
    //cada pasada del mouse. Con onmouseover el nuevo siempre reemplaza al anterior.
    //OJO: por eso mismo, sumar puntos y expulsar deben ir en UN SOLO onmouseover por
    //meteorito; si se asignan por separado, la segunda asignación pisa a la primera
    //y el puntaje deja de contar.)
    document.getElementById("Meteorito").onmouseover = function () { Aumentar_Puntos(); Expulsar(); }
    document.getElementById("Meteorito2").onmouseover = function () { Aumentar_Puntos(); Expulsar2(); }


    //FUNCION QUE UNICAMENTE AUMENTA PUNTOS Y RESETEA LAS VARIABLES AL LLEGAR A CIERTO LIMITE
    function Aumentar_Puntos() {
        Puntaje++;
        document.getElementById("Puntaje").innerHTML = Puntaje + "&nbsp;/&nbsp;12"
        if (Puntaje == 12) {
            Puntaje = 0
            Tiempo = 51


            document.getElementById("NEXT").addEventListener('click', Habilitar_Siguienten_LVL)
            function Habilitar_Siguienten_LVL() {
                document.getElementById("NIVEL_01").style.display = "none"
                document.getElementById("NIVEL_02").style.display = "block"
            }
            document.getElementById("Tiempo").innerHTML = 50
            document.getElementById("Puntaje").innerHTML = 0 + "&nbsp;/&nbsp;" + 12
            document.getElementById("Triunfo").play()
            document.getElementById("Fondo_Ciberpunk").pause()
            document.getElementById("Puntos_sound").pause()
            document.getElementById("Punto2").pause()
            document.getElementById("GANASTE_PANTALLA").style.display = "flex"

            function Ganaste_Pantalla() {

                clearInterval(Reanudar_trayectoria)
                clearInterval(Reanudar_trayectoria2)
                clearInterval(Restar_Tiempo)

                document.getElementById("Meteorito").style.left = "-70%"
                document.getElementById("Meteorito").style.transition = "0s"

                document.getElementById("Meteorito2").style.left = "-70%"
                document.getElementById("Meteorito2").style.transition = "0s"
            }

            Desbloquear_Pantalla = setInterval(Ganaste_Pantalla, 1)

            Swal.fire({
                title: 'Felicidades por superar <br> el nivel <br><br> <img src="IMG/Check.png" width = "120px"><br>',
                html: 'Al parecer nos salvamos, agradecemos tu ayuda y ezfuerzo al superar este nivel, esperamos seguir contando contigo, si algo mas sucede y por cierto, no olvides que te esperan grandes cosas al final del juego asi que no pares de intentar ',
                icon: 'success',
                confirmButtonText: 'QUIERO CONTINUAR',

                customClass: {
                    popup: 'Modal_Mision',
                    title: 'Modal_Mision_Titulo',
                    htmlContainer: 'Modal_Mision_Texto',
                    confirmButton: 'Modal_Mision_Boton'
                },
                buttonsStyling: false,

                width: '50%',
                height: '80%',
                timer: 100000,


                timerProgressbar: true,
                /*Funcion de cerrar la alerta*/
                allowOutsideClick: true,
                allowEscapeKey: false,
                allowEnterkey: false,
                stopKeydownPropagation: false,
            });

        }
    }



    //ESTA FUNCION DIRIGE AL PRIMER METEORITO 1 A LA TIERRA 
    //Antes ambos usaban el rango completo (0-450), por lo que de vez en cuando
    //el azar los mandaba a la misma altura y se veían amontonados/chocados uno
    //sobre el otro. Ahora cada meteorito tiene su propia mitad del tablero.
    function Meteorito_Direccion() {
        Distancia1 = 80
        Altura1 = Math.round(Math.random() * 190) //banda superior: 0-190px

        document.getElementById("Meteorito").style.left = Distancia1 + "%"
        document.getElementById("Meteorito").style.top = Altura1 + "px"
    }

    setTimeout(Meteorito_Direccion, 2000)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
    Reanudar_trayectoria = setInterval(Meteorito_Direccion, 2430)//LUEGO SE VA A LLAMAR A LOS METEORITOS CADA 2,4 SEGUNDOS


    //ESTA FUNCION DIRIGE AL SEGUNDO METEORITO A LA TIERRA
    function Meteorito_Direccion2() {
        Distancia2 = 80
        Altura2 = 260 + Math.round(Math.random() * 190) //banda inferior: 260-450px

        document.getElementById("Meteorito2").style.left = Distancia2 + "%"
        document.getElementById("Meteorito2").style.top = Altura2 + "px"
    }

    setTimeout(Meteorito_Direccion2, 2600)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
    Reanudar_trayectoria2 = setInterval(Meteorito_Direccion2, 2350)//LUEGO SE VA A LLAMAR A LOS METEORITOS CADA 2,3 SEGUNDOS


    //(la asignación de Expulsar/Expulsar2 ya se hizo arriba, combinada con Aumentar_Puntos,
    //para no pisar el conteo de puntaje)


    //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 1 DE MANERA ALEATORIA FUERA DEL MAPA
    function Expulsar() {
        document.getElementById("Puntos_sound").play()
        Distancia = "-500"
        Altura = Math.round(Math.random() * 450)

        document.getElementById("Meteorito").style.left = Distancia + "px"
        document.getElementById("Meteorito").style.top = Altura + "px"
        document.getElementById("Meteorito").style.transition = "1.8s"
    }


    //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 2 DE MANERA ALEATORIA FUERA DEL MAPA
    function Expulsar2() {
        document.getElementById("Punto2").play()
        Distancia = "-500"
        Altura = Math.round(Math.random() * 450)

        document.getElementById("Meteorito2").style.left = Distancia + "px"
        document.getElementById("Meteorito2").style.top = Altura + "px"
        document.getElementById("Meteorito2").style.transition = "1.8s"
    }





    //ESTA FUNCION SE ENCARGA DE ALERTARTE UNA VEZ EL METEORITO CRUCE LA LINEA CON UN PERDISTE
    //TAMBIEN RESETEA LOS VALORES Y LLEVA A LOS METEORITOS FUERA DEL MAPA DE MANERA INSTANTANEA
    function perdiste() {
        //Antes esto comparaba contra un pixel fijo (630) pensado para
        //un tablero de 900px. Ahora el tablero es responsivo, así que
        //calculamos el 70% del ancho REAL del tablero en cada momento,
        //para que coincida siempre con la línea roja (.Limitelvl1).
        var anchoTablero = document.getElementById("Meteorito").offsetParent.offsetWidth
        var limite = anchoTablero * 0.70

        if ((document.getElementById("Meteorito").offsetLeft > limite) ||
            (document.getElementById("Meteorito2").offsetLeft > limite)) {

            Mostrar_Derrota("Los meteoritos llegaron a destino antes de tiempo: destruyeron gran parte del continente.")
        }

        else {
            document.getElementById("Meteorito").style.transition = "2.4s"
            document.getElementById("Meteorito2").style.transition = "2.4s"
        }
    }

    Chequeo_perdida = setInterval(perdiste, 1)//LE COLOCAMOS UNO PARA QUE SIEMPRE SE ESTE EJECUTANDO, DADO A
    //QUE NO SABEMOS CUANDO EL METEORITO VA A SUPERAR EL LIMITE
}

//---------------------------------------------------------------------------
//PANTALLA DE DERROTA (Nivel 1)
//Antes esto era un alert() nativo que se cerraba solo y el juego seguía al
//toque, sin darte tiempo para prepararte de nuevo. Ahora paramos todo,
//mostramos un aviso bonito (mismo estilo que el de victoria) y te devolvemos
//a la pantalla de inicio: le das "JUGAR" otra vez cuando estés listo, sin
//apuro.
Juego_Terminado_lvl1 = false
function Mostrar_Derrota(mensaje) {
    if (Juego_Terminado_lvl1) return
    Juego_Terminado_lvl1 = true

    clearInterval(Restar_Tiempo)
    clearInterval(Reanudar_trayectoria)
    clearInterval(Reanudar_trayectoria2)
    clearInterval(Chequeo_perdida)
    clearInterval(Pusae_offf)
    //Estos dos NUNCA se limpiaban entre reintentos: al perder y volver a darle "JUGAR",
    //se sumaban a los de la partida anterior y hacían que la cuenta regresiva corriera
    //sola/doble y el juego pareciera "autoreiniciarse". Los limpiamos aquí también.
    clearInterval(Intervalo_Cuenta_rg)
    clearTimeout(tiempo_de_arranque)

    document.getElementById("Perdiste_sound").play()
    document.getElementById("Fondo_Ciberpunk").pause()

    document.getElementById("Meteorito").style.left = "-70%"
    document.getElementById("Meteorito").style.transition = "0s"
    document.getElementById("Meteorito2").style.left = "-70%"
    document.getElementById("Meteorito2").style.transition = "0s"

    Tiempo = 51
    Puntaje = 0
    Conteo = 4
    document.getElementById("Tiempo").innerHTML = 50
    document.getElementById("Puntaje").innerHTML = 0 + "&nbsp;/&nbsp;" + 12

    //OJO: a propósito NO volvemos a mostrar el título/dificultad ni la pantalla
    //Start (se queda oculta, tal como la dejó DETENER_JUEGO() la primera vez).
    //Así, al cerrar el aviso de abajo, los meteoritos caen directo, sin ninguna
    //pantalla ni cuenta regresiva de por medio (y sin overlays tapando el botón
    //"ENTENDIDO").
    document.getElementById("Pausa_Pantalla").style.display = "none"

    Swal.fire({
        title: 'Has perdido <br><br> la misión',
        html: mensaje + ' Presiona "ENTENDIDO" cuando estés listo para intentarlo otra vez.',
        icon: 'error',
        confirmButtonText: 'ENTENDIDO',
        customClass: {
            popup: 'Modal_Mision',
            title: 'Modal_Mision_Titulo',
            htmlContainer: 'Modal_Mision_Texto',
            confirmButton: 'Modal_Mision_Boton'
        },
        buttonsStyling: false,
        width: '50%',
        allowOutsideClick: true,
        allowEscapeKey: true,
    }).then(function () {
        //Al cerrar el aviso (con "ENTENDIDO" o clic afuera) los meteoritos caen
        //de inmediato, sin cuenta regresiva ni pantallas de por medio.
        Reintentar_SinCuenta()
    })
}


//LE DECIMOS QUE AL PRECIONAR EL BOTON JUGAR EJECUTARA LA FUNCION PLAY     
document.getElementById("Play").addEventListener('click', PLAY)

Conteo = 4 //ESTE ES EL CONTEO DE LA CUENTA REGRESIVA QUE SE DA DESPUEZ DE PRESINAR JUGAR
//Declaramos esto de antemano (aunque sea "undefined") para que la primera vez que se
//presione JUGAR, el clearInterval/clearTimeout defensivo de PLAY() no rompa todo con un
//error de "variable no definida" (eso era lo que dejaba el botón sin funcionar).
var Intervalo_Cuenta_rg, tiempo_de_arranque
//Este también: solo se creaba si el jugador pausaba al menos una vez. Si perdías
//SIN haber pausado nunca, Mostrar_Derrota() explotaba justo en su clearInterval
//(variable no definida) y se cortaba a la mitad: los meteoritos quedaban
//"chocados" congelados y nunca volvía a aparecer la pantalla de inicio ni el
//aviso de "Has perdido". Esto era lo que seguía pasando en tus capturas.
var Pusae_offf

//ESTA FUNCION EJECUTA UN CONJUNTO DE ACCIONES AL PRESIONAR JUGAR (solo la primera vez)
function PLAY() {
    //MUEVE EL TITULO FUERA DEL CONTENEDOR UNA VEZ DE CLICK A JUGAR
    document.getElementById("Texo").style.left = "-900px"
    //MUEVE AL BOTON PLAY TRANS PRESIONAR PRESIONAR AL MISMO BOTON
    document.getElementById("Contenedor_Mensaje_Star").style.left = "-100%"
    Reintentar()
}

//Esto es lo que de verdad arranca la cuenta regresiva y el nivel. Lo separamos de
//PLAY() para que, al perder y reintentar, NO vuelva a aparecer encima el título
//"¿Listo para salvar el mundo?" ni el menú de dificultad (ya quedaron escondidos
//desde la primera vez que jugaste) y se vea únicamente: aviso "Has perdido" ->
//ENTENDIDO -> cuenta regresiva -> caen los meteoritos de nuevo.
function Reintentar() {
    //Por si quedó algo corriendo de un intento anterior (defensivo)
    clearInterval(Intervalo_Cuenta_rg)
    clearTimeout(tiempo_de_arranque)
    Conteo = 4

    document.getElementById("Fondo_Ciberpunk").play()
    //ESTA FUNCION CONTIENE AL JUEGO COMO TAL
    function ARRACAR() {
        JUEGO()
    }
    //INVOCA AL JUEGO UNA VEZ PASEN 4 SEGUNDO - OSEA UNA VEZ TERMINE EL CONTADOR
    tiempo_de_arranque = setTimeout(ARRACAR, 4100)
    //ESTA FUNCION EJECUTA LA CUENTA REGRESIVA Y RETIRA LA PANTALLA START
    function ESPERAR() {
        function Cuenta_rg() {
            Conteo--;
            document.getElementById("RGB").innerHTML = Conteo
            if (Conteo == -1) {
                document.getElementById("Contenedor_contador").style.display = "none"
                function Borrar() {
                    document.getElementById("Start").style.display = "none"

                    DETENER_JUEGO()
                }//HABILITA LA FUNCION DE PAUSE Y REANUDAR UNA VEZ CARGUE EL JUEGO
                setTimeout(Borrar, 500)
            }
        }
        //Antes esto era anónimo y nunca se limpiaba: si perdías y le dabas
        //"JUGAR" de nuevo, se acumulaba con el de la partida anterior y la
        //cuenta regresiva corría sola/el doble de rápido. Ahora queda guardado
        //en una variable para poder limpiarlo (ver PLAY() y Mostrar_Derrota()).
        Intervalo_Cuenta_rg = setInterval(Cuenta_rg, 1000)
    }

    setTimeout(ESPERAR, 350)
}//SE EJECUTARA EN UN LAPSO DE 350, DESPUES DE PRESIONAR EL BOTON

//Esta es la que de verdad usa Mostrar_Derrota() al reintentar. A diferencia de
//Reintentar() (que hace la cuenta regresiva 4-3-2-1 antes de empezar, pensada
//para la primera vez que entras al nivel), esta NO cuenta: ya viste el aviso de
//"Has perdido" y decidiste reintentar presionando "ENTENDIDO", así que los
//meteoritos caen de inmediato al cerrar el aviso.
function Reintentar_SinCuenta() {
    clearInterval(Intervalo_Cuenta_rg)
    clearTimeout(tiempo_de_arranque)
    document.getElementById("Fondo_Ciberpunk").play()
    document.getElementById("Start").style.display = "none"
    DETENER_JUEGO()
    JUEGO()
}





//ESTA FUNCION CONTIENE EL REANUDE Y PAUSE DEL BOTON
function DETENER_JUEGO() {
    //INDICA QUE LA FUNCION DE PAUSE SE EJECUTARA UNA VEZ SE DE CLICK AL BOTON DE PAUSE        
    document.getElementById("Pause").onclick = PAUSE //onclick reemplaza en vez de apilarse en cada reintento tras perder
    //ESTA VARIABLE INDICA SI SE EJECUTA O NO EL DESPAUSEO
    Activo = 1
    //HACE QUE EL JUEGO SE DETENGA
    function PAUSE() { //Colocar la funcion de pausa y reanudar
        //SI LLEGA A UNA EJECUTA LA FUNCION PAUSE
        if (Activo == 1) {

            document.getElementById("Fondo_Ciberpunk").pause()
            document.getElementById("Pausa_Pantalla").style.display = "table"
            clearInterval(Restar_Tiempo)//BORRAMOS LA FUNCION DE TIEMPO
            document.getElementById("Tiempo").innerHTML = Tiempo
            clearInterval(Reanudar_trayectoria2)
            clearInterval(Reanudar_trayectoria)

            function Meteorito_detener() {
                document.getElementById("Meteorito").style.left = document.getElementById("Meteorito").offsetLeft + "px"
                document.getElementById("Meteorito2").style.left = document.getElementById("Meteorito2").offsetLeft + "px"

                document.getElementById("Meteorito").style.top = document.getElementById("Meteorito").offsetTop + "px"
                document.getElementById("Meteorito2").style.top = document.getElementById("Meteorito2").offsetTop + "px"
            }

            Pusae_offf = setInterval(Meteorito_detener, 1) //LE ASEGNAMOS UNA ID, PARA BORRALO UNA VEZ SE DESPAUSEE
            Activo = 2
        } //CAMBIAMOS EL VALOR PARA QUE AL VOLVER A DARLE CLICK EJECUTE LA CONDICIONAL DE REANUDAR

        else { //LA FUNCION DE REANUDAR
            clearInterval(Pusae_offf) //BORRAMOS LA FUNCION, PARA QUE EL REANUDAR PUEDA EJECUTARSE DE NUEVO
            document.getElementById("Pausa_Pantalla").style.display = "none"
            document.getElementById("Fondo_Ciberpunk").play()
            function Tiempo_Disminur() {//VOLVEMOS A CREAR LA FUNCION DE TIEMPO PARA QUE REANUEDE EL CONTEO
                Tiempo--;
                document.getElementById("Tiempo").innerHTML = Tiempo
                if (Tiempo == 0) {
                    Mostrar_Derrota("Se agotó el tiempo.")
                }

                else {
                    document.getElementById("Meteorito").style.transition = "2.4s"
                    document.getElementById("Meteorito2").style.transition = "2.4s"
                }
            }

            Restar_Tiempo = setInterval(Tiempo_Disminur, 1000)

            document.getElementById("Meteorito").style.left = Distancia1 + "%"
            document.getElementById("Meteorito").style.top = Altura1 + "px"
            document.getElementById("Meteorito").style.transition = "2.4s"

            document.getElementById("Meteorito2").style.left = Distancia2 + "%"
            document.getElementById("Meteorito2").style.top = Altura2 + "px"
            document.getElementById("Meteorito2").style.transition = "2.4s"


            function Meteorito_Direccion() {
                Distancia1 = 80
                Altura1 = Math.round(Math.random() * 190) //misma banda que en JUEGO()

                document.getElementById("Meteorito").style.left = Distancia1 + "%"
                document.getElementById("Meteorito").style.top = Altura1 + "px"
            }

            setTimeout(Meteorito_Direccion, 2000)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
            Reanudar_trayectoria = setInterval(Meteorito_Direccion, 2430)//LUEGO SE VA A LLAMAR A LOS METEORITOS CADA 2,4 SEGUNDOS


            //ESTA FUNCION DIRIGE AL SEGUNDO METEORITO A LA TIERRA
            function Meteorito_Direccion2() {
                Distancia2 = 80
                Altura2 = 260 + Math.round(Math.random() * 190) //misma banda que en JUEGO()

                document.getElementById("Meteorito2").style.left = Distancia2 + "%"
                document.getElementById("Meteorito2").style.top = Altura2 + "px"
            }

            setTimeout(Meteorito_Direccion2, 2000)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
            Reanudar_trayectoria2 = setInterval(Meteorito_Direccion2, 2350)//LUEGO SE VA A LLAMAR A LOS METEORITOS CADA 2,3 SEGUNDOS





            Activo = 1
        }
    }
} //CAMBIAMOS EL VALOR DE NUEVO A 1 PARA QUE AL SIGUIENTE CLICK SE EJECUTE EL PAUSE  S









//TRANSICIONES ENTRE PAGINAS----------------------------------------------------------------------------------



function Mover() {//TRANSICION DE LA PRIMERA SECCION A LA SEGUNDA
    var contenedor = document.getElementById("Seccion_01");
    contenedor.style.transition = "top 0.9s ease-in-out, opacity 0.9s ease-in-out";
    contenedor.style.top = "-100%";
    contenedor.style.opacity = "0";

    function Desaparecer() {
        var contenedor = document.getElementById("Seccion_01");
        var Reglas = document.getElementById("Reglas");
        Reglas.style.transition = "top 0.8s ease-out, opacity 0.8s ease-out";
        Reglas.style.top = "3%";
        Reglas.style.opacity = "1";
        contenedor.style.display = "none";
    }
    setTimeout(Desaparecer, 900);
}


function Mover_2() {
    var Reglas_Sacar = document.getElementById("Reglas")

    //Efecto de "activacion de mision" antes de pasar al juego (punto 14 - REGLAS)
    var Transicion_Mision = document.getElementById("Transicion_Mision")
    Transicion_Mision.classList.add("Activo")
    setTimeout(function () { Transicion_Mision.classList.remove("Activo") }, 1100)

    Reglas_Sacar.style.top = "-100%"
    Reglas_Sacar.style.transition = "1.4s"



    function Desaparecer2() {
        var Reglas_Sacar = document.getElementById("Reglas")
        var contenedor_2 = document.getElementById("Seccion_2")
        var imagen = document.getElementById("Imagen")
        var mensaje = document.getElementById("Mensaje")
        var titulo = document.getElementById("Titulo_historia")

        Reglas_Sacar.style.display = "none"
        contenedor_2.style.top = "0%"

        imagen.style.left = "2%"
        imagen.style.transition = "2s"
        mensaje.style.right = "2%"
        mensaje.style.transition = "2s"
        titulo.style.left = "2%"
        titulo.style.transition = "1s"
    }
    setTimeout(Desaparecer2, 1260)



}


function Mover_3() {//TRANSICION DE LA SEGUNDA SECCION A LA TERCERA 

    var contenedor_2 = document.getElementById("Seccion_2")
    var Supremo = document.getElementById("Seccion_suprema")

    document.getElementById("narracion").pause()
    contenedor_2.style.top = "-100%"
    contenedor_2.style.transition = "1.4s"
    Supremo.style.height = "160vh" //Le aumente para que no tape al contenedor del juego


    function Desaparaceer3() {
        var Seccion_Juego = document.getElementById("Seccion_Juego")
        var contenedor_2 = document.getElementById("Seccion_2")
        var juego = document.getElementById("Registraar")
        var Titulo_jugar = document.getElementById("Titulo_jugar")
        var Contenedor_juego = document.getElementById("Contenedor_Juego")
        var Cabezara = document.getElementById("Cabezera")

        Seccion_Juego.style.left = "0%"
        contenedor_2.style.display = "none"
        juego.style.top = "0%"
        juego.style.transition = "0s"
        Titulo_jugar.style.left = "0%"
        Titulo_jugar.style.transition = "0.8s"
        Contenedor_juego.style.left = "0%"
        Contenedor_juego.style.transition = "1.2s"
        Cabezara.style.left = "0%"
        Cabezara.style.transition = "1.2s"

    }

    setTimeout(Desaparaceer3, 900)
}

//RELOJ


function Reloj_Tiempo() {
    var actualizar_Hora = function () {
        var Fecha = new Date(),
            Horas = Fecha.getHours(),
            ampm,
            Minutos = Fecha.getMinutes(),
            Segundos = Fecha.getSeconds(),
            diaSemana = Fecha.getDay(),
            dia = Fecha.getDate(),
            mes = Fecha.getMonth(),
            Año = Fecha.getFullYear();

        var pHoras = document.getElementById("Hora"),
            pAMPM = document.getElementById("AMPM"),
            pMinutos = document.getElementById("Minutos"),
            pSegundos = document.getElementById("Segundos"),
            pDia_Semana = document.getElementById("Dia_Semana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pAño = document.getElementById("año");

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
        pDia_Semana.textContent = semana[diaSemana];
        pDia.textContent = dia
        var Mes_Actual = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        pMes.textContent = Mes_Actual[mes];
        pAño.textContent = Año

        if (Horas >= 12) {
            Horas = Horas - 12;
            ampm = 'PM';
        }
        else { ampm = 'AM'; }

        if (Horas == 0) {
            Horas = 12;
        }
        if (Horas < 10) {
            Horas = "0" + Horas
        }
        pHoras.textContent = Horas
        pAMPM.textContent = ampm
        if (Minutos < 10) {
            Minutos = "0" + Minutos
        }
        pMinutos.textContent = Minutos
        if (Segundos < 10) {
            Segundos = "0" + Segundos
        }
        pSegundos.textContent = Segundos
    };
    actualizar_Hora();
}


Reloj_Tiempo()

setInterval(Reloj_Tiempo, 1000)


// ================== CONTROL DE VOLUMEN DE LA MUSICA DE FONDO ==================
;(function () {
    var Musica_Fondo = document.getElementById("Fondo_Ciberpunk")
    var Slider_Volumen = document.getElementById("Slider_Volumen")
    var Icono_Volumen = document.getElementById("Icono_Volumen")

    if (!Musica_Fondo || !Slider_Volumen) return

    // El oido humano percibe el volumen de forma logaritmica, no lineal.
    // Por eso el valor del slider (0-100) se transforma con una curva
    // antes de aplicarse, asi el cambio SI se nota en todo el rango.
    function Convertir_A_Volumen_Real(valorSlider) {
        var v = valorSlider / 100
        return Math.pow(v, 3)
    }

    var Slider_Inicial = 15
    Slider_Volumen.value = Slider_Inicial

    function Actualizar_Icono(valorSlider) {
        if (!Icono_Volumen) return
        if (valorSlider == 0) { Icono_Volumen.textContent = "🔇" }
        else if (valorSlider < 50) { Icono_Volumen.textContent = "🔉" }
        else { Icono_Volumen.textContent = "🔊" }
    }

    function Aplicar_Volumen(valorSlider) {
        var vol = Convertir_A_Volumen_Real(valorSlider)
        Musica_Fondo.volume = vol
        Musica_Fondo.muted = (valorSlider == 0)
        Actualizar_Icono(valorSlider)
    }

    Aplicar_Volumen(Slider_Inicial)
    // Se vuelve a aplicar un instante despues, por si el navegador
    // reinicia el volumen al arrancar el autoplay de la musica.
    setTimeout(function () { Aplicar_Volumen(Slider_Volumen.value) }, 500)

    Slider_Volumen.addEventListener("input", function () {
        Aplicar_Volumen(Number(Slider_Volumen.value))
    })
})()
