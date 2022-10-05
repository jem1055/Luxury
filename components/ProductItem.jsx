import React from "react";
import Link from "next/link";

const ProductItem = (product) => {
  return (
    <div className="col">
      <div className="card">
        <img src={product.product.image} alt="" className="imagen-card" />
        <div className="card-body">
          <h5 className="card-title">{product.product.name}</h5>
          <p className="card-text">{product.product.price}$</p>
          <Link href={`/product/${product.product.slug}`}>
            <a>
              <button className="btn btn-primary">View product</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
