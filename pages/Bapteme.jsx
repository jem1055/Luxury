import Layout from "../components/Layout";
import Form from "../components/Form";
import ImageBapteme from "../components/ImageBapteme";
import ImageBaptemeOne from "../components/ImageBaptemeOne";


const Bapteme = () => {
    return (
        <Layout
            tittle="Luxury Events Á Propos de Nous"
            description="Descripcion Home"
            propos
        >
            <div>
                <div className="container">
                    <div className="row justify-content-around fh4 mt-3">
                        <div className="col-lg-6">
                            <h4 className="font_one d-flex justify-content-start "> Baptême  </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Decoration de base plus </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <ImageBapteme />
                </div>

                <div className="container">
                    <div className="row justify-content-around fh4 mt-3">
                        <div className="col-lg-6">
                            <h4 className="font_one d-flex justify-content-start "> All in white  </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Decoration de base plus </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <ImageBaptemeOne />
                </div>


                

                <div className="container mt-3">
                    <div className="row justify-content-around">
                        <Form />
                    </div>
                </div>



            </div>
        </Layout>
    );
}

export default Bapteme;