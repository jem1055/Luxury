import Layout from "../components/Layout";
import React, { Suspense, lazy } from "react";

const ImageGalery = lazy(() => import("../components/ImageGalery.jsx"));

const Galerie = () => {
  return (
    <Layout
      tittle="Luxury Events Galerie"
      description="Descripcion Home"
      galerie
    >
      <Suspense fallback={<h1>Cargando.....</h1>}>
        <ImageGalery />
      </Suspense>
    </Layout>
  );
};

export default Galerie;
