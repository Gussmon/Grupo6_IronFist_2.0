/* ===== VIDA DE LA TIERRA =====
   3 vidas por nivel. Cuando un meteorito cruza la linea roja la Tierra pierde 1 vida
   (el meteorito se reinicia y el juego sigue). Con 0 vidas se pierde la mision.
   Uso en cada nivel:
     Vida_Golpe(nivel, [elementosMeteorito]) -> true si aun quedan vidas (continuar), false si se acabaron
     Vida_Reiniciar(nivel)                  -> restaura las 3 vidas (al ganar o al perder/reintentar)
*/
var Vida_Max = 3
var Vida_Actual = { 1: 3, 2: 3, 3: 3 }
var Vida_Cooldown = false

function Vida_Contenedor(nivel) { return document.querySelector(".Contenedorlvl" + nivel) }

function Vida_Crear(nivel) {
    var cont = Vida_Contenedor(nivel)
    if (!cont || cont.querySelector(".Vida_Tierra")) return
    var d = document.createElement("div")
    d.className = "Vida_Tierra"
    d.id = "Vida_Tierra_" + nivel
    d.setAttribute("role", "img")
    d.innerHTML = '<img class="Vida_Icono" src="IMG/planeta_tierra.png" alt="">' +
        '<span class="Vida_Texto">TIERRA</span><span class="Vida_Segmentos">' +
        '<i class="Vida_Seg"></i><i class="Vida_Seg"></i><i class="Vida_Seg"></i></span>'
    cont.appendChild(d)
    Vida_Dibujar(nivel)
}

function Vida_Dibujar(nivel) {
    var d = document.getElementById("Vida_Tierra_" + nivel)
    if (!d) return
    var v = Vida_Actual[nivel]
    d.setAttribute("data-vidas", v)
    d.setAttribute("aria-label", "Vida de la Tierra: " + v + " de " + Vida_Max)
    var segs = d.querySelectorAll(".Vida_Seg")
    for (var i = 0; i < segs.length; i++) segs[i].classList.toggle("perdida", i >= v)
}

function Vida_Reiniciar(nivel) {
    Vida_Actual[nivel] = Vida_Max
    Vida_Cooldown = false
    Vida_Dibujar(nivel)
}

function Vida_Golpe(nivel, meteoritos) {
    if (Vida_Cooldown) return true
    Vida_Cooldown = true
    setTimeout(function () { Vida_Cooldown = false }, 1200)

    Vida_Actual[nivel] = Math.max(0, Vida_Actual[nivel] - 1)
    Vida_Dibujar(nivel)

    var d = document.getElementById("Vida_Tierra_" + nivel)
    if (d) { d.classList.remove("Golpe"); void d.offsetWidth; d.classList.add("Golpe") }
    var cont = Vida_Contenedor(nivel)
    if (cont) {
        var f = document.createElement("div"); f.className = "Destello_Impacto"
        cont.appendChild(f); setTimeout(function () { f.remove() }, 650)
    }
    var snd = document.getElementById("Perdiste_sound")
    if (snd && Vida_Actual[nivel] > 0) { try { snd.currentTime = 0; snd.play() } catch (e) { } }

    // el meteorito que impacto se saca del tablero para que no vuelva a contar
    for (var i = 0; i < meteoritos.length; i++) {
        var m = document.getElementById(meteoritos[i])
        if (m && m.offsetLeft > m.offsetParent.offsetWidth * 0.70) {
            m.style.transition = "0s"; m.style.left = "-70%"
        }
    }
    return Vida_Actual[nivel] > 0
}

document.addEventListener("DOMContentLoaded", function () { Vida_Crear(1); Vida_Crear(2); Vida_Crear(3) })
