/**
 * Función que recibe por parámetro la ID de un div, y cambia la imagen del contenedor
 * central de la página
 * @param {*} numDiv 
 */
function cambiarFondo(numDiv) {
    switch (numDiv) {
        case 1:
            document.getElementById("contenedor").style.backgroundImage = "url(imagenes/foto1.jpg)";
            document.getElementById("texto").innerHTML = "Imagen1";
            break;
        case 2:
            document.getElementById("contenedor").style.backgroundImage = "url(imagenes/foto2.jpg)";
            document.getElementById("texto").innerHTML = "Imagen2";
            break;
        case 3:
            document.getElementById("contenedor").style.backgroundImage = "url(imagenes/foto3.jpg)";
            document.getElementById("texto").innerHTML = "Imagen3";
            break;
        case 4:
            document.getElementById("contenedor").style.backgroundImage = "url(imagenes/foto4.jpg)";
            document.getElementById("texto").innerHTML = "Imagen4";
            break;
        case 5:
            document.getElementById("contenedor").style.backgroundImage = "url(imagenes/foto5.jpg)";
            document.getElementById("texto").innerHTML = "Imagen5";
            break;
        case 6:
            document.getElementById("contenedor").style.backgroundImage = "url(imagenes/foto6.jpg)";
            document.getElementById("texto").innerHTML = "Imagen6";
            break;
        case 7:
            document.getElementById("contenedor").style.backgroundImage = "url(imagenes/foto7.jpg)";
            document.getElementById("texto").innerHTML = "Imagen7";
            break;
        case 8:
            document.getElementById("contenedor").style.backgroundImage = "url(imagenes/foto8.jpg)";
            document.getElementById("texto").innerHTML = "Imagen8";
            break;
    }
}