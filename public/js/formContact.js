const btn = document.getElementById('button');
const confirmationModal = document.getElementById('confirmationModal');
const modalContent = document.getElementById('modalContent');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const closeModalButton = document.getElementById('closeModalButton');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario de la manera tradicional

    btn.textContent = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_06tk0mf';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.textContent = 'Enviar';

        // Configuración para éxito
        modalContent.classList.remove('bg-red-600');
        modalContent.classList.add('bg-orange-600');
        modalTitle.textContent = '¡Formulario Enviado!';
        modalTitle.classList.add('text-white');
        modalMessage.textContent = 'Gracias por tu solicitud. Nos pondremos en contacto contigo pronto.';
        
        // Mostrar el modal de confirmación
        confirmationModal.style.display = 'flex';
      }, (err) => {
        btn.textContent = 'Enviar';

        // Configuración para error
        modalContent.classList.remove('bg-orange-600');
        modalContent.classList.add('bg-red-600');
        modalTitle.textContent = 'Error al Enviar';
        modalTitle.classList.add('text-white');
        modalMessage.textContent = 'Hubo un problema al enviar el formulario. Inténtalo nuevamente.';

        // Mostrar el modal de error
        confirmationModal.style.display = 'flex';
      });
  });

// Cerrar el modal cuando se hace clic en el botón "Cerrar"
closeModalButton.addEventListener('click', () => {
  confirmationModal.style.display = 'none';
});

