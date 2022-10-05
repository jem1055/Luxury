import { useState } from "react";
import Layout from "../components/Layout";

const Propos = () => {
  const [stateImage, setStateImage] = useState("IS");

  let card_one = " card card-body d-none ";
  let Juanita = " img-fluid rounded ";
  let juntas = " img-fluid rounded ";
  let Maria = "img-fluid rounded";
  let juntas1 = " img-fluid rounded d-none ";

  let style_text_one = " col-sm-8 ";
  let style_text_two = "col-md-8 mt-3 ";
  let style_text_three = " col-sm-8  ";

  let style_image_one = "col-md-4 mt-3 col-lg-4";
  let style_image_two = "col-sm-6";
  let style_image_three = "col-sm-6";

  let estados = {
    IS: () => {
      style_text_two += "d-none";
      style_text_three += "d-none";
    },
    FS: () => {
      style_text_one = "col-md-8 mt-3 ";
      style_text_two += " d-none ";
      style_text_three += "d-none";
      card_one = " card card-body font_one opacity_6";
    },
    SS: () => {
      Juanita = "d-none ";
      style_text_one = " col-md-8 mt-2 ";
      style_text_two += "col-md-8 mt-3 ";
      style_text_three += "d-none";
      style_image_three += " d-none";
      juntas = " img-fluid rounded d-none ";
      juntas1 = "img-fluid rounded";
    },
    TS: () => {
      style_text_three = "col-sm-8 p-a ";
      style_text_two += "d-none";
      Maria = "img-fluid rounded mt-6";
    },
  };

  estados[stateImage]();

  const inicial = () => {
    setStateImage("IS");
  };

  const open = () => {
    setStateImage("FS");
  };

  const open1 = () => {
    setStateImage("SS");
  };

  const open2 = () => {
    setStateImage("TS");
  };

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
            <div className={style_image_one}>
              <img
                src="/img/Propos/Juanita.png"
                className={Juanita}
                alt="image"
                onClick={stateImage === "IS" ? open : inicial}
              />
              <img
                src="/img/Propos/juntas.png"
                className={juntas1}
                alt="image"
                onClick={stateImage === "IS" ? open1 : inicial}
              />
            </div>

            <div className={style_text_one}>
              <div className={card_one}>
                Je suis Juanita, une des créatrices de cette magnifique
                entreprise . Chaque espace mérite une touche de magie, mon but
                est de transformer vos événements de rêve et les rendre un
                souvenir pour l´éternité.
              </div>
              <div className="row mb-6 mt-3">
                <div className={style_image_two}>
                  <img
                    src="/img/Propos/juntas.png"
                    className={juntas}
                    alt="image"
                    onClick={stateImage === "IS" ? open1 : inicial}
                  />
                </div>
                <div className={style_text_two}>
                  <div className="card card-body font_one opacity_6">
                    On se présente, Juanita et Maria comme fondatrices de Luxury
                    Events JM.Notre but est de transformer vos moments précieux
                    en transmettant de la magie et de l´amour. Il est important
                    pour nous de personnaliser votre fête et la rendre unique et
                    mémorable. Merci de votre confiance.
                  </div>
                </div>

                <div className={style_image_three}>
                  <img
                    src="/img/Propos/María.png"
                    className={Maria}
                    alt="image"
                    onClick={stateImage === "IS" ? open2 : inicial}
                  />
                </div>
              </div>
            </div>
            <div className={style_text_three}>
              <div className="card card-body mt-2 font_one opacity_6">
                Je suis Maria Diaz, Co-fondatrice de Luxury Events JM Je me suis
                donné pour but de toujours voir l´émerveillement dans vos yeux
                lors d´une création. C´est pourquoi je reste à l´affût des
                nouvelles façons de faire. Au plaisir de vous rencontrer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Propos;
