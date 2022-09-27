export default function Footer() {
  return (
    <footer>
      <div className="container container-custom">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="copyright">
              <p>© Luxury Events Todos los derechos reservados</p>

              <div className="d-flex justify-content-evenly my-2">
                <a
                  href="https://www.facebook.com/clinicaimbanaco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f icon-footer"></i>
                </a>
                <a
                  href="https://twitter.com/clinicaimbanaco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter icon-footer"></i>
                </a>
                <a
                  href="https://www.instagram.com/clinicaimbanaco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram icon-footer"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
