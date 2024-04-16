function calcularPromedio() {
    var notas = [];
    for (var i = 1; i <= 8; i++) {
        var nota = parseFloat(document.getElementById("nota" + i).value);
        if (isNaN(nota) || nota === "") {
            alert("Por favor, complete todas las notas.");
            document.getElementById("nota" + i).focus();
            return;
        }
        notas.push(nota);
    }

    var promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;

    alert("El promedio final es: " + promedio.toFixed(2));

    if (promedio > 85) {
        alert("¡Estás exento de ordinario!");
    } else {
        alert("Debes presentar examen ordinario.");
    }
}