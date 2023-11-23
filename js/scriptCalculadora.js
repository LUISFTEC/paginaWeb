function presionarNumero(numero) {
    var pantallaEntrada = document.getElementById("pantalla-entrada");
    var pantallaActual = pantallaEntrada.innerText;

    // Verifica si la pantalla de entrada está vacía o muestra un resultado anterior
    if (pantallaActual === '0' || pantallaActual === '') {
        pantallaEntrada.innerText = numero;
    } else {
        pantallaEntrada.innerText += numero;
    }
}
function calcularOperacion(operador) {
    var pantallaEntrada = document.getElementById("pantalla-entrada");
    var pantallaActual = pantallaEntrada.innerText;
    
    // Verifica si la pantalla de entrada está vacía o muestra un resultado anterior
    if (pantallaActual === '' || pantallaActual === '0') {
        // No hacer nada si la pantalla de entrada está vacía o muestra un "0"
    } else {
        pantallaEntrada.innerText += operador;
    }
}

function borrarTodo() {
    var pantallaEntrada = document.getElementById("pantalla-entrada");
    var pantallaResultado = document.getElementById("pantalla-resultado");
    
    // Limpiar la pantalla de entrada
    pantallaEntrada.innerText = '';

    // Limpiar también la pantalla de resultado
    pantallaResultado.innerText = '';
}


function borrarUltimoDigito() {
    var pantallaEntrada = document.getElementById("pantalla-entrada");
    var contenidoActual = pantallaEntrada.innerText;

    // Verifica si hay algo que borrar
    if (contenidoActual.length > 0) {
        // Elimina el último carácter
        pantallaEntrada.innerText = contenidoActual.slice(0, -1);
    }
}

function borrarEntrada() {
    var pantallaEntrada = document.getElementById("pantalla-entrada");
    var contenidoActual = pantallaEntrada.innerText.trim();

    if (contenidoActual.length === 0) {
        return; // Si la pantalla está vacía, no hay nada que borrar
    }

    // Operadores que se pueden usar en la calculadora
    var operadores = ['+', '-', '*', '/'];
    var ultimoCaracter = contenidoActual.slice(-1);

    // Comprueba si el último carácter es un operador
    if (operadores.includes(ultimoCaracter)) {
        // Si es un operador, borrar el operador
        pantallaEntrada.innerText = contenidoActual.slice(0, -1).trim();
    } else {
        // Si es un número, borrar hasta el último operador o el inicio
        var indiceUltimoOperador = -1;
        for (var i = contenidoActual.length - 1; i >= 0; i--) {
            if (operadores.includes(contenidoActual[i])) {
                indiceUltimoOperador = i;
                break;
            }
        }

        if (indiceUltimoOperador === -1) {
            // Si no hay operadores, borrar todo
            pantallaEntrada.innerText = '';
        } else {
            // Borrar el último número
            pantallaEntrada.innerText = contenidoActual.slice(0, indiceUltimoOperador + 1).trim();
        }
    }
}

function calcularResultado() {
    var pantallaEntrada = document.getElementById("pantalla-entrada");
    var pantallaResultado = document.getElementById("pantalla-resultado");
    var expresion = pantallaEntrada.innerText.trim();

    try {
        var resultado = eval(expresion);
        pantallaResultado.innerText = resultado.toString(); // Muestra el resultado en pantalla-resultado
    } catch (error) {
        pantallaResultado.innerText = "Error"; // Muestra error en pantalla-resultado
    }
}

function calcularCuadrado() {
    var pantallaEntrada = document.getElementById("pantalla-entrada");
    var numero = pantallaEntrada.innerText.trim();

    try {
        var cuadrado = Math.pow(parseFloat(numero), 2);
        pantallaEntrada.innerText = cuadrado.toString();
    } catch (error) {
        pantallaEntrada.innerText = "Error";
    }
}

function calcularRaizCuadrada() {
    var pantallaEntrada = document.getElementById("pantalla-entrada");
    var numero = pantallaEntrada.innerText.trim();

    try {
        var raiz = Math.sqrt(parseFloat(numero));
        pantallaEntrada.innerText = raiz.toString();
    } catch (error) {
        pantallaEntrada.innerText = "Error";
    }
}






