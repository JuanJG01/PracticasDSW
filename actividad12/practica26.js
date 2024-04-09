// Se declara un arreglo `maravillas` que contiene los nombres de los archivos de imágenes de las maravillas.
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];

// Se declara un arreglo `correcta` que contiene los índices de las respuestas correctas para cada pregunta.
let correcta = [1, 0, 2, 1, 2, 0, 1];

// Se declara un arreglo `opciones` que contiene arreglos de opciones para cada pregunta.
let opciones = [];

// Se añaden arreglos de opciones para cada pregunta al arreglo `opciones`.
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

// Se inicializan variables globales `posActual` y `cantidadAcertadas`.
let posActual = 0;
let cantidadAcertadas = 0;

// La función `comenzarJuego` oculta la pantalla inicial y muestra la pantalla de juego.
function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();
}

// La función `cargarMaravilla` muestra la siguiente pregunta del juego o termina el juego si no hay más preguntas.
function cargarMaravilla() {
    if (maravillas.length <= posActual) {
        terminarJuego();
    } else {
        limpiarOpciones();

        // Se actualiza la imagen de la maravilla y las opciones de respuesta en la pantalla de juego.
        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

// La función `limpiarOpciones` elimina los estilos de las opciones de respuesta para la siguiente pregunta.
function limpiarOpciones() {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

// La función `comprobarRespuesta` verifica si la opción seleccionada es correcta o incorrecta y actualiza la puntuación.
function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) {
        // Si la respuesta es correcta, se actualizan los estilos y se incrementa la cantidad de respuestas correctas.
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {
        // Si la respuesta es incorrecta, se actualizan los estilos de la opción incorrecta y se muestra la opción correcta.
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarMaravilla, 1000); // Se carga la siguiente pregunta después de un segundo.
}

// La función `terminarJuego` oculta la pantalla de juego y muestra la pantalla final con la puntuación.
function terminarJuego() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

// La función `volverAlInicio` oculta la pantalla final y muestra la pantalla inicial.
function volverAlInicio() {
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}
