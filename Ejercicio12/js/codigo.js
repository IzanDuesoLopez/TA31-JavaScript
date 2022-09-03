var validarFecha = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g; // Formato de la fecha
var validarMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Formato del email
var palabras = /(\w+)\s(\w+)/; // Formato para las dos palabras
var eliminarScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

// Pedimos al usuario que introduzcaa una frase
var frase = prompt("Introduce una frase: "); 

// Comprobamos si hay una fecha valida en la frase introducida por el usuario
if(frase.match(validarFecha)){
    alert("Fecha correcta: " + frase.match(validarFecha));
} else {
    alert("Formato de fecha incorrecto en la frase: " + frase);
}

// Pedimos al usuario que introduzca un email
var email = prompt("Introduce una dirección de correo electronico: ");

// Comprobamos si el email es correcto
if(email.match(validarMail)){
    alert("Email valido: " + email);
} else {
    alert("Email no valido: " + email);
}

// Función de reemplazo de caracteres con expresión regular
function escapeHTML(str) {
    return str.replace('&','&amp;').replace('"\"','&quot;').replace('<','&lt;').replace('>','&gt;');
}

alert(escapeHTML("&\<> buenos días")) // Mostramos por pantalla

// Pedimos al usuario que introduzca dos palabras 
var palabrasUsuario = prompt("Introduce dos palabras separadas por un espacio: ");

// Les hacemos un intercambio
var resultado = palabrasUsuario.replace(palabras, '$2 $1');

// Mostramos por pantalla el resultado
alert(resultado); 

// Frase de prueba que le pedimos al usuario
var fraseScript = prompt("Introduce una frase que contenga <script></script>");

// Reemplazamos las etiquetas script
fraseScript = fraseScript.replace(eliminarScript, "Done");

// Escribimos la frase resultante en el body
document.write(fraseScript);