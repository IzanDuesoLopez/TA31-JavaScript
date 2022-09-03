// Variables de clase
var lastNumber;
var botonClicado = false;
var puntoPuesto = false;

/**
 * Función que pasada un input nos añade el núm en cuestión a la barra
 * Si el número es 0 lo sustituimos por el nuevo input - Si el número no es 0, añadimos el input al valor existente
 * @param {*} numeroInput 
 */
function inputNumero(numeroInput) {
    let numero = document.getElementById("nums").value;
    numero == 0 ? document.getElementById("nums").value = numeroInput : document.getElementById("nums").value += numeroInput;
    botonClicado ? (igual(), botonClicado = false) : console.log(); // Si la flag es true, mostramos el resultado por pantalla
}

/**
 * Función que añade 0 al input
 */
function inputNumeroCero() {
    let numero = document.getElementById("nums").value; // Adquirimos el valor actual
    numero != 0 ? document.getElementById("nums").value += 0 : console.log(); // Si el número es diferente de 0, podemos añadir 0 al input
    botonClicado ? (igual(), botonClicado = false) : console.log(); // Si la flag es true, mostramos el resultado por pantalla
}

/**
 * Función para eliminar los nums
 */
function clearNums() {
    document.getElementById("nums").value = 0;
}

/**
 * Función que coge el último núm dependiendo de la operación
 * seleccionada
 * @param {*} operacion 
 */
function añadirNumero(operacion) {
    botonClicado = true;
    lastNumber = document.getElementById("nums").value;
    switch (operacion) {
        case 1:
            lastButton = "suma";
            break;
        case 2:
            lastButton = "resta";
            break;
        case 3:
            lastButton = "mul";
            break;
        case 4:
            lastButton = "division";
            break;
        case 5:
            lastButton = "raiz";
            igual();
            break;
        case 6:
            lastButton = "porc";
            break;
        case 7:
            lastButton = "x";
            igual();
            break;
        case 8:
            lastButton = "-";
            document.getElementById("nums").value = lastNumber *= -1;
            break;
        case 9:
            botonClicado = false; // Al darle al punto no hará el cálculo automáticamente
            lastButton = ".";
            if (!puntoPuesto) {
                document.getElementById("nums").value = lastNumber += '.';
                puntoPuesto = true;
            }
        default:
            break;
    }
    if (lastButton !== "raiz" && lastButton !== "x" && lastButton !== "-" && lastButton !== ".") {
        document.getElementById("nums").value = 0// Si el último boton presionado no es uno de los siguientes, input = 0
    }
}

/**
 * Funcion que calcula el resultado de nuestra operación
 */
function igual() {
    puntoPuesto = false; // Booleano que controla si ya hemos puento un punto en el input
    var resultado = 0;
    let numActual;
    if (lastButton === "suma") {
        numActual = document.getElementById("nums").value;
        resultado = parseInt(lastNumber) + parseInt(numActual); // Calculamos la suma
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "resta") {
        numActual = document.getElementById("nums").value;
        resultado = lastNumber - numActual; // Calculamos la resta
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "mul") {
        numActual = document.getElementById("nums").value;
        resultado = lastNumber * numActual; // Calculamos la multiplicación
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "division") {
        numActual = document.getElementById("nums").value;
        resultado = lastNumber / numActual; // Calculamos la división
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "raiz") {
        resultado = Math.sqrt(lastNumber); // Calculamos la raíz
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "porc") {
        numActual = document.getElementById("nums").value;
        resultado = lastNumber % numActual; // Calculamos el módulo
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "x") {
        resultado = 1 / lastNumber; // Calculamos 1/x
        document.getElementById("nums").value = resultado;
    }
}

/**
 * Eliminamos el último dígito del input actual
 */
function retroceder() {
    let numActual = document.getElementById("nums").value;
    let numActualString = numActual.toString();
    if (numActualString.length > 1) {
        var resultado = numActualString.replace(numActualString[numActualString.length - 1], '');
        document.getElementById("nums").value = parseInt(resultado);
    } else {
        document.getElementById("nums").value = 0;
    }
}