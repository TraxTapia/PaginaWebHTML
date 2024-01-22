function generateNavbar() {
  const navbarContainer = document.getElementById("navbar-container");
  navbarContainer.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand"  href="Index.html">
        <img
          src="img/Programming-64.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        <span class="tituloLogo">TiendaWeb</span>
        
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="Index.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Productos.html">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="AvisoPrivacidad.html">Nosotros</a>
        </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
    </nav>
    `;
}
// $("[data-text]").on("keyup", function () {
//   $(this).attr("data-text", $(this).text());
// });
// Llamamos a la función para generar el Navbar
generateNavbar();
