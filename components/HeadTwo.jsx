import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";

const HeadTwo = () => {
  const { state, dispatch } = useContext(Store);

  const { cart } = state;

  const [cartItemsCount, setcartItemsCount] = useState(0);

  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <div className="fluid Head_two">
      <div className="mx-auto d-block ">
        <a href="/">
          <img
            className="logo mt-4 ms-5"
            src="/img/Logo.png"
            height={90}
            width={145.97}
            alt="Logo"
          />
        </a>
      </div>
      <div className="position-absolute top-0 end-0">
        <Link href="/Car">
          <a className="nav-link">
            <img src="/img/carrito.png" alt="" />
            <span className="fw-bold rounded p-1">{cartItemsCount}</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeadTwo;
