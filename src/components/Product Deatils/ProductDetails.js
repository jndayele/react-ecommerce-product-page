import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import "./ProductDetails.css";
const ProductDetails = ({ product, setSelectedProduct, addToCart }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <button onClick={() => setSelectedProduct(null)}>Back to Products</button>
    </div>
  );
};

export default ProductDetails;
