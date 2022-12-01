import Form from "../components/Form";
import Layout from "../components/Layout";

const Write = () => {
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
        <Form />
      </div>
    </Layout>
  );
};

export default Write;
