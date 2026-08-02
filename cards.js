// #region cards
 // cards================================
const container = document.getElementById('cardsContainer');
  const btnLeft = document.getElementById('btnLeft');
  const btnRight = document.getElementById('btnRight');

  // Función para actualizar la visibilidad de los botones según la posición del scroll
  function updateButtons() {
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    // Tolerancia de 2px para evitar inconsistencias de redondeo por zoom o pantallas Retina
    if (scrollLeft <= 2) {
      btnLeft.classList.add('is-hidden');
    } else {
      btnLeft.classList.remove('is-hidden');
    }

    if (scrollLeft >= maxScrollLeft - 2) {
      btnRight.classList.add('is-hidden');
    } else {
      btnRight.classList.remove('is-hidden');
    }
  }

  // 3° REQUISITO: Traslado del 100% del contenedor al presionar los botones
  btnRight.addEventListener('click', () => {
    container.scrollBy({
      left: container.clientWidth,
      behavior: 'smooth'
    });
  });

  btnLeft.addEventListener('click', () => {
    container.scrollBy({
      left: -container.clientWidth,
      behavior: 'smooth'
    });
  });

  // Escuchar el evento de desplazamiento (scroll) y cambios de tamaño de ventana
  container.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);

  // Verificación inicial al cargar la página
  updateButtons();
  // #endregion