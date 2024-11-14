let count = 0;

function updateLoader() {
  // Convertimos el número a una cadena de 3 dígitos
  const countStr = count.toString().padStart(3, "0");

  // Actualizamos cada dígito en el loader
  document.getElementById("digit1").textContent = countStr[0];
  document.getElementById("digit2").textContent = countStr[1];
  document.getElementById("digit3").textContent = countStr[2];

  // Incrementamos el contador hasta 100
  if (count < 100) {
    count++;
    setTimeout(updateLoader, 70); // Velocidad de conteo
  }
}

// Iniciar el contador
updateLoader();
