import Layout from "../components/Layout";
import Form from "../components/Form";


const Propos = () => {
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
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="mt-3 col-lg-6 ">
                            <img
                                src="/img/Propos/juntas.png"
                                className="img-fluid rounded"
                                alt="image"
                            />
                        </div>
                        <div className="row justify-content-around">
                            <div className="mt-3 col-lg-6">
                                <div className="card card-body font_one">
                                    On se présente, Juanita et Maria comme fondatrices de Luxury
                                    Events JM.Notre but est de transformer vos moments précieux
                                    en transmettant de la magie et de l´amour. Il est important
                                    pour nous de personnaliser votre fête et la rendre unique et
                                    mémorable. Merci de votre confiance.
                                </div>
                            </div>
                        </div>
                    </div>
                    
         
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="row rounded float-start col-6">
                                <div className="mt-3 ">
                                    <img
                                        src="/img/Propos/Juanita.png"
                                        className="img-fluid rounded"
                                        alt="image"
                                    />
                                </div>
                                <div className="rounded float-start">
                                    <div className="mt-3 ">
                                        <div className="card card-body font_one">
                                            Je suis Juanita, une des créatrices de cette magnifique
                                            entreprise . Chaque espace mérite une touche de magie, mon but
                                            est de transformer vos événements de rêve et les rendre un
                                            souvenir pour l´éternité.
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="rounded float-end col-6">
                                <div className="mt-3 ">
                                    <img
                                        src="/img/Propos/María.png"
                                        className="img-fluid rounded"
                                        alt="image"
                                    />
                                </div>
                                <div className="row rounded float-end">
                                    <div className="mt-3">
                                        <div className="card card-body font_one">
                                            On se présente, Juanita et Maria comme fondatrices de Luxury
                                            Events JM.Notre but est de transformer vos moments précieux
                                            en transmettant de la magie et de l´amour. Il est important
                                            pour nous de personnaliser votre fête et la rendre unique et
                                            mémorable. Merci de votre confiance.
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                        </div>  
                        <div className="mt-3 ">
                        <Form />
                        </div>            
                    </div>
                </div>              
            </div>
        </Layout>
    );
}

export default Propos;
