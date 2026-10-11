/* =========================================================
   IRON FIST — Parallax 3D de la portada (Evidencia 4)  [version optimizada]
   Archivo NUEVO. Lee la posicion del mouse (o la inclinacion del celular)
   y la suaviza. Escribe --px / --py (-1 a 1) SOLO en la escena 3D y en el logo
   (antes se escribian en <body> y obligaba al navegador a recalcular toda la pagina).
   El ciclo se detiene solo cuando no hay movimiento.
   ========================================================= */
(function () {
    var seccion = document.getElementById("Seccion_01");
    var escena = document.getElementById("Escena_3D");
    var logo = document.querySelector(".Nombre_Logo");
    if (!seccion || !escena) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var objetivoX = 0, objetivoY = 0;   // hacia donde apunta el mouse
    var actualX = 0, actualY = 0;       // valor suavizado que se aplica
    var ultimoX = "", ultimoY = "";
    var activo = false;

    function limitar(v) { return Math.max(-1, Math.min(1, v)); }

    function escribir() {
        var x = actualX.toFixed(3), y = actualY.toFixed(3);
        if (x === ultimoX && y === ultimoY) return;       // sin cambios: no se toca el CSS
        ultimoX = x; ultimoY = y;
        escena.style.setProperty("--px", x); escena.style.setProperty("--py", y);
        if (logo) { logo.style.setProperty("--px", x); logo.style.setProperty("--py", y); }
    }

    function ciclo() {
        if (seccion.style.display === "none") { objetivoX = 0; objetivoY = 0; }   // Mover() oculta la portada
        actualX += (objetivoX - actualX) * 0.08;
        actualY += (objetivoY - actualY) * 0.08;
        if (Math.abs(objetivoX - actualX) < 0.001 && Math.abs(objetivoY - actualY) < 0.001) {
            actualX = objetivoX; actualY = objetivoY;
            escribir();
            activo = false;                                // en reposo: el ciclo se detiene
            return;
        }
        escribir();
        requestAnimationFrame(ciclo);
    }
    function despertar() { if (!activo) { activo = true; requestAnimationFrame(ciclo); } }

    seccion.addEventListener("pointermove", function (e) {
        var r = seccion.getBoundingClientRect();
        objetivoX = limitar(((e.clientX - r.left) / r.width - 0.5) * 2);
        objetivoY = limitar(((e.clientY - r.top) / r.height - 0.5) * 2);
        despertar();
    }, { passive: true });
    seccion.addEventListener("pointerleave", function () { objetivoX = 0; objetivoY = 0; despertar(); });

    // En celulares con giroscopio: inclinar el telefono mueve las capas
    window.addEventListener("deviceorientation", function (e) {
        if (e.gamma === null || e.beta === null) return;
        objetivoX = limitar(e.gamma / 30);
        objetivoY = limitar((e.beta - 45) / 30);
        despertar();
    });
})();
