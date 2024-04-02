function verificarParImpar() {
    const numeroInput = document.getElementById('numero').value;
  
    if (!numeroInput || isNaN(numeroInput)) {
      alert('Por favor ingresa un número válido');
      return;
    }
  
    const numero = parseInt(numeroInput);
  
    if (numero % 2 === 0) {
      mostrarResultado(`${numero} es un número PAR.`);
    } else {
      mostrarResultado(`${numero} es un número IMPAR.`);
    }
  }
  
  function mostrarResultado(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
  }
  