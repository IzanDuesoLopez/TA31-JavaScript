var dadoUno;
var dadoDos;
var historico = new Array();
var posiblesValores = {2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0};
var resultadoFinal = "";

// Guardamos en el array historico las sumas de los dos dados
for (let i = 0; i < 36000; i++) {
    dadoUno = numeroEnteroAleatorio(1,6);
    dadoDos = numeroEnteroAleatorio(1,6);
    var resultado = dadoUno + dadoDos;
    historico.push(resultado);
    // Aumentamos en 1 el indice del resultado. Ejemplo -> 2:1
    posiblesValores[resultado]+=1;
}

// Recorremos el vector de clave - valor
for (let key in posiblesValores) {
    // Guardamos en clave el valor que tiene la posición de la clave
    let clave = posiblesValores[key];
    resultadoFinal += "Suma = " + key + " -> " + clave + " \n";
}

alert(resultadoFinal);

// Mostramos por consola los valores del array historico
for (let i = 0; i < historico.length; i++) {
    console.log(historico[i]);
}

// Funcion que pasado un entero minimo y maximo nos devuelve un número 
// aleatorio entre estos valores
function numeroEnteroAleatorio(numMin, numMax){
    numMin = Math.ceil(numMin);
    numMax = Math.floor(numMax);
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}//