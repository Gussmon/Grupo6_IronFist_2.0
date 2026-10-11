/* =========================================================
   IRON FIST — Parallax 3D de la portada (Evidencia 4)
   Archivo NUEVO. Lee la posicion del mouse (o la inclinacion del celular)
   y la suaviza para que cada capa se mueva con profundidad distinta.
   Solo escribe dos variables CSS: --px y --py (rango -1 a 1) en <body>.
   ========================================================= */
(function () {
    var seccion = document.getElementById("Seccion_01");
    var cuerpo = document.getElementById("Fondo");
    if (!seccion || !cuerpo) return;

    var sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (sinMovimiento.matches) return;

    var objetivoX = 0, objetivoY = 0;   // hacia donde apunta el mouse
    var actualX = 0, actualY = 0;       // valor suavizado que se aplica
    var cuadro = null;

    function limitar(v) { return Math.max(-1, Math.min(1, v)); }

    seccion.addEventListener("pointermove", function (e) {
        var r = seccion.getBoundingClientRect();
        objetivoX = limitar(((e.clientX - r.left) / r.width - 0.5) * 2);
        objetivoY = limitar(((e.clientY - r.top) / r.height - 0.5) * 2);
    });
    seccion.addEventListener("pointerleave", function () { objetivoX = 0; objetivoY = 0; });

    // En celulares con giroscopio: inclinar el telefono mueve las capas
    window.addEventListener("deviceorientation", function (e) {
        if (e.gamma === null || e.beta === null) return;
        objetivoX = limitar(e.gamma / 30);
        objetivoY = limitar((e.beta - 45) / 30);
    });

    function animar() {
        var oculta = seccion.style.display === "none";   // Mover() oculta la portada al pulsar JUGAR
        if (oculta) { objetivoX = 0; objetivoY = 0; }

        actualX += (objetivoX - actualX) * 0.07;
        actualY += (objetivoY - actualY) * 0.07;
        cuerpo.style.setProperty("--px", actualX.toFixed(4));
        cuerpo.style.setProperty("--py", actualY.toFixed(4));

        // Si la portada ya no se ve y el fondo volvio al centro, se detiene el ciclo
        if (oculta && Math.abs(actualX) < 0.002 && Math.abs(actualY) < 0.002) {
            cuerpo.style.setProperty("--px", 0);
            cuerpo.style.setProperty("--py", 0);
            cuadro = null;
            return;
        }
        cuadro = requestAnimationFrame(animar);
    }
    cuadro = requestAnimationFrame(animar);
})();
