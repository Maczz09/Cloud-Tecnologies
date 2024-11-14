// Función para cargar un archivo HTML en un elemento específico
function loadHTML(elementId, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error('Error al cargar el archivo:', error));
}

// Cargar header, footer y chatbot al inicio
document.addEventListener("DOMContentLoaded", function() {
  loadHTML("header-container", "/Cloud-Technologies/src/components/header.html");
  loadHTML("footer-container", "/Cloud-Technologies/src/components/footer.html");
  loadHTML("chatbot-container", "/Cloud-Technologies/src/components/chatBot.html"); // Cargar chatBot
});

  
  document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -100px 0px" // Adjust to delay the animation until it's fully in view
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target); // Stop observing once the animation is triggered
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
