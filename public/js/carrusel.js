
  // Lista de URLs de tus imágenes
  const partners = [
    'public/assets/partners/checkpoint.png',
    'public/assets/partners/aruba.png',
    'public/assets/partners/attackSimulator.png',
    'public/assets/partners/extreme.png',
    'public/assets/partners/fortinet.png',
    'public/assets/partners/hewlettPackardEnterprise.png',
    'public/assets/partners/hillstone.png',
    'public/assets/partners/huawei.png',
    'public/assets/partners/imperva.png',
    'public/assets/partners/kemp.png',
    'public/assets/partners/paloalto.png',
    'public/assets/partners/proofpoint.png',
    'public/assets/partners/ridge.jpg',
    'public/assets/partners/sonicWall.png',
    'public/assets/partners/sophos.png',
    'public/assets/partners/tsplus.png',
    'public/assets/partners/veeam.png',
    'public/assets/partners/vmware.png'
  ];

  const carousel = document.getElementById('carousel');

  // Generar elementos de imagen con tamaño fijo
  partners.forEach((url) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = "Partner Logo";
    img.className = "h-24 w-40"; // Tamaño uniforme para todas las imágenes
    carousel.appendChild(img);
  });

  // Duplicar imágenes para crear un efecto infinito
  partners.forEach((url) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = "Partner Logo";
    img.className = "h-24 w-40"; // Tamaño uniforme
    carousel.appendChild(img);
  });


