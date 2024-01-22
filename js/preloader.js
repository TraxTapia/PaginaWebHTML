// Función para mostrar el preload
function showPreload() {
  const preloadContainer = document.getElementById("preload-container");
  preloadContainer.innerHTML = '<div id="loader"></div>';
}

// Función para ocultar el preload
function hidePreload() {
  const preloadContainer = document.getElementById("preload-container");
  preloadContainer.innerHTML = "";
}

// Evento que se ejecuta al hacer clic en enlaces de navegación
document.addEventListener("click", function (event) {
  // Verificar si se hizo clic en un enlace
  if (event.target.tagName === "A") {
    // Mostrar el preload al hacer clic en un enlace
    showPreload();

    // Hacer una pausa breve antes de navegar a la nueva página (opcional)
    // Esto solo es necesario si se desea dar tiempo para mostrar el preload
    setTimeout(function () {
      // Navegar a la nueva página
      window.location.href = event.target.href;
    }, 500); // Cambia este valor según tus necesidades
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  }
});

// Evento que se ejecuta cuando la página ha terminado de cargar
window.addEventListener("load", function () {
  // Ocultar el preload cuando la página haya cargado completamente
  hidePreload();
});
