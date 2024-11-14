// Lista de URLs de tus imágenes de partners
const partners = [
    './assets/partners/checkpoint.png',
    './assets/partners/aruba.png',
    './assets/partners/attackSimulator.png',
    './assets/partners/extreme.png',
    './assets/partners/fortinet.png',
    './assets/partners/hewlettPackardEnterprise.png',
    './assets/partners/hillstone.png',
    './assets/partners/huawei.png',
    './assets/partners/imperva.png',
    './assets/partners/kemp.png',
    './assets/partners/paloalto.png',
    './assets/partners/proofpoint.png',
    './assets/partners/ridge.jpg',
    './assets/partners/sonicWall.png',
    './assets/partners/sophos.png',
    './assets/partners/tsplus.png',
    './assets/partners/veeam.png',
    './assets/partners/vmware.png'
];

// Selecciona el contenedor del carrusel
const carouselContainer = document.getElementById('carousel');

// Inserta las imágenes dos veces para crear un efecto continuo
function populateCarousel() {
    partners.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Partner Logo";
        img.classList.add('partner-logo');
        carouselContainer.appendChild(img);
    });

    // Repite las imágenes para el efecto continuo
    partners.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Partner Logo";
        img.classList.add('partner-logo');
        carouselContainer.appendChild(img);
    });
}

// Llama a la función para poblar el carrusel
populateCarousel();