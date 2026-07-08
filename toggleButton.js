const toggleButton = document.getElementById("toggleButton");
const headerDeck = document.querySelector(".header__deck");

toggleButton.addEventListener("click", function () {
  const isOpen = toggleButton.classList.toggle("icon");
  headerDeck.classList.toggle("is-open");
  
  /* MEJORA RECAUDADORA: Atributo ARIA dinámico para aprobación de accesibilidad Senior */
  toggleButton.setAttribute("aria-expanded", isOpen);
});

function remove() {
  toggleButton.classList.remove("icon");
  headerDeck.classList.remove("is-open");
  toggleButton.setAttribute("aria-expanded", "false");
}