import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Cart = ({ removeFromCart, cart }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    for (const product of cart) {
      total += parseInt(product.price);
    }
    setPrice(total);
  }, [cart]);

  return (
    <>
      <h2 className="heading">${price}</h2>
      <br />
      <div className="grid">
        {cart.map((product, index) => {
          return (
            <div className="card" key={index}>
              <img src={product.image} alt={product.name} />
              <div className="content">
                <h2 className="title">{product.name}</h2>
                <span className="price">${product.price}</span>
                <button
                  className="btn remove"
                  onClick={() => removeFromCart(index)}
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
