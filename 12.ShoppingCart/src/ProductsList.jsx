import React from "react";

const ProductsList = ({ addToCart, products }) => {
  return (
    <div className="grid">
      {products.map((product, index) => {
        return (
          <div className="card" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="content">
              <h2 className="title">{product.name}</h2>
              <span className="price">${product.price}</span>
              <button className="btn add" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
