const btn = document.getElementById('button');
const confirmationModal = document.getElementById('confirmationModal');
const modalContent = document.getElementById('modalContent');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const closeModalButton = document.getElementById('closeModalButton');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault(); 

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_dw8c1hv';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Suscribir';

        modalContent.classList.remove('bg-red-600');
        modalContent.classList.add('bg-orange-600');
        modalTitle.textContent = '¡Gracias por suscribirte!';
        modalTitle.classList.add('text-white');
        modalMessage.textContent = '¡Gracias por suscribirte al Boletín de Cloud-Tecnologies! Pronto recibirás las mejores noticias, ofertas y mucho más.';

        confirmationModal.style.display = 'flex';
      }, (err) => {
        btn.value = 'Suscribir';

        modalContent.classList.remove('bg-orange-600');
        modalContent.classList.add('bg-red-600');
        modalTitle.textContent = 'Error al Enviar';
        modalTitle.classList.add('text-white');
        modalMessage.textContent = 'Hubo un problema al enviar el formulario. Inténtalo nuevamente.';

        confirmationModal.style.display = 'flex';
      });
  });

// Cerrar el modal cuando se hace clic en el botón "Cerrar"
closeModalButton.addEventListener('click', () => {
  confirmationModal.style.display = 'none';
});
