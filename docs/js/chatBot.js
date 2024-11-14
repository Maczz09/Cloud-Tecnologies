function handleMessage(event) {
    const iframe = document.getElementById('iframeId');
    if (event.data.type === 'chatbotStateChange' && iframe) {
      iframe.style.width = event.data.isClosed ? '90px' : '100%';
      iframe.style.height = event.data.isClosed ? '90px' : '100%';
    }
  }

  // Attach event listener
  window.addEventListener('message', handleMessage);

  // Clean up event listener on page unload (optional)
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('message', handleMessage);
  });