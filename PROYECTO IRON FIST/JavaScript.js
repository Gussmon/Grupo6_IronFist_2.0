Swal.fire({
    title : '¿Preparado para salvar el mundo? <br><br> <img src="IMG/planeta_tierra.png" width = "120px"><br>',
    html: 'IRON FIST, es un juego que mejorara tus reflejos a medida que pases de nivel, retandote cada vez mas a medida que avances y desbloqueando grandes logros al final de cada nivel, esperamos te diviertas y disfrutes de este gran juego   ',
    icon: 'sucess',
    confirmButtonText: 'ESTOY PREPARADO',
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



Tiempo = 71 //VARIBLE DE INICIO TIEMPO
Puntaje = 0 //VARIABLE DE INICIO PUNTOS



//FUNCION DE NARRACIONES

Narracion = 1
document.getElementById("Contenedor_narracion").addEventListener('click',  Iniciar_narracion)

function Iniciar_narracion(){
    if(Narracion == 1){
    document.getElementById("narracion").play()
    document.getElementById("VOLUMEN").style.display = "none"
    document.getElementById("PAUSE").style.display = "table"
    Narracion = 2}
    else{
        document.getElementById("narracion").pause()
        document.getElementById("VOLUMEN").style.display = "table"
        document.getElementById("PAUSE").style.display = "none"
        Narracion = 1
    }
}




Graficos = 1 //Este es el medidor de graficos

//En esta funcion cambio de fondo al presionar el CHEKBOX, para graurar los graficos dentro del juego
function Graficos_fondo(){
Contenedor_RQ = document.getElementById("Contenedor_RC")
if(Graficos == 1){
document.getElementById("Recursos").style.marginLeft = "60%"
document.getElementById("Fondo").style.background = "url(IMG/Fondo_Espacio2.jpg)"
document.getElementById("Fondo").style.backgroundAttachment = "fixed"
document.getElementById("Fondo").style.backgroundRepeat = "no-repeat"
document.getElementById("Fondo").style.backgroundSize = "100% 120%"
Graficos = 2}
else{
document.getElementById("Recursos").style.marginLeft = "0%"
document.getElementById("Fondo").style.backgroundImage = "url(IMG/Fondo_Espacio.gif) "
Graficos = 1
}
}






//CONTENEDOR QUE CONTEIENE TOO EL JUEGO
//DE POR SI ESTA FUNCION NO SE EJECUTA HASTA QUE SE LA LLAMA, MAS ADELANTE LA LLAMAREMOS
//PARA QUE EL JUEGO INICIE UNA VEZ SE PRESIONE JUGAR
function JUEGO(){

    function Tiempo_Disminur(){ //FUNCION QUE REDUCE EL TIEMPO Y RESETEAL EL RESULTADO UNA VEZ LLEGUE A 0
        Tiempo--;
        document.getElementById("Tiempo").innerHTML = Tiempo
        if(Tiempo == 0){
            Tiempo = 71
            Puntaje = 0
            document.getElementById("Perdiste_sound").play()
            alert("Lo lamento, perdiste.")} }

    
        Restar_Tiempo = setInterval(Tiempo_Disminur, 1000)

        //AÑADIMOS LA FUNCION AUMENTAR PUNTOS AL PASAR EL CURSOR SOBRE LOS METEORITOS
        document.getElementById("Meteorito").addEventListener('mouseover', Aumentar_Puntos)
        document.getElementById("Meteorito2").addEventListener('mouseover', Aumentar_Puntos)


        //FUNCION QUE UNICAMENTE AUMENTA PUNTOS Y RESETEA LAS VARIABLES AL LLEGAR A CIERTO LIMITE
        function Aumentar_Puntos(){
            Puntaje++;
            document.getElementById("Puntaje").innerHTML = Puntaje + "&nbsp;/&nbsp;27"
            if(Puntaje == 27){
                Puntaje = 0 
                Tiempo = 71


                document.getElementById("NEXT").addEventListener('click', Habilitar_Siguienten_LVL)
                function Habilitar_Siguienten_LVL(){
                document.getElementById("NIVEL_01").style.display = "none"
                document.getElementById("NIVEL_02").style.display = "block"}
                document.getElementById("Tiempo").innerHTML = 70
                document.getElementById("Puntaje").innerHTML = 0+"&nbsp;/&nbsp;"+27
                document.getElementById("Triunfo").play()
                document.getElementById("Fondo_Ciberpunk").pause()
                document.getElementById("Puntos_sound").pause()
                document.getElementById("Punto2").pause()
                document.getElementById("GANASTE_PANTALLA").style.display = "flex"
                
                function Ganaste_Pantalla(){

                    clearInterval(Reanudar_trayectoria)
                    clearInterval(Reanudar_trayectoria2)
                    clearInterval(Restar_Tiempo)

                    document.getElementById("Meteorito").style.left = "-70%"
                    document.getElementById("Meteorito").style.transition = "0s"

                    document.getElementById("Meteorito2").style.left = "-70%"
                    document.getElementById("Meteorito2").style.transition = "0s"}
                    
                Desbloquear_Pantalla  =  setInterval(Ganaste_Pantalla, 1)

                Swal.fire({
                    title : 'Felicidades por superar <br> el nivel <br><br> <img src="IMG/Check.png" width = "120px"><br>',
                    html: 'Al parecer nos salvamos, agradecemos tu ayuda y ezfuerzo al superar este nivel, esperamos seguir contando contigo, si algo mas sucede y por cierto, no olvides que te esperan grandes cosas al final del juego asi que no pares de intentar ',
                    icon: 'sucess',
                    confirmButtonText: 'QUIERO CONTINUAR',
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
        function Meteorito_Direccion(){
            Distancia1 = 80
            Altura1 = Math.round(Math.random()* 450)

            document.getElementById("Meteorito").style.left = Distancia1 + "%"
            document.getElementById("Meteorito").style.top = Altura1 + "px"}

            setTimeout(Meteorito_Direccion, 2000)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
            Reanudar_trayectoria = setInterval(Meteorito_Direccion, 2430)//LUEGO SE VA A LLAMAR A LOS METEORITOS CADA 2,4 SEGUNDOS


        //ESTA FUNCION DIRIGE AL SEGUNDO METEORITO A LA TIERRA         
        function Meteorito_Direccion2(){
            Distancia2 = 80
            Altura2 = Math.round(Math.random()* 450)

            document.getElementById("Meteorito2").style.left = Distancia2 + "%"
            document.getElementById("Meteorito2").style.top = Altura2 + "px"}

            setTimeout(Meteorito_Direccion2, 2600)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
            Reanudar_trayectoria2 = setInterval(Meteorito_Direccion2, 2350)//LUEGO SE VA A LLAMAR A LOS METEORITOS CADA 2,3 SEGUNDOS


        //AQUI ADJUNTAMOS LA ACCION DE LA FUNCION EXPULSAR AL PASAR SOBRE EL METEORITO
        document.getElementById("Meteorito").addEventListener('mouseover', Expulsar)
        document.getElementById("Meteorito2").addEventListener('mouseover', Expulsar2)


        //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 1 DE MANERA ALEATORIA FUERA DEL MAPA
        function Expulsar (){
            document.getElementById("Puntos_sound").play()
            Distancia = "-500"
            Altura = Math.round(Math.random()* 450)

            document.getElementById("Meteorito").style.left = Distancia + "px"
            document.getElementById("Meteorito").style.top = Altura + "px"
            document.getElementById("Meteorito").style.transition = "1.8s"}


        //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 2 DE MANERA ALEATORIA FUERA DEL MAPA
        function Expulsar2 (){
            document.getElementById("Punto2").play()
            Distancia = "-500"
            Altura = Math.round(Math.random()* 450)
    
            document.getElementById("Meteorito2").style.left = Distancia + "px"
            document.getElementById("Meteorito2").style.top = Altura + "px"
            document.getElementById("Meteorito2").style.transition = "1.8s"}




        
        //ESTA FUNCION SE ENCARGA DE ALERTARTE UNA VEZ EL METEORITO CRUCE LA LINEA CON UN PERDISTE
        //TAMBIEN RESETEA LOS VALORES Y LLEVA A LOS METEORITOS FUERA DEL MAPA DE MANERA INSTANTANEA
        function perdiste (){
            //Antes esto comparaba contra un pixel fijo (630) pensado para
            //un tablero de 900px. Ahora el tablero es responsivo, así que
            //calculamos el 70% del ancho REAL del tablero en cada momento,
            //para que coincida siempre con la línea roja (.Limitelvl1).
            var anchoTablero = document.getElementById("Meteorito").offsetParent.offsetWidth
            var limite = anchoTablero * 0.70

            if((document.getElementById("Meteorito").offsetLeft > limite) ||
            (document.getElementById("Meteorito2").offsetLeft > limite)) {

                document.getElementById("Perdiste_sound").play()
                alert("Ya es demasiado tarde: los meteoritos destruyeron gran parte del continente.")
                document.getElementById("Meteorito").style.left = "-70%"
                document.getElementById("Meteorito").style.transition = "0s"

                document.getElementById("Meteorito2").style.left = "-70%"
                document.getElementById("Meteorito2").style.transition = "0s"
                
                Tiempo = 71
                Puntaje = 0 }
        
            else {
                document.getElementById("Meteorito").style.transition = "2.4s"
                document.getElementById("Meteorito2").style.transition = "2.4s"} }

        setInterval(perdiste, 1)//LE COLOCAMOS UNO PARA QUE SIEMPRE SE ESTE EJECUTANDO, DADO A 
        //QUE NO SABEMOS CUANDO EL METEORITO VA A SUPERAR EL LIMITE
        }

        
        //LE DECIMOS QUE AL PRECIONAR EL BOTON JUGAR EJECUTARA LA FUNCION PLAY     
        document.getElementById("Play").addEventListener('click', PLAY)

        Conteo = 4 //ESTE ES EL CONTEO DE LA CUENTA REGRESIVA QUE SE DA DESPUEZ DE PRESINAR JUGAR
            
            //ESTA FUNCION EJECUTA UN CONJUNTO DE ACCIONES AL PRESIONAR JUGAR
            function PLAY(){
                document.getElementById("Fondo_Ciberpunk").play()
                //MUEVE EL TITULO FUERA DEL CONTENEDOR UNA VEZ DE CLICK A JUGAR
                document.getElementById("Texo").style.left = "-900px" 
                //MUEVE AL BOTON PLAY TRANS PRESIONAR PRESIONAR AL MISMO BOTON
                document.getElementById("Contenedor_Mensaje_Star").style.left = "-100%" 
                    //ESTA FUNCION CONTIENE AL JUEGO COMO TAL
                    function ARRACAR(){    
                        JUEGO()}
                //INVOCA AL JUEGO UNA VEZ PASEN 4 SEGUNDO - OSEA UNA VEZ TERMINE EL CONTADOR
                tiempo_de_arranque =  setTimeout(ARRACAR, 4100)
                //ESTA FUNCION EJECUTA LA CUENTA REGRESIVA Y RETIRA LA PANTALLA START 
                function ESPERAR(){
                    function Cuenta_rg(){
                        Conteo--;
                        document.getElementById("RGB").innerHTML = Conteo
                        if(Conteo == -1){
                        document.getElementById("Contenedor_contador").style.display = "none"
                        function Borrar(){
                        document.getElementById("Start").style.display = "none"

                            DETENER_JUEGO() }//HABILITA LA FUNCION DE PAUSE Y REANUDAR UNA VEZ CARGUE EL JUEGO
                        setTimeout(Borrar, 500) }  }
                        setInterval (Cuenta_rg, 1000)}

                        setTimeout(ESPERAR, 350)}//SE EJECUTARA EN UN LAPSO DE 350, DESPUES DE PRESIONAR EL BOTON





            //ESTA FUNCION CONTIENE EL REANUDE Y PAUSE DEL BOTON
            function DETENER_JUEGO (){
                //INDICA QUE LA FUNCION DE PAUSE SE EJECUTARA UNA VEZ SE DE CLICK AL BOTON DE PAUSE        
                document.getElementById("Pause").addEventListener('click', PAUSE)
                //ESTA VARIABLE INDICA SI SE EJECUTA O NO EL DESPAUSEO
                Activo = 1 
                    //HACE QUE EL JUEGO SE DETENGA
                    function PAUSE(){ //Colocar la funcion de pausa y reanudar
                        //SI LLEGA A UNA EJECUTA LA FUNCION PAUSE
                        if (Activo == 1){
                        
                        document.getElementById("Fondo_Ciberpunk").pause()
                        document.getElementById("Pausa_Pantalla").style.display = "table"
                        clearInterval(Restar_Tiempo)//BORRAMOS LA FUNCION DE TIEMPO
                        document.getElementById("Tiempo").innerHTML = Tiempo
                        clearInterval(Reanudar_trayectoria2)
                        clearInterval(Reanudar_trayectoria)

                            function Meteorito_detener (){   
                            document.getElementById("Meteorito").style.left = document.getElementById("Meteorito").offsetLeft + "px" 
                            document.getElementById("Meteorito2").style.left = document.getElementById("Meteorito2").offsetLeft + "px" 

                            document.getElementById("Meteorito").style.top = document.getElementById("Meteorito").offsetTop + "px" 
                            document.getElementById("Meteorito2").style.top = document.getElementById("Meteorito2").offsetTop + "px" }

                            Pusae_offf = setInterval(Meteorito_detener, 1) //LE ASEGNAMOS UNA ID, PARA BORRALO UNA VEZ SE DESPAUSEE
                            Activo = 2} //CAMBIAMOS EL VALOR PARA QUE AL VOLVER A DARLE CLICK EJECUTE LA CONDICIONAL DE REANUDAR

                        else { //LA FUNCION DE REANUDAR
                            clearInterval(Pusae_offf) //BORRAMOS LA FUNCION, PARA QUE EL REANUDAR PUEDA EJECUTARSE DE NUEVO
                            document.getElementById("Pausa_Pantalla").style.display = "none"
                            document.getElementById("Fondo_Ciberpunk").play()
                            function Tiempo_Disminur(){//VOLVEMOS A CREAR LA FUNCION DE TIEMPO PARA QUE REANUEDE EL CONTEO
                                Tiempo--;
                                document.getElementById("Tiempo").innerHTML = Tiempo
                                if(Tiempo == 0){
                                    Tiempo = 71
                                    Puntaje = 0
                                document.getElementById("Perdiste_sound").play()    
                                alert("Lo lamento, perdiste.")
                                document.getElementById("Meteorito").style.left = "-70%"
                                document.getElementById("Meteorito").style.transition = "0s" //CREAR UNA FUNCION EN BASE A ESTO Y PASAR COMO REANUDAR EN GANASTE
                
                                document.getElementById("Meteorito2").style.left = "-70%"
                                document.getElementById("Meteorito2").style.transition = "0s"}
                                
                                else{
                                    document.getElementById("Meteorito").style.transition = "2.4s"
                                    document.getElementById("Meteorito2").style.transition = "2.4s"}}

                        Restar_Tiempo = setInterval(Tiempo_Disminur, 1000)
        
                        document.getElementById("Meteorito").style.left = Distancia1 + "%"
                        document.getElementById("Meteorito").style.top = Altura1 + "px"
                        document.getElementById("Meteorito").style.transition = "2.4s"

                        document.getElementById("Meteorito2").style.left = Distancia2 + "%"
                        document.getElementById("Meteorito2").style.top = Altura2 + "px"
                        document.getElementById("Meteorito2").style.transition = "2.4s"

                        
                        function Meteorito_Direccion(){
                            Distancia1 = 80
                            Altura1 = Math.round(Math.random()* 450)
                
                            document.getElementById("Meteorito").style.left = Distancia1 + "%"
                            document.getElementById("Meteorito").style.top = Altura1 + "px"}
                
                            setTimeout(Meteorito_Direccion, 2000)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
                            Reanudar_trayectoria = setInterval(Meteorito_Direccion, 2430)//LUEGO SE VA A LLAMAR A LOS METEORITOS CADA 2,4 SEGUNDOS
                
                
                        //ESTA FUNCION DIRIGE AL SEGUNDO METEORITO A LA TIERRA         
                        function Meteorito_Direccion2(){
                            Distancia2 = 80
                            Altura2 = Math.round(Math.random()* 450)
                
                            document.getElementById("Meteorito2").style.left = Distancia2 + "%"
                            document.getElementById("Meteorito2").style.top = Altura2 + "px"}
                
                            setTimeout(Meteorito_Direccion2, 2000)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
                            Reanudar_trayectoria2 = setInterval(Meteorito_Direccion2, 2350)//LUEGO SE VA A LLAMAR A LOS METEORITOS CADA 2,3 SEGUNDOS





                        Activo = 1} } } //CAMBIAMOS EL VALOR DE NUEVO A 1 PARA QUE AL SIGUIENTE CLICK SE EJECUTE EL PAUSE  S




    




//TRANSICIONES ENTRE PAGINAS----------------------------------------------------------------------------------



function Mover() {//TRANSICION DE LA PRIMERA SECCION A LA SEGUNDA
    var contenedor = document.getElementById("Seccion_01")
    contenedor.style.top = "-100%"
    contenedor.style.transition = "2s"
    function Desaparecer(){
    var contenedor = document.getElementById("Seccion_01")
    var Reglas = document.getElementById("Reglas")

    Reglas.style.top = "3%"
    Reglas.style.transition = "1s"
    contenedor.style.display = "none"


    }
    setTimeout(Desaparecer,1090)

}


function Mover_2(){
    var Reglas_Sacar = document.getElementById("Reglas") 


    Reglas_Sacar.style.top = "-100%"
    Reglas_Sacar.style.transition = "1.4s"



    function Desaparecer2(){
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


function Mover_3 (){//TRANSICION DE LA SEGUNDA SECCION A LA TERCERA 

var contenedor_2 = document.getElementById("Seccion_2")
var Supremo = document.getElementById("Seccion_suprema")

document.getElementById("narracion").pause()
contenedor_2.style.top = "-100%"
contenedor_2.style.transition = "1.4s"
Supremo.style.height = "160vh" //Le aumente para que no tape al contenedor del juego


    function Desaparaceer3(){
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


function Reloj_Tiempo(){
    var actualizar_Hora = function(){
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
            pDia_Semana.textContent = semana [diaSemana];
            pDia.textContent = dia
            var Mes_Actual = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
            pMes.textContent = Mes_Actual[mes];
            pAño.textContent = Año

            if(Horas >= 12){
                Horas = Horas - 12;
                ampm = 'PM';
            }
            else{ampm = 'AM';}

            if(Horas == 0){
                Horas = 12;
            }
            if(Horas < 10){
                Horas = "0" + Horas
            }
            pHoras.textContent = Horas
            pAMPM.textContent = ampm
            if(Minutos < 10){
                Minutos = "0" + Minutos
            }
            pMinutos.textContent = Minutos
            if(Segundos < 10){
                Segundos = "0" + Segundos
            }
            pSegundos.textContent = Segundos
        };
    actualizar_Hora();
}


Reloj_Tiempo()

setInterval(Reloj_Tiempo, 1000)