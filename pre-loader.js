window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  
  // Validamos que el elemento realmente exista en la página
  if (preloader) {
    // 1. Iniciamos la animación de desvanecimiento en CSS
    preloader.classList.add('fade-out');
    
    // 2. Esperamos a que termine la animación (500ms) para sacarlo del DOM
    setTimeout(() => {
      preloader.remove();
    }, 500); 
  }
});
