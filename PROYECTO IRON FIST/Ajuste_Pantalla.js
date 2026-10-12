/* Ajusta el tamaño del area de juego para que titulo + nivel + botones quepan en la ventana
   (sin scroll). Usa transform: scale() sobre un contenedor propio: asi NO cambian las
   medidas internas (offsetLeft, offsetWidth...) que usa el juego para detectar colisiones
   y los eventos del mouse siguen funcionando igual. */
(function () {
    var ESCALA_MIN = 0.5
    var Escenario = null

    function Preparar() {
        var sec = document.getElementById("Seccion_Juego")
        if (!sec) return false
        Escenario = document.getElementById("Escenario_Juego")
        if (!Escenario) {
            Escenario = document.createElement("div")
            Escenario.id = "Escenario_Juego"
            while (sec.firstChild) Escenario.appendChild(sec.firstChild)
            sec.appendChild(Escenario)
        }
        return true
    }

    function Ajustar() {
        if (!Escenario && !Preparar()) return
        Escenario.style.transform = "none"
        var alto = Escenario.offsetHeight
        var ancho = Escenario.offsetWidth
        var z = Math.min(1, (window.innerHeight - 10) / alto, window.innerWidth / ancho)
        z = Math.max(ESCALA_MIN, z)
        Escenario.style.transform = z < 1 ? "scale(" + z + ")" : "none"
    }

    var temporizador
    function Programar() { clearTimeout(temporizador); temporizador = setTimeout(Ajustar, 60) }

    window.addEventListener("resize", Programar)
    window.addEventListener("orientationchange", Programar)
    document.addEventListener("click", function () { setTimeout(Ajustar, 150); setTimeout(Ajustar, 800) })
    window.addEventListener("load", function () {
        Preparar()
        ;["NIVEL_01", "NIVEL_02", "NIVEL3", "NEXT", "Nada"].forEach(function (id) {
            var e = document.getElementById(id)
            if (e) new MutationObserver(Programar).observe(e, { attributes: true, attributeFilter: ["style", "class"] })
        })
        Ajustar()
    })
})()
