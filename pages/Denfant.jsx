import Layout from "../components/Layout";
import Form from "../components/Form";
import ImageBabyOne from "../components/ImageBabyOne";
import ImagenDenfant from "../components/ImagenDenfant";
import ImagenDenfantOne from "../components/ImagenDenfantOne";
import ImagenDenfantTwo from "../components/ImagenDenfantTwo";
import ImageBabyTwo from "../components/ImageBabyTwo";
import ImageBabyThree from "../components/ImageBabyThree";
import ImagenDenfantThree from "../components/ImagenDenfantThree";
import ImagenDenfantFour from "../components/ImagenDenfantFour";
import ImagenDenfantFive from "../components/ImagenDenfantFive";


const Denfant = () => {
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
                            <h4 className="font_one d-flex justify-content-start "> Pokemon </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Décoration de base plus </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <ImagenDenfant />
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
                            <h4 className="font_one d-flex justify-content-start "> Wild Safari </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Scene de décoration Premium </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                <ImagenDenfantOne />
                </div>
                

                <div className="container">
                    <div className="row justify-content-around fh4 mt-3">
                        <div className="col-lg-6">
                            <h4 className="font_one d-flex justify-content-start "> Under the sea </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : décoration de base </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                <ImagenDenfantTwo />
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
                            <h4 className="font_one d-flex justify-content-start "> Cutness </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Décoration de Base plus </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                <ImagenDenfantThree />
                </div>

                <div className="container">
                    <div className="row justify-content-around fh4 mt-3">
                        <div className="col-lg-6">
                            <h4 className="font_one d-flex justify-content-start "> Carnival </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Décoration de Base plus </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                <ImagenDenfantFour />
                </div>

                <div className="container">
                    <div className="row justify-content-around fh4 mt-3">
                        <div className="col-lg-6">
                            <h4 className="font_one d-flex justify-content-start "> un conte de fée </h4>
                        </div>
                        <div className="col-lg-6">
                            <a className="dropdown-item font_one d-flex justify-content-end" href="/"> forfait : Décoration de luxe </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                <ImagenDenfantFive />
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

export default Denfant;