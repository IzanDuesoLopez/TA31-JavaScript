// Variables de clase
var lastButton; 
var lastNumberResta;
var lastNumMul;
var lastNumberSuma;
var lastNumberDivision;
var lastNumberRaiz;
var lastNumberPorc;
var lastNumberX;
var botonClicado = false;

// Función que pasada un input nos añade el núm en cuestión a la barra
function inputNumero(numeroInput) {
    let numero = document.getElementById("nums").value;
    if (numero == 0) {
        document.getElementById("nums").value = numeroInput;
    } else {
        document.getElementById("nums").value += numeroInput;
    }
    if(botonClicado){
        igual();
        botonClicado = false;
    }
}

// Función que añade 0 al input
function inputNumeroCero() {
    let numero = document.getElementById("nums").value;
    if (numero != 0) {
        document.getElementById("nums").value += 0;
    }
    if(botonClicado){
        igual();
        botonClicado = false;
    }
}

// Función para eliminar los nums
function clearNums() {
    document.getElementById("nums").value = 0;
}

// Función que coge el último núm dependiendo de la operación
// seleccionada
function añadirNumero(operacion) {
    botonClicado = true;
    switch (operacion) {
        case 1:
            lastButton = "suma";
            lastNumberSuma = document.getElementById("nums").value;
            break;
        case 2:
            lastButton = "resta";
            lastNumberResta = document.getElementById("nums").value;
            break;
        case 3:
            lastButton = "mul";
            lastNumMul = document.getElementById("nums").value;
            break;
        case 4:
            lastButton = "division";
            lastNumberDivision = document.getElementById("nums").value;
            break;
        case 5:
            lastButton = "raiz";
            lastNumberRaiz = document.getElementById("nums").value;
            igual();
            break;
        case 6:
            lastButton = "porc";
            lastNumberPorc = document.getElementById("nums").value;
            break;
        case 7:
            lastButton = "x";
            lastNumberX = document.getElementById("nums").value;
            igual();
            break;
        case 8:
            lastButton = "-";
            let numTemp = document.getElementById("nums").value;
            numTemp *= -1;
            document.getElementById("nums").value = numTemp;
            break;
        default:
            console.log("Default case.");
            break;
    }
    if(lastButton !== "raiz" && lastButton !== "x" && lastButton != "-"){
        document.getElementById("nums").value = 0;
    }
}

// Funcion que calcula el resultado de nuestra operación
function igual() {
    var resultado = 0;
    if (lastButton === "suma") {
        let numActual = document.getElementById("nums").value;
        resultado = parseInt(lastNumberSuma) + parseInt(numActual);
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "resta") {
        let numActual = document.getElementById("nums").value;
        resultado = lastNumberResta - numActual;
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "mul"){
        let numActual = document.getElementById("nums").value;
        resultado = lastNumMul * numActual;
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "division"){
        let numActual = document.getElementById("nums").value;
        resultado = lastNumberDivision / numActual;
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "raiz"){
        resultado = Math.sqrt(lastNumberRaiz);
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "porc"){
        let numActual = document.getElementById("nums").value;
        resultado = lastNumberPorc % numActual;
        document.getElementById("nums").value = resultado;
    } else if (lastButton === "x"){
        resultado = 1 / lastNumberX;
        document.getElementById("nums").value = resultado;
    }
}


