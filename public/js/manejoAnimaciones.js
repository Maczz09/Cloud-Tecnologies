// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 && 
        rect.bottom >= 0
    );
}

// Función para manejar el scroll
function handleScroll() {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('is-visible');
        }
    });
}

// Agregar event listeners
document.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);