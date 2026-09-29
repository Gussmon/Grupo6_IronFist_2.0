
Tiempolvl3 = 71 //VARIBLE DE INICIO TIEMPO
Puntajelvl3 = 0 //VARIABLE DE INICIO PUNTOS

//CONTENEDOR QUE CONTIENE TOO EL JUEGO
//DE POR SI ESTA FUNCION NO SE EJECUTA HASTA QUE SE LA LLAMA, MAS ADELANTE LA LLAMAREMOS
//PARA QUE EL JUEGO INICIE UNA VEZ SE PRESIONE JUGAR
function JUEGOlvl3() {
    Juego_Terminado_lvl3 = false //reseteamos la bandera de derrota por si es un reintento

    //FUNCION QUE REDUCE EL TIEMPO Y RESETEAL EL RESULTADO UNA VEZ LLEGUE A 0
    function Tiempo_Disminurlvl3() {
        Tiempolvl3--;
        document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3
        if (Tiempolvl3 == 0) {
            Mostrar_Derrotalvl3("Se agotó el tiempo.")
        }
    }
    Restar_Tiempolvl3 = setInterval(Tiempo_Disminurlvl3, 1000)

    //AÑADIMOS LA FUNCION AUMENTAR PUNTOS Y EXPULSAR AL PASAR EL CURSOR SOBRE LOS METEORITOS
    //(onmouseover en vez de addEventListener: si no, tras reintentar después de
    //perder se apilan listeners repetidos y suman puntos de más por pasada.
    //OJO: por eso mismo van juntas en un solo onmouseover por meteorito; asignarlas
    //por separado hace que la segunda pise a la primera y el puntaje no sume)
    document.getElementById("Meteoritolvl3").onmouseover = function () { Aumentar_Puntoslvl3(); Explulsarlvl3(); }
    document.getElementById("Meteorito2lvl3").onmouseover = function () { Aumentar_Puntoslvl3(); Explulsar2lvl3(); }
    document.getElementById("Meteorito3lvl3").onmouseover = function () { Aumentar_Puntoslvl3(); Explulsar3lvl3(); }
    document.getElementById("Meteorito4lvl3").onmouseover = function () { Aumentar_Puntoslvl3(); Explulsar4lvl3(); }


    //FUNCION QUE UNICAMENTE AUMENTA PUNTOS Y RESETEA LAS VARIABLES AL LLEGAR A CIERTO LIMITE
    function Aumentar_Puntoslvl3() {
        Puntajelvl3++;
        document.getElementById("Puntajelvl3").innerHTML = Puntajelvl3 + " / 24"
        if (Puntajelvl3 == 24) {
            Puntajelvl3 = 0
            Tiempolvl3 = 71
            function Contactos(){
            Swal.fire({
                title : 'Felicitaciones por parte del <br> Grupo 6<br><br><img src="IMG/logo_ironfist.png" width = "120px">',
                html: 'Sabía que lo lograrías, nos salvaste de la destrucción, pero ahora nos espera otra lucha. Esperemos volverte a ver jugando IRON FIST 2 en un futuro. <br><br> <b>EQUIPO:</b><br><br> Gustavo: 75397016@certus.edu.pe <br><br> Ivon: 74245717@certus.edu.pe <br><br> Geordi: 47613272@certus.edu.pe <br><br> Erick: 43065388@certus.edu.pe <br><br> Grecia: 72567857@certus.edu.pe <br><br> Edy: 75863011@certus.edu.pe',
                icon: 'success',
                confirmButtonText: '<span id="Pausear_musica">De acuerdo</span>',
                width: '50%',
                height: '80%',
                timer: 100000,
                timerProgressbar: true,
                customClass: {
                    popup: 'Modal_Mision',
                    title: 'Modal_Mision_Titulo',
                    htmlContainer: 'Modal_Mision_Texto',
                    confirmButton: 'Modal_Mision_Boton'
                },
                buttonsStyling: false,
                /*Funcion de cerrar la alerta*/
                allowOutsideClick: true,
                allowEscapeKey: false,
                allowEnterkey: false,
                stopKeydownPropagation: false,
                });
            }
            setTimeout(Contactos, 15000)

            
            document.getElementById("Fondo_Ciberpunk").pause()
            document.getElementById("Triunfo").play()

            function Ganaste_Pantallalvl3(){
            document.getElementById("Meteoritolvl3").style.left = "-70%"
            document.getElementById("Meteoritolvl3").style.transition = "0s"

            document.getElementById("Meteorito2lvl3").style.left = "-70%"
            document.getElementById("Meteorito2lvl3").style.transition = "0s"
            
            document.getElementById("Meteorito3lvl3").style.left = "-70%"
            document.getElementById("Meteorito3lvl3").style.transition = "0s"
            
            document.getElementById("Meteorito4lvl3").style.left = "-70%"
            document.getElementById("Meteorito4lvl3").style.transition = "0s"}

            setInterval(Ganaste_Pantallalvl3, 1)

            Tiempolvl3 = 71
            Puntajelvl3 = 0

            clearInterval(Intervalo_Dirlvl3)
            clearInterval(Intervalo_Dir2lvl3)
            clearInterval(Intervalo_Dir3lvl3)
            clearInterval(Intervalo_Dir4lvl3)
            clearInterval(Restar_Tiempolvl3)

            document.getElementById("Musica_Final").play()

            //Las naves salen de la Tierra (reposan a la derecha, left:130% en el CSS)
            //y avanzan hacia el centro del tablero, hacia donde venían los meteoritos
            document.getElementById("Pantalla_Ovnislvl3").style.left = "40%"
            document.getElementById("Pantalla_Ovnislvl3").style.transition = "6s"
            document.getElementById("Pantalla_Nodrizalvl3").style.left = "48%"
            document.getElementById("Pantalla_Nodrizalvl3").style.transition = "5s"
            document.getElementById("Pantalla_Ovnis2lvl3").style.left = "40%"
            document.getElementById("Pantalla_Ovnis2lvl3").style.transition = "6s"

            function Creditoslvl3() {
                document.getElementById("Pantalla_creditoslvl3").style.background = "black"
                document.getElementById("Creditoslvl3").style.top = "-15%"
                document.getElementById("Creditoslvl3").style.transition = "10s"
                document.getElementById("Proximolvl3").style.bottom = "-34%"
                document.getElementById("Proximolvl3").style.transition = "15s"
            }
            setTimeout(Creditoslvl3, 5000)
        }
    }

    //Antes los 4 usaban el rango completo (0-450) y a veces el azar los mandaba
    //a la misma altura, viéndose amontonados uno sobre otro. Ahora cada uno
    //tiene su propia franja del tablero.

    //ESTA FUNCION DIRIGE AL PRIMER METEORITO 1 A LA TIERRA
    function Meteorito_Direccionlvl3() {
        Distancia1lvl3 = 80
        Altura1lvl3 = Math.round(Math.random() * 90) //franja 1: 0-90px

        document.getElementById("Meteoritolvl3").style.left = Distancia1lvl3 + "%"
        document.getElementById("Meteoritolvl3").style.top = Altura1lvl3 + "px"
        document.getElementById("Meteoritolvl3").style.transition = "1.9s"
    }

    setTimeout(Meteorito_Direccionlvl3, 2200)
    Intervalo_Dirlvl3 = setInterval(Meteorito_Direccionlvl3, 2950)

    //ESTA FUNCION DIRIGE AL METEORITO 2 A LA TIERRA
    function Meteorito_Direccion2lvl3() {
        Distancia2lvl3 = 80
        Altura2lvl3 = 120 + Math.round(Math.random() * 90) //franja 2: 120-210px

        document.getElementById("Meteorito2lvl3").style.left = Distancia2lvl3 + "%"
        document.getElementById("Meteorito2lvl3").style.top = Altura2lvl3 + "px"
        document.getElementById("Meteorito2lvl3").style.transition = "1.9s"
    }

    setTimeout(Meteorito_Direccion2lvl3, 2660)
    Intervalo_Dir2lvl3 = setInterval(Meteorito_Direccion2lvl3, 2750)

    //ESTA FUNCION DIRIGE AL METEORITO 3 A LA TIERRA
    function Meteorito_Direccion3lvl3() {
        Distancia3lvl3 = 80
        Altura3lvl3 = 240 + Math.round(Math.random() * 90) //franja 3: 240-330px

        document.getElementById("Meteorito3lvl3").style.left = Distancia3lvl3 + "%"
        document.getElementById("Meteorito3lvl3").style.top = Altura3lvl3 + "px"
        document.getElementById("Meteorito3lvl3").style.transition = "1.9s"
    }

    setTimeout(Meteorito_Direccion3lvl3, 2900)
    Intervalo_Dir3lvl3 = setInterval(Meteorito_Direccion3lvl3, 2550)

    //ESTA FUNCION DIRIGE AL METEORITO 4 A LA TIERRA
    function Meteorito_Direccion4lvl3() {
        Distancia4lvl3 = 80
        Altura4lvl3 = 360 + Math.round(Math.random() * 90) //franja 4: 360-450px

        document.getElementById("Meteorito4lvl3").style.left = Distancia4lvl3 + "%"
        document.getElementById("Meteorito4lvl3").style.top = Altura4lvl3 + "px"
        document.getElementById("Meteorito4lvl3").style.transition = "1.9s"
    }

    setTimeout(Meteorito_Direccion4lvl3, 3100)
    Intervalo_Dir4lvl3 = setInterval(Meteorito_Direccion4lvl3, 2150)



    //(la asignación de Explulsar/2/3/4lvl3 ya se hizo arriba, combinada con Aumentar_Puntoslvl3,
    //para no pisar el conteo de puntaje)


    //ESTA ES LA FUNCION QUE EXPULSA AL METIRITO 1 DE MANERA ALEATORIA FUERA DEL MAPA
    function Explulsarlvl3() {
        document.getElementById("Puntos_sound").play()
        Distancialvl3 = "-500"
        Alturalvl3 = Math.round(Math.random() * 600)

        document.getElementById("Meteoritolvl3").style.left = Distancialvl3 + "px"
        document.getElementById("Meteoritolvl3").style.top = Alturalvl3 + "px"
        document.getElementById("Meteoritolvl3").style.transition = "1.7s"
    }


    //ESTA ES LA FUNCION QUE EXPULSA AL METIRITO 2 DE MANERA ALEATORIA FUERA DEL MAPA
    function Explulsar2lvl3() {
        document.getElementById("Punto2").play()
        Distancialvl3 = "-500"
        Alturalvl3 = Math.round(Math.random() * 500)

        document.getElementById("Meteorito2lvl3").style.left = Distancialvl3 + "px"
        document.getElementById("Meteorito2lvl3").style.top = Alturalvl3 + "px"
        document.getElementById("Meteorito2lvl3").style.transition = "1.7s"
    }


    //ESTA ES LA FUNCION QUE EXPULSA AL METIRITO 3 DE MANERA ALEATORIA FUERA DEL MAPA
    function Explulsar3lvl3() {
        document.getElementById("Punto3").play()
        Distancialvl3 = "-500"
        Alturalvl3 = Math.round(Math.random() * 600)

        document.getElementById("Meteorito3lvl3").style.left = Distancialvl3 + "px"
        document.getElementById("Meteorito3lvl3").style.top = Alturalvl3 + "px"
        document.getElementById("Meteorito3lvl3").style.transition = "1.7s"
    }

    //ESTA ES LA FUNCION QUE EXPULSA AL METIRITO 4 DE MANERA ALEATORIA FUERA DEL MAPA
    function Explulsar4lvl3() {
        document.getElementById("Punto4").play()
        Distancialvl3 = "-500"
        Alturalvl3 = Math.round(Math.random() * 600)

        document.getElementById("Meteorito4lvl3").style.left = Distancialvl3 + "px"
        document.getElementById("Meteorito4lvl3").style.top = Alturalvl3 + "px"
        document.getElementById("Meteorito4lvl3").style.transition = "1.7s"
    }



    //ESTA FUNCION SE ENCARGA DE ALERTARTE UNA VEZ EL METEORITO CRUZE LA LINEA CON UN PERDISTE
    //TAMBIEN RESETEA LOS VALORES Y LLEVA A LOS METEORITOS FUERA DEL MAPA DE MANERA INSTANTANEA
    function perdistelvl3() {
        Limitelvl3 = document.getElementById("Meteoritolvl3").offsetParent.offsetWidth * 0.70
        if ((document.getElementById("Meteoritolvl3").offsetLeft > Limitelvl3) ||
            (document.getElementById("Meteorito2lvl3").offsetLeft > Limitelvl3) ||
            (document.getElementById("Meteorito3lvl3").offsetLeft > Limitelvl3) ||
            (document.getElementById("Meteorito4lvl3").offsetLeft > Limitelvl3)) {

            Mostrar_Derrotalvl3("Los meteoritos llegaron a destino antes de tiempo: destruyeron gran parte del continente.")
        }
        else {


            document.getElementById("Meteoritolvl3").style.transition = "1.9s"
            document.getElementById("Meteorito2lvl3").style.transition = "1.9s"
            document.getElementById("Meteorito3lvl3").style.transition = "1.9s"
            document.getElementById("Meteorito4lvl3").style.transition = "1.9s"
        }
    }

    Chequeo_perdidalvl3 = setInterval(perdistelvl3, 1) //LE COLOCAMOS UNO PARA QUE SIEMPRE SE ESTE EJECUTANDO, DADO A
    //QUE NO SABEMOS CUANDO EL METEORITO VA A SUPERAR EL LIMITE
}

//---------------------------------------------------------------------------
//PANTALLA DE DERROTA (Nivel 3)
//Antes esto era un alert() nativo que se cerraba solo y el juego seguía al
//toque, sin darte tiempo para prepararte de nuevo. Ahora paramos todo,
//mostramos un aviso bonito (mismo estilo que el de victoria) y te devolvemos
//a la pantalla de inicio: le das "JUGAR" otra vez cuando estés listo.
Juego_Terminado_lvl3 = false
function Mostrar_Derrotalvl3(mensaje) {
    if (Juego_Terminado_lvl3) return
    Juego_Terminado_lvl3 = true

    clearInterval(Restar_Tiempolvl3)
    clearInterval(Intervalo_Dirlvl3)
    clearInterval(Intervalo_Dir2lvl3)
    clearInterval(Intervalo_Dir3lvl3)
    clearInterval(Intervalo_Dir4lvl3)
    clearInterval(Chequeo_perdidalvl3)
    clearInterval(Pause_offlvl3)
    //Estos dos NUNCA se limpiaban entre reintentos: se sumaban a los de la partida
    //anterior y el juego parecía "autoreiniciarse" solo al perder y volver a jugar.
    clearInterval(Intervalo_Cuenta_rglvl3)
    clearTimeout(tiempo_de_arranquelvl3)

    document.getElementById("Perdiste_sound").play()
    document.getElementById("Fondo_Ciberpunk").pause()

    document.getElementById("Meteoritolvl3").style.left = "-70%"
    document.getElementById("Meteoritolvl3").style.transition = "0s"
    document.getElementById("Meteorito2lvl3").style.left = "-70%"
    document.getElementById("Meteorito2lvl3").style.transition = "0s"
    document.getElementById("Meteorito3lvl3").style.left = "-70%"
    document.getElementById("Meteorito3lvl3").style.transition = "0s"
    document.getElementById("Meteorito4lvl3").style.left = "-70%"
    document.getElementById("Meteorito4lvl3").style.transition = "0s"

    Tiempolvl3 = 71
    Puntajelvl3 = 0
    Conteolvl3 = 4
    document.getElementById("Tiempolvl3").innerHTML = 70
    document.getElementById("Puntajelvl3").innerHTML = 0 + " / 24"

    //OJO: a propósito NO volvemos a mostrar el título/dificultad ni la pantalla
    //Startlvl3 (se queda oculta). Así, al cerrar el aviso, los meteoritos caen
    //directo, sin pantallas ni cuenta regresiva de por medio.
    document.getElementById("Pausa_Pantallalvl3").style.display = "none"

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
        //Al cerrar el aviso los meteoritos caen de inmediato, sin cuenta
        //regresiva ni pantallas de por medio.
        Reintentarlvl3_SinCuenta()
    })
}



//LE DECIMOS QUE AL PRESIONAR EL BOTON JUGAR EJECUTARA LA FUNCION PLAY     
document.getElementById("Playlvl3").addEventListener('click', PLAYlvl3)

//ESTE ES EL CONTEO DE LA CUENTA REGRESIVA QUE SE DA DESPUEZ DE PRESINAR JUGAR
Conteolvl3 = 4
//Declaramos esto de antemano para que el clearInterval/clearTimeout defensivo de
//PLAYlvl3() no rompa todo la primera vez que se presiona JUGAR (variable no definida)
var Intervalo_Cuenta_rglvl3, tiempo_de_arranquelvl3
//Este también: solo se creaba si el jugador pausaba al menos una vez. Si perdías
//SIN haber pausado nunca, Mostrar_Derrotalvl3() explotaba en su clearInterval
//(variable no definida) y se cortaba a la mitad: meteoritos "chocados"
//congelados y nunca volvía la pantalla de inicio ni el aviso de "Has perdido".
var Pause_offlvl3

//ESTA FUNCION EJECUTA UN CONJUNTO DE ACCIONES AL PRESIONAR JUGAR (solo la primera vez)
function PLAYlvl3() {
    //MUEVE EL TITULO FUERA DEL CONTENEDOR UNA VEZ DE CLICK A JUGAR
    document.getElementById("Textolvl3").style.left = "-900px"
    //MUEVE AL BOTON PLAY TRANS PRESIONAR PRESIONAR AL MISMO BOTON
    document.getElementById("Playlvl3").style.left = "-900px"
    //MUEVE LA DIFICULTAD AL PRESIONAR JUGAR
    document.getElementById("Dificultadlvl3").style.left = "-900px"
    Reintentarlvl3()
}

//Separado de PLAYlvl3() para que, al perder y reintentar, no vuelva a aparecer
//encima el título/menú de dificultad (ya quedaron escondidos desde la primera
//vez). Solo: aviso "Has perdido" -> ENTENDIDO -> cuenta regresiva -> meteoritos.
function Reintentarlvl3() {
    //Por si quedó algo corriendo de un intento anterior (defensivo)
    clearInterval(Intervalo_Cuenta_rglvl3)
    clearTimeout(tiempo_de_arranquelvl3)
    Conteolvl3 = 4

    document.getElementById("Fondo_Ciberpunk").play()
    function ARRACARlvl3(){
        JUEGOlvl3()}
    //INVOCA AL JUEGO UNA VEZ PASEN 4 SEGUNDO - OSEA UNA VEZ TERMINE EL CONTADOR
    tiempo_de_arranquelvl3 =  setTimeout(ARRACARlvl3, 4100)
    //ESTA FUNCION EJECUTA LA CUENTA REGRESIVA Y RETIRA LA PANTALLA START
    function ESPERARlvl3() {
        function Cuenta_rglvl3() {
            Conteolvl3--;
            document.getElementById("RGBlvl3").innerHTML = Conteolvl3
            if (Conteolvl3 == -1) {
                document.getElementById("Contenedor_contadorlvl3").style.display = "none"

                function Borrarlvl3() {
                    document.getElementById("Startlvl3").style.display = "none"

                    DETENER_JUEGOlvl3()
                } //HABILITA LA FUNCION DE PAUSE Y REANUDAR UNA VEZ CARGUE EL JUEGO
                setTimeout(Borrarlvl3, 500)
            }
        }
        //Guardamos el id (antes anónimo) para poder limpiarlo en Mostrar_Derrotalvl3/PLAYlvl3
        //y que no se acumule con el de un reintento anterior.
        Intervalo_Cuenta_rglvl3 = setInterval(Cuenta_rglvl3, 1000)
    }

    setTimeout(ESPERARlvl3, 350)
} //SE EJECUTARA EN UN LAPSO DE 350, DESPUES DE PRESIONAR EL BOTON

//Esta es la que usa Mostrar_Derrotalvl3() al reintentar: sin cuenta regresiva,
//los meteoritos caen de inmediato al cerrar el aviso "Has perdido".
function Reintentarlvl3_SinCuenta() {
    clearInterval(Intervalo_Cuenta_rglvl3)
    clearTimeout(tiempo_de_arranquelvl3)
    document.getElementById("Fondo_Ciberpunk").play()
    document.getElementById("Startlvl3").style.display = "none"
    DETENER_JUEGOlvl3()
    JUEGOlvl3()
}


//ESTA FUNCION CONTIENE EL REANUDE Y PAUSE DEL BOTON
function DETENER_JUEGOlvl3() {
    //INDICA QUE LA FUNCION DE PAUSE SE EJECUTARA UNA VEZ SE DE CLICK AL BOTON DE PAUSE        
    document.getElementById("Pauselvl3").onclick = PAUSElvl3 //onclick reemplaza en vez de apilarse en cada reintento tras perder
    //ESTA VARIABLE INDICA SI SE EJECUTA O NO EL DESPAUSEO
    Activolvl3 = 1
    //HACE QUE EL JUEGO SE DETENGA
    function PAUSElvl3() {
        //SI LLEGA A UNA EJECUTA LA FUNCION PAUSE
        if (Activolvl3 == 1) {
            document.getElementById("Pausa_Pantallalvl3").style.display = "table"
            clearInterval(Restar_Tiempolvl3) //BORRAMOS LA FUNCION DE TIEMPO
            document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3
            document.getElementById("Fondo_Ciberpunk").pause()
            function Meteorito_detenerlvl3() {
                clearInterval(Intervalo_Dirlvl3)
                clearInterval(Intervalo_Dir2lvl3)
                clearInterval(Intervalo_Dir3lvl3)
                clearInterval(Intervalo_Dir4lvl3)

                document.getElementById("Meteoritolvl3").style.left = document.getElementById("Meteoritolvl3").offsetLeft + "px"
                document.getElementById("Meteorito2lvl3").style.left = document.getElementById("Meteorito2lvl3").offsetLeft + "px"
                document.getElementById("Meteorito3lvl3").style.left = document.getElementById("Meteorito3lvl3").offsetLeft + "px"
                document.getElementById("Meteorito4lvl3").style.left = document.getElementById("Meteorito4lvl3").offsetLeft + "px"

                document.getElementById("Meteoritolvl3").style.top = document.getElementById("Meteoritolvl3").offsetTop + "px"
                document.getElementById("Meteorito2lvl3").style.top = document.getElementById("Meteorito2lvl3").offsetTop + "px"
                document.getElementById("Meteorito3lvl3").style.top = document.getElementById("Meteorito3lvl3").offsetTop + "px"
                document.getElementById("Meteorito4lvl3").style.top = document.getElementById("Meteorito4lvl3").offsetTop + "px"
            }

            Pause_offlvl3 = setInterval(Meteorito_detenerlvl3, 0.01) //LE ASEGNAMOS UNA ID, PARA BORRALO UNA VEZ SE DESPAUSEE
            Activolvl3 = 2
        }
        //CAMBIAMOS EL VALOR PARA QUE AL VOLVER A DARLE CLICK EJECUTE LA CONDICIONAL DE REANUDAR
        else { //LA FUNCION DE REANUDAR
            document.getElementById("Pausa_Pantallalvl3").style.display = "none"
            //BORRAMOS LA FUNCION, PARA QUE EL REANUDAR PUEDA EJECUTARSE DE NUEVO
            document.getElementById("Fondo_Ciberpunk").play()
            clearInterval(Pause_offlvl3)

            function Tiempo_Disminurlvl3() { //VOLVEMOS A CREAR LA FUNCION DE TIEMPO PARA QUE REANUDE EL CONTEO
                Tiempolvl3--;
                document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3
                if (Tiempolvl3 == 0) {
                    Mostrar_Derrotalvl3("Se agotó el tiempo.")
                }
            }

            Restar_Tiempolvl3 = setInterval(Tiempo_Disminurlvl3, 1000)

            document.getElementById("Meteoritolvl3").style.left = Distancia1lvl3 + "%"
            document.getElementById("Meteoritolvl3").style.top = Altura1lvl3 + "px"
            document.getElementById("Meteoritolvl3").style.transition = "2.7s"

            document.getElementById("Meteorito2lvl3").style.left = Distancia2lvl3 + "%"
            document.getElementById("Meteorito2lvl3").style.top = Altura2lvl3 + "px"
            document.getElementById("Meteorito2lvl3").style.transition = "2.7s"

            
            document.getElementById("Meteorito3lvl3").style.left = Distancia3lvl3 + "%"
            document.getElementById("Meteorito3lvl3").style.top = Altura3lvl3 + "px"
            document.getElementById("Meteorito3lvl3").style.transition = "2.7s"
            
            document.getElementById("Meteorito4lvl3").style.left = Distancia4lvl3 + "%"
            document.getElementById("Meteorito4lvl3").style.top = Altura4lvl3 + "px"
            document.getElementById("Meteorito4lvl3").style.transition = "2.7s"
            
            //ESTA FUNCION DIRIGE AL METEORITO 1 A LA TIERRA
            //(mismas franjas que en JUEGOlvl3, para que no se amontonen al reanudar)
            function Meteorito_Direccionlvl3() {
                Distancia1lvl3 = 80
                Altura1lvl3 = Math.round(Math.random() * 90)

                document.getElementById("Meteoritolvl3").style.left = Distancia1lvl3 + "%"
                document.getElementById("Meteoritolvl3").style.top = Altura1lvl3 + "px"
                document.getElementById("Meteoritolvl3").style.transition = "1.9s"
            }

            setTimeout(Meteorito_Direccionlvl3, 2000)
            Intervalo_Dirlvl3 = setInterval(Meteorito_Direccionlvl3, 2430)

            //ESTA FUNCION DIRIGE AL METEORITO 2 A LA TIERRA
            function Meteorito_Direccion2lvl3() {
                Distancia2lvl3 = 80
                Altura2lvl3 = 120 + Math.round(Math.random() * 90)

                document.getElementById("Meteorito2lvl3").style.left = Distancia2lvl3 + "%"
                document.getElementById("Meteorito2lvl3").style.top = Altura2lvl3 + "px"
                document.getElementById("Meteorito2lvl3").style.transition = "1.9s"
            }

            setTimeout(Meteorito_Direccion2lvl3, 2000)
            Intervalo_Dir2lvl3 = setInterval(Meteorito_Direccion2lvl3, 2350)

            //ESTA FUNCION DIRIGE AL METEORITO 3 A LA TIERRA
            function Meteorito_Direccion3lvl3() {
                Distancia3lvl3 = 80
                Altura3lvl3 = 240 + Math.round(Math.random() * 90)

                document.getElementById("Meteorito3lvl3").style.left = Distancia3lvl3 + "%"
                document.getElementById("Meteorito3lvl3").style.top = Altura3lvl3 + "px"
                document.getElementById("Meteorito3lvl3").style.transition = "1.9s"
            }

            setTimeout(Meteorito_Direccion3lvl3, 2000)
            Intervalo_Dir3lvl3 = setInterval(Meteorito_Direccion3lvl3, 2250)

            //ESTA FUNCION DIRIGE AL METEORITO 4 A LA TIERRA
            function Meteorito_Direccion4lvl3() {
                Distancia4lvl3 = 80
                Altura4lvl3 = 360 + Math.round(Math.random() * 90)

                document.getElementById("Meteorito4lvl3").style.left = Distancia4lvl3 + "%"
                document.getElementById("Meteorito4lvl3").style.top = Altura4lvl3 + "px"
                document.getElementById("Meteoritolvl3").style.transition = "1.9s"
            }
        
            setTimeout(Meteorito_Direccion4lvl3, 2000)
            Intervalo_Dir4lvl3 = setInterval(Meteorito_Direccion4lvl3, 2150)
            
            //BORRAMOS LA FUNCION, PARA QUE EL REANUDAR PUEDA EJECUTARSE DE NUEVO

            Activolvl3 = 1
        }
    }
} //CAMBIAMOS EL VALOR DE NUEVO A 1 PARA QUE AL SIGUIENTE CLICK SE EJECUTE EL PAUSE  S