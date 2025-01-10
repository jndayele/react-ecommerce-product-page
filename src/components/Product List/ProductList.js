import React, { useState } from "react";
import products from "../utility/ProductData";
import "./ProductList.css";

const ProductList = ({ setSelectedProduct, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div
            className="cart-icon"
            onClick={() => addToCart(product)}
            title="Add to Cart"
          >
            🛒
          </div>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => setSelectedProduct(product)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
