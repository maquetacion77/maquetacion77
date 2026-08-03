  // Lógica de los tres Switches existentes en la sección #switch_btn
    const toggleButton01 = document.getElementById("switch_btn_01");
    toggleButton01.addEventListener("click", function () {
      const isActive = toggleButton01.classList.toggle("icon_01");
      toggleButton01.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    const toggleButton02 = document.getElementById("switch_btn_02");
    toggleButton02.addEventListener("click", function () {
      const isActive = toggleButton02.classList.toggle("icon_02");
      toggleButton02.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    const toggleButton03 = document.getElementById("switch_btn_03");
    toggleButton03.addEventListener("click", function () {
      const isActive = toggleButton03.classList.toggle("icon_03");
      toggleButton03.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // LÓGICA DINÁMICA DEL NUEVO SWITCH BUTTON DEL HEADER
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const buttonContainers = document.querySelectorAll(".button__container");

    themeToggleBtn.addEventListener("click", function () {
      // 1. Cambia de clase el propio botón
      const isThemeActive = themeToggleBtn.classList.toggle("theme-active");

      // 2. Cambia la clase de todos los .button__container para cambiar su fondo a #111
      buttonContainers.forEach(container => {
        container.classList.toggle("bg-dark-theme");
      });

      // 3. Actualiza el atributo aria-pressed de accesibilidad
      themeToggleBtn.setAttribute("aria-pressed", isThemeActive ? "true" : "false");
    });