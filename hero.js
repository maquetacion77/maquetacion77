document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.hero_nav_buttons button');
  const imagenes = document.querySelectorAll('.hero_noticia img');
  const articulos = document.querySelectorAll('.hero_noticia article');

  if (!botones.length) return;

  let currentIndex = 0;
  const totalSlides = botones.length;
  let autoplayInterval;

  function cambiarDiapositiva(index) {
    currentIndex = parseInt(index, 10);

    botones.forEach(b => b.classList.remove('active'));
    imagenes.forEach(img => img.classList.remove('active'));
    articulos.forEach(art => art.classList.remove('active'));

    if (botones[currentIndex]) botones[currentIndex].classList.add('active');
    if (imagenes[currentIndex]) imagenes[currentIndex].classList.add('active');
    if (articulos[currentIndex]) articulos[currentIndex].classList.add('active');
  }

  function siguienteDiapositiva() {
    let proximoIndex = (currentIndex + 1) % totalSlides;
    cambiarDiapositiva(proximoIndex);
  }

  function iniciarAutoplay() {
    autoplayInterval = setInterval(siguienteDiapositiva, 7000);
  }

  function reiniciarAutoplay() {
    clearInterval(autoplayInterval);
    iniciarAutoplay();
  }

  botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
      const index = e.currentTarget.getAttribute('data-index');
      if (index !== null) {
        cambiarDiapositiva(index);
        reiniciarAutoplay();
      }
    });
  });

  iniciarAutoplay();
});