function startProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval); 
        } else {
            width++; 
            progressBar.style.width = width + "%"; 
            progressBar.textContent = width + "%"; 
        }
    }, 30); 
}

// Usar IntersectionObserver para detectar cuando la sección entra en la vista
const compromisoSection = document.getElementById("compromiso-section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startProgressBar(); 
            observer.unobserve(compromisoSection); 
        }
    });
}, { threshold: 0.5 }); 

observer.observe(compromisoSection); 