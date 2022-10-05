import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import { Store } from "../utils/Store";

const Head = () => {
  const { state, dispatch } = useContext(Store);

  const { cart } = state;

  const [cartItemsCount, setcartItemsCount] = useState(0);

  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <img src="/img/Logo.png" height={123.31} width={200} alt="Logo" />
      </div>

      <div className="position-absolute top-0 end-0">
        <Link href="/Car">
          <a className="nav-link">
            <img src="/img/carrito.png" alt="" />
            <span className="text fw-bold rounded p-1">{cartItemsCount}</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Head;
