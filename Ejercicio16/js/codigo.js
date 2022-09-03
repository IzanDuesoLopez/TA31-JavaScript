/**
 * Al ejecutar la aplicación
 */
window.addEventListener("load", () => {
    // Llamamos al reloj
    reloj();
    function reloj() {
        var fecha = new Date;

        var horas = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();

        document.getElementById("horas").innerHTML = horas;
        document.getElementById("minutos").innerHTML = minutos;
        document.getElementById("segundos").innerHTML = segundos;
        // Una vez pasado 1 segundo, salimos de la función y la volvemos a llamar
        setTimeout(reloj, 1000);
    }
});



