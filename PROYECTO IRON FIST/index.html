<!--llamado al script js-->
<script>
// ================================================
// IRON FIST - VERSION PROFESIONAL CON LUCES LED
// Actualizado completo para LENINSHENKA
// Todas las 15 correcciones incluidas
// ================================================

// ==================== VARIABLES GLOBALES ====================
let Tiempo = 71;
let Puntaje = 0;
let Activo = 1;           // 1 = Jugando / 2 = Pausa
let Narracion = 1;
let Graficos = 1;

// ==================== SONIDO LUCES LED ====================
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function tocarLED(frecuencia, duracion, tipo = 'sine', volumen = 0.4) {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = tipo;
    osc.frequency.setValueAtTime(frecuencia, audioContext.currentTime);
    gain.gain.value = volumen;
    osc.connect(gain).connect(audioContext.destination);
    osc.start();
    setTimeout(() => {
        gain.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.05);
        osc.stop(audioContext.currentTime + 0.1);
    }, duracion);
}

// ==================== NARRACIÓN ====================
document.getElementById("Contenedor_narracion").addEventListener('click', () => {
    if (Narracion === 1) {
        document.getElementById("narracion").play();
        document.getElementById("VOLUMEN").style.display = "none";
        document.getElementById("PAUSE").style.display = "table";
        Narracion = 2;
    } else {
        document.getElementById("narracion").pause();
        document.getElementById("VOLUMEN").style.display = "table";
        document.getElementById("PAUSE").style.display = "none";
        Narracion = 1;
    }
});

// ==================== FONDO / MODOS ====================
function Graficos_fondo() {
    const fondo = document.getElementById("Fondo");
    const circulo = document.getElementById("Recursos");
    if (Graficos === 1) {
        circulo.style.marginLeft = "60%";
        fondo.classList.add("Modo_Oscuro");
        Graficos = 2;
    } else {
        circulo.style.marginLeft = "0%";
        fondo.classList.remove("Modo_Oscuro");
        Graficos = 1;
    }
}

// ==================== JUEGO NIVEL 1 ====================
function JUEGO() {
    const Meteiorito = document.getElementById("Meteiorito");
    const Meteiorito2 = document.getElementById("Meteiorito2");
    const Perdiste_sound = document.getElementById("Perdiste_sound");
    const Puntos_sound = document.getElementById("Puntos_sound");
    const Punto2_sound = document.getElementById("Punto2");
    const Triunfo = document.getElementById("Triunfo");
    const Ganaste_audio = document.getElementById("Ganaste");
    const Barra_Progreso = document.getElementById("Barra_Progreso");

    // === TIEMPO ===
    let intervaloTiempo = setInterval(() => {
        Tiempo--;
        document.getElementById("Tiempo").innerHTML = Tiempo;

        if (Tiempo <= 10) tocarLED(880, 80, 'triangle', 0.3);

        if (Tiempo === 0) {
            clearInterval(intervaloTiempo);
            Tiempo = 71;
            Puntaje = 0;
            document.getElementById("Puntaje").innerHTML = `0&nbsp;/&nbsp;27`;
            Barra_Progreso.style.width = "0%";

            Perdiste_sound.play();
            Swal.fire({
                title: 'GAME OVER',
                html: 'Se acabó el tiempo.<br><br>Los meteoritos llegaron a la Tierra.<br><br>¡Inténtalo de nuevo!',
                icon: 'error',
                background: '#1a1a2e',
                color: '#fff',
                confirmButtonText: 'REINTENTAR',
                confirmButtonColor: 'rgb(100, 21, 146)',
                width: '40%'
            });
        }
    }, 1000);

    // === PUNTOS + LUCES LED ===
    const intervaloPuntos = setInterval(() => {
        Meteiorito.addEventListener('mouseover', () => {
            Puntaje++;
            document.getElementById("Puntaje").innerHTML = Puntaje + "&nbsp;/&nbsp;27";
            Barra_Progreso.style.width = (Puntaje / 27 * 100) + "%";

            tocarLED(1200, 120, 'sine', 0.6);
            tocarLED(1600, 80, 'sawtooth', 0.4);

            if (Puntaje === 27) {
                clearInterval(intervaloPuntos);
                clearInterval(intervaloTiempo);
                Puntaje = 0;

                Triunfo.play();
                Ganaste_audio.play();

                document.getElementById("GANASTE_PANTALLA").style.display = "flex";

                Swal.fire({
                    title: '¡FELICIDADES! NIVEL SUPERADO',
                    html: 'Has salvado la Tierra.<br><br>¡Eres un verdadero Iron Fist!',
                    icon: 'success',
                    background: '#0f0f23',
                    color: '#00ff9d',
                    confirmButtonText: 'CONTINUAR',
                    confirmButtonColor: 'rgb(100, 21, 146)',
                    width: '50%'
                });
            }
        });
    }, 100);

    // === MOVIMIENTO METEORITOS ===
    let distancia1 = 80, altura1 = 200;
    let distancia2 = 80, altura2 = 200;

    const moverMeteoro = () => {
        Meteiorito.style.left = distancia1 + "%";
        Meteiorito.style.top = altura1 + "px";
        distancia1 = 80 + Math.random() * 30;
        altura1 = Math.random() * 450;
    };

    const moverMeteoro2 = () => {
        Meteiorito2.style.left = distancia2 + "%";
        Meteiorito2.style.top = altura2 + "px";
        distancia2 = 80 + Math.random() * 30;
        altura2 = Math.random() * 450;
    };

    setTimeout(moverMeteoro, 2000);
    setTimeout(moverMeteoro2, 2600);
    setInterval(moverMeteoro, 2430);
    setInterval(moverMeteoro2, 2350);

    // === PERDIDA (GAME OVER) ===
    setInterval(() => {
        if (Meteiorito.offsetLeft > 630 || Meteiorito2.offsetLeft > 630) {
            Perdiste_sound.play();
            Swal.fire({
                title: 'GAME OVER',
                html: 'Un meteorito impactó la Tierra.<br><br>¡Mantente atento!',
                icon: 'error',
                background: '#1a1a2e',
                color: '#fff',
                confirmButtonText: 'REINTENTAR',
                confirmButtonColor: 'rgb(100, 21, 146)',
                width: '40%'
            });
            Meteiorito.style.left = "-70%";
            Meteiorito.style.transition = "0s";
            Meteiorito2.style.left = "-70%";
            Meteiorito2.style.transition = "0s";
            Tiempo = 71;
            Puntaje = 0;
        }
    }, 1);
}

// ==================== PLAY ====================
document.getElementById("Play").addEventListener('click', () => {
    document.getElementById("Fondo_Ciberpunk").play();

    document.getElementById("Texo").style.left = "-900px";
    document.getElementById("Contenedor_Mensaje_Star").style.left = "-100%";

    setTimeout(() => {
        JUEGO();
    }, 4100);
});

// ==================== PAUSA / REANUDAR ====================
function DETENER_JUEGO() {
    document.getElementById("Pause").addEventListener('click', () => {
        if (Activo === 1) {
            document.getElementById("Fondo_Ciberpunk").pause();
            document.getElementById("Pausa_Pantalla").style.display = "table";
            Activo = 2;
        } else {
            document.getElementById("Pausa_Pantalla").style.display = "none";
            document.getElementById("Fondo_Ciberpunk").play();
            Activo = 1;
        }
    });
}

// ==================== TRANSICIONES ====================
function Mover() {
    var contenedor = document.getElementById("Seccion_01");
    contenedor.style.transition = "top 0.9s ease-in-out, opacity 0.9s ease-in-out";
    contenedor.style.top = "-100%";
    contenedor.style.opacity = "0";
    setTimeout(() => {
        var Reglas = document.getElementById("Reglas");
        Reglas.style.transition = "top 0.8s ease-out, opacity 0.8s ease-out";
        Reglas.style.top = "3%";
        Reglas.style.opacity = "1";
        contenedor.style.display = "none";
    }, 900);
}

function Mover_2() {
    var Reglas_Sacar = document.getElementById("Reglas");
    Reglas_Sacar.style.transition = "1.4s";
    Reglas_Sacar.style.top = "-100%";
    setTimeout(() => {
        var contenedor_2 = document.getElementById("Seccion_2");
        var imagen = document.getElementById("Imagen");
        var mensaje = document.getElementById("Mensaje");
        var titulo = document.getElementById("Titulo_historia");

        Reglas_Sacar.style.display = "none";
        contenedor_2.style.top = "0%";
        imagen.style.left = "2%";
        mensaje.style.right = "2%";
        titulo.style.left = "2%";
    }, 1260);
}

function Mover_3() {
    var contenedor_2 = document.getElementById("Seccion_2");
    var Supremo = document.getElementById("Seccion_suprema");
    contenedor_2.style.transition = "1.4s";
    Supremo.style.height = "160vh";
    contenedor_2.style.top = "-100%";
    setTimeout(() => {
        var Seccion_Juego = document.getElementById("Seccion_Juego");
        Seccion_Juego.style.left = "0%";
        contenedor_2.style.display = "none";
    }, 900);
}

// ==================== RELOJ ====================
function Reloj_Tiempo() {
    var actualizar_Hora = () => {
        var Fecha = new Date();
        var Horas = Fecha.getHours();
        var ampm = Horas >= 12 ? 'PM' : 'AM';
        if (Horas >= 12) Horas -= 12;
        if (Horas === 0) Horas = 12;
        if (Horas < 10) Horas = "0" + Horas;
        var Minutos = Fecha.getMinutes();
        if (Minutos < 10) Minutos = "0" + Minutos;
        var Segundos = Fecha.getSeconds();
        if (Segundos < 10) Segundos = "0" + Segundos;

        document.getElementById("Hora").textContent = Horas;
        document.getElementById("AMPM").textContent = ampm;
        document.getElementById("Minutos").textContent = Minutos;
        document.getElementById("Segundos").textContent = Segundos;

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var Mes_Actual = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        document.getElementById("Dia_Semana").textContent = semana[Fecha.getDay()];
        document.getElementById("dia").textContent = Fecha.getDate();
        document.getElementById("mes").textContent = Mes_Actual[Fecha.getMonth()];
        document.getElementById("año").textContent = Fecha.getFullYear();
    };
    actualizar_Hora();
}
Reloj_Tiempo();
setInterval(Reloj_Tiempo, 1000);
</script>
</body>
</html>
