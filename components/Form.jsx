const Form = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill">
      <h4 className="font_one d-flex justify-content-center">
        QUE CÉLÉBREZ-VOUS AUJOURD´HUI
      </h4>
      <form class="row g-3 needs-validation mt-2" novalidate>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="Nom complet"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="Adresse courriel"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="Numero de téléphone"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="Message"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class="col-12 d-flex justify-content-center">
          <button class="btn_person btn-lg " type="submit">
            ENVOYER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
