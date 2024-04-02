function avisoHuracan(hayUnHuracan) {
    if (hayUnHuracan) {
      mostrarMensaje("¡Hay un Huracán!");
    } else {
      mostrarMensaje("Está Soleado");
    }
  }
  
  function mostrarMensaje(mensaje) {
    const mensajeElemento = document.createElement("p");
    
    mensajeElemento.textContent = mensaje;
  
    const body = document.body;
  
    body.appendChild(mensajeElemento);
  }
  