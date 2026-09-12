   document.addEventListener('DOMContentLoaded', () => {
  // CONFIGURACIÓN: Bloques máximos por página
  // Un "bloque" es cada contenedor (.ideas_container_01, 02, 03, etc.)
  const ITEMS_PER_PAGE = 8; 

  let currentPage = 1;
  let currentFilter = 'all';

  const container = document.getElementById('ideasContainer');
  const allBlocks = Array.from(container.querySelectorAll('[data-category]'));
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pageIndicator = document.getElementById('pageIndicator');
  const paginationControls = document.getElementById('paginationControls');

  function renderGallery() {
    // 1. Filtrar bloques según categoría seleccionada
    const filteredBlocks = allBlocks.filter(block => {
      if (currentFilter === 'all') return true;
      return block.getAttribute('data-category') === currentFilter;
    });

    // 2. Calcular número total de páginas
    const totalPages = Math.ceil(filteredBlocks.length / ITEMS_PER_PAGE) || 1;

    // Asegurar que la página actual no sobrepase el total de páginas
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    // 3. Ocultar todos los bloques primero
    allBlocks.forEach(block => block.classList.remove('is-visible'));

    // 4. Calcular el rango de bloques a mostrar en esta página
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageBlocks = filteredBlocks.slice(startIndex, endIndex);

    // Mostramos solo los correspondientes
    pageBlocks.forEach(block => block.classList.add('is-visible'));

    // 5. Actualizar interfaz de paginación
    pageIndicator.textContent = `Página ${currentPage} de ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    // Ocultar la paginación completa si solo hay 1 página o ninguna
    if (totalPages <= 1) {
      paginationControls.classList.add('is-hidden');
    } else {
      paginationControls.classList.remove('is-hidden');
    }
  }

  // Event Listeners para botones de Filtros
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentFilter = btn.getAttribute('data-filter');
      currentPage = 1; // Reiniciar a la primera página al cambiar filtro
      renderGallery();
    });
  });

  // Event Listeners para Paginación
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderGallery();
      container.scrollIntoView({ behavior: 'smooth' }); // Scroll suave hacia arriba
    }
  });

  nextBtn.addEventListener('click', () => {
    currentPage++;
    renderGallery();
    container.scrollIntoView({ behavior: 'smooth' });
  });

  // Render inicial
  renderGallery();
});
