function OperacionesMatematicas(operacion, a, b) {
    switch (operacion) {
      case "sumar":
        return a + b;
      case "restar":
        return a - b;
      case "multiplicar":
        return a * b;
      case "dividir":
        if (b !== 0) {
          return a / b;
        } else {
          return "No se puede dividir entre 0";
        }
      case "residuo":
        return a % b;
      default:
        return 0;
    }
  }
  
  function realizarOperacion() {
    const operacion = document.getElementById("operacion").value;
    const valorA = parseFloat(document.getElementById("valorA").value);
    const valorB = parseFloat(document.getElementById("valorB").value);
  
    const resultado = OperacionesMatematicas(operacion, valorA, valorB);
  
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = `Resultado: ${resultado}`;
  }
  