function startProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval); // Detener la animación al llegar a 100%
        } else {
            width++; // Incrementar el ancho
            progressBar.style.width = width + "%"; // Ajustar el ancho de la barra
            progressBar.textContent = width + "%"; // Actualizar el texto del porcentaje
        }
    }, 30); // Intervalo de tiempo para la animación
}

// Usar IntersectionObserver para detectar cuando la sección entra en la vista
const compromisoSection = document.getElementById("compromiso-section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startProgressBar(); // Llama a la animación cuando la sección es visible
            observer.unobserve(compromisoSection); // Deja de observar después de activarse una vez
        }
    });
}, { threshold: 0.5 }); // 0.5 significa que la mitad de la sección debe estar visible para activarse

observer.observe(compromisoSection); // Inicia la observación