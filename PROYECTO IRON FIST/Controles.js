/* =========================================================
   IRON FIST — Controles de la portada (Evidencia 4)
   Archivo NUEVO. No modifica JavaScript.js.
   1) Boton de silencio: corta TODO el audio y lleva la barra al minimo.
      Al volver a pulsarlo (o subir la barra) se restaura el volumen anterior.
   2) El switch de modo oscuro se puede usar con teclado y avisa su estado.
   ========================================================= */
(function () {
    var boton = document.getElementById("Boton_Silencio");
    var slider = document.getElementById("Slider_Volumen");
    if (boton && slider) {
        var audios = document.querySelectorAll("audio");   // musica, efectos y narracion
        var silencio = false;
        var volumenPrevio = Number(slider.value) > 0 ? Number(slider.value) : 35;

        function estadoActual() {
            var v = Number(slider.value);
            if (silencio || v === 0) return "mudo";
            return v < 50 ? "bajo" : "alto";
        }
        function pintar() {
            var e = estadoActual();
            boton.setAttribute("data-estado", e);
            boton.setAttribute("aria-pressed", e === "mudo" ? "true" : "false");
            boton.setAttribute("aria-label", e === "mudo" ? "Activar sonido" : "Silenciar todo el audio");
        }
        function aplicarSilencio(valor) {
            silencio = valor;
            for (var i = 0; i < audios.length; i++) { audios[i].muted = valor; }
            pintar();
        }

        boton.addEventListener("click", function () {
            if (!silencio && Number(slider.value) > 0) {
                volumenPrevio = Number(slider.value);       // se recuerda para restaurarlo
                slider.value = 0;                            // la barra baja al minimo
                slider.dispatchEvent(new Event("input"));    // JavaScript.js aplica el volumen 0 a la musica
                aplicarSilencio(true);                       // y se corta tambien el resto del audio
            } else {
                slider.value = volumenPrevio > 0 ? volumenPrevio : 35;
                slider.dispatchEvent(new Event("input"));
                aplicarSilencio(false);
            }
        });

        // Si el jugador mueve la barra: en 0 = silencio total, mayor que 0 = vuelve el sonido
        slider.addEventListener("input", function () {
            var v = Number(slider.value);
            if (v === 0) { aplicarSilencio(true); }
            else {
                volumenPrevio = v;
                if (silencio) { aplicarSilencio(false); } else { pintar(); }
            }
        });
        pintar();
    }

    // Switch de modo oscuro: teclado (Enter / Espacio) y estado para lectores de pantalla
    var interruptor = document.getElementById("Contenedor_RC");
    var cuerpo = document.getElementById("Fondo");
    if (interruptor && cuerpo) {
        interruptor.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); interruptor.click(); }
        });
        new MutationObserver(function () {
            interruptor.setAttribute("aria-checked", cuerpo.classList.contains("Modo_Oscuro") ? "true" : "false");
        }).observe(cuerpo, { attributes: true, attributeFilter: ["class"] });
    }
})();
