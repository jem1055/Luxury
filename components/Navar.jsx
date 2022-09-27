export default function Nav() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light  font_one ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Créez votre événement
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Nos forfaits
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Baby shower
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/">
                      Fëte d´enfants
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Fëte d´anniversaire
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Événements corparatifs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/prueba">
                  Locations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Propos">
                  Á propos de nous
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Galerie">
                  Galerie
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
