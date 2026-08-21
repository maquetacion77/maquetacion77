document.addEventListener("DOMContentLoaded", () => {
  const primarySection = document.getElementById("primarySection_cards");
  const cardsContainer = document.getElementById("cardsContainer");

  // 1. Renderizar la lista de botones-imagen en el contenedor
  function renderThumbnails() {
    cardsContainer.innerHTML = cardsData
      .map(
        (card) => `
        <button 
          type="button" 
          class="card-preview-btn" 
          data-id="${card.id}" 
          aria-label="Ver detalles del componente"
        >
          <img 
            src="${card.previewImg}" 
            alt="${card.altText}" 
            class="card-preview-btn__image"
            width="150"
            height="120"
            loading="lazy"
          />
        </button>
      `
      )
      .join("");
  }

  // 2. Cargar una carta en la sección principal por su ID
  function displayCard(cardId) {
    const selectedCard = cardsData.find((card) => card.id === cardId);
    if (!selectedCard) return;

    primarySection.innerHTML = selectedCard.htmlContent;
  }

  // 3. Delegación de eventos para capturar el clic en cualquier miniatura
  cardsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-preview-btn");
    if (!btn) return;

    const cardId = btn.dataset.id;
    displayCard(cardId);
  });

  // Inicializar
  renderThumbnails();
  if (cardsData.length > 0) {
    displayCard(cardsData[0].id); // Carga la primera carta por defecto
  }
});

function displayCard(cardId) {
  const selectedCard = cardsData.find((card) => card.id === cardId);
  if (!selectedCard) return;

  // 1. Activar animación de salida
  primarySection.classList.add("is-swapping");

  // 2. Esperar a que termine el fade-out (200ms) para cambiar el HTML
  setTimeout(() => {
    primarySection.innerHTML = selectedCard.htmlContent;

    // 3. Quitar clase de salida para disparar la animación de entrada (@keyframes cardIn)
    primarySection.classList.remove("is-swapping");
  }, 200);
}
