export default function Footer() {
  return (
    <footer>
    <div className="container container-custom">
      <div className="row">
        <div className="d-flex justify-content-center">
          <div className="copyright">
            <p>© Luxury Events 2022 Todos los derechos reservados</p>

            <div className="d-flex justify-content-center  my-2">
             <p> luxuryeventsjm@gmail.com</p>
             </div>
             <div className="d-flex justify-content-center mt-2">
             <p>438-923-2775 - 438-883-0612</p>
             </div>

            <div className="d-flex justify-content-evenly mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100048928520423"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f icon-footer"></i>
              </a>
              
              <a
                href="https://www.instagram.com/luxuryeventsjm/"
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
