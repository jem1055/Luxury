import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";

const Car = () => {
  return (
    <Layout tittle="Luxury Events Car" description="Descripcion Home" galerie>
      <div className="container">
        <div className="row">
          <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 g-4">
            {data.products.map((product) => (
              <ProductItem key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Car;
