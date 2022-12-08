import Layout from "../components/Layout";
import Form from "../components/Form";
import ImageBabyOne from "../components/ImageBabyOne";
import ImageBabyTwo from "../components/ImageBabyTwo";
import ImageBabyThree from "../components/ImageBabyThree";
import ImageBabyFour from "../components/ImageBabyFour";


const Baby = () => {
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
                            <h4 className="font_one d-flex justify-content-start "> Butterfly </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Décoration Premium </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <ImageBabyOne />
                </div>


                <div className="container">
                    <div className="row justify-content-around fh4 mt-3">
                        <div className="col-lg-6">
                            <h4 className="font_one d-flex justify-content-start "> Fabric backdrop + Teddy Bear </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Décoration de Base Plus </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                <ImageBabyTwo />
                </div>

                <div className="container">
                    <div className="row justify-content-around fh4 mt-3">
                        <div className="col-lg-6">
                            <h4 className="font_one d-flex justify-content-start "> Little Teddy is one </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Décoration de Base </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                <ImageBabyThree />
                </div>

                <div className="container">
                    <div className="row justify-content-around fh4 mt-3">
                        <div className="col-lg-6">
                            <h4 className="font_one d-flex justify-content-start "> Marble round backdrop </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Décoration de Base </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                <ImageBabyFour />
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

export default Baby;