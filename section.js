const mainContainer = document.getElementById('loaders_showcase');
const navButtons = mainContainer.querySelectorAll('.loaders-nav button');
const textDescriptions = mainContainer.querySelectorAll('.loaders-descriptions p');
const targetSpinner = mainContainer.querySelector('.loader-container .spinner');

// Array con las clases correspondientes a cada loader en orden
const spinnerClasses = ['one', 'two', 'three', 'four', 'five'];

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // 1. Limpiar estados activos previos
    navButtons.forEach(b => b.classList.remove('active'));
    textDescriptions.forEach(p => p.classList.remove('active'));
    
    // 2. Activar botón y texto seleccionado
    button.classList.add('active');
    if (textDescriptions[index]) {
      textDescriptions[index].classList.add('active');
    }
    
    // 3. Cambiar dinámicamente la forma del spinner removiendo las viejas y agregando la actual
    if (targetSpinner) {
      targetSpinner.className = 'spinner'; // Resetea a la clase base
      targetSpinner.classList.add(spinnerClasses[index]); // Agrega 'one', 'two', etc.
    }
  });
});
const bgToggle = document.getElementById("bgToggle");
const loaderDisplay = document.querySelector(".loader-display");

bgToggle.addEventListener("click", function () {
  // Alterna la clase que pinta el fondo de negro
  loaderDisplay.classList.toggle("has-dark-bg");
  
  // Opcional: Cambia el texto del botón dinámicamente para mejorar la UX
  const isDark = loaderDisplay.classList.contains("has-dark-bg");
  // bgToggle.querySelector("span").textContent = isDark ? "Claro" : "Oscuro";
});