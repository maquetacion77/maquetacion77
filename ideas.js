document.addEventListener('DOMContentLoaded', () => {
  const ITEMS_PER_PAGE = 7; 
  let currentPage = 1;
  let currentFilter = 'all';
  const container = document.getElementById('ideasContainer');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pageIndicator = document.getElementById('pageIndicator');
  const paginationControls = document.getElementById('paginationControls');

  function createBlockElement(blockData) {
    const section = document.createElement('section');
    section.className = blockData.type;
    section.setAttribute('data-category', blockData.category);

    blockData.images.forEach(imgData => {
      const img = document.createElement('img');
      img.src = imgData.src;
      img.alt = imgData.alt || 'Componente Maquetación 77';
      img.loading = 'lazy';

      
      if (blockData.type === 'ideas_container_03') {
        section.appendChild(img);
      } else {
  
        const wrapper = document.createElement('div');
        wrapper.appendChild(img);
        section.appendChild(wrapper);
      }
    });

    return section;
  }

function renderGallery() {
    if (typeof IDEAS_DATA === 'undefined') {
      console.error('El archivo ideas-data.js no se ha cargado correctamente.');
      return;
    }

    const filteredData = IDEAS_DATA.filter(item => {
      if (currentFilter === 'all') return true;
      return item.category === currentFilter;
    });

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE) || 1;

    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    container.innerHTML = '';

   // -------------------------------------------------------------
    container.classList.remove('fade-in');
    void container.offsetWidth; 
    // ------------------------------------------------------

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    if (pageData.length === 0) {
      container.innerHTML = `<p style="color: #fff; text-align: center; grid-column: 1/-1;">No hay elementos en esta categoría.</p>`;
    } else {
      pageData.forEach(blockData => {
        const blockEl = createBlockElement(blockData);
        container.appendChild(blockEl);
      });
    }
// -------------------------------------------------------------
    container.classList.add('fade-in');
    // -------------------------------------------------------------

    pageIndicator.textContent = `${currentPage} - ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    if (totalPages <= 1) {
      paginationControls.style.display = 'none';
    } else {
      paginationControls.style.display = 'flex';
    }
  }
  // Filtros
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentFilter = btn.getAttribute('data-filter');
      currentPage = 1;
      renderGallery();
    });
  });


  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderGallery();
      container.scrollIntoView({ behavior: 'smooth' });
    }
  });

  nextBtn.addEventListener('click', () => {
    currentPage++;
    renderGallery();
    container.scrollIntoView({ behavior: 'smooth' });
  });

  renderGallery();
});
