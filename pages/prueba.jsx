import Layout from "../components/Layout";

const prueba = () => {
  return (
    <Layout
      tittle="Luxury Events Á Propos de Nous"
      description="Descripcion Home"
      propos
    >
      <div
        style={{
          background: 'url("/img/fondo_two.jpg")',
          backgroundColor: "#ff666",
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div class="col-sm-4">
              <img
                src="/img/Propos/Juanita.jpg"
                className="img-fluid rounded"
                alt="image"
                // onClick={stateImage === "IS" ? open : inicial}
              />
            </div>
            <div class="col-sm-8">
              <div className="card card-body d-none">
                1. Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
              <div class="row mb-6 mt-2">
                <div className="col-sm-6">
                  <img
                    src="/img/Propos/juntas.jpg"
                    className="img-fluid rounded"
                    alt="image"
                  />
                </div>
                <div className="card card-body d-none">
                  1. Some placeholder content for the first collapse component
                  of this multi-collapse example. This panel is hidden by
                  default but revealed when the user activates the relevant
                  trigger.
                </div>
                <div class="col-sm-6 mt-6">
                  <img
                    src="/img/Propos/María.jpg"
                    className="img-fluid rounded "
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-8 ">
              <div className="card card-body">
                3. Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default prueba;
