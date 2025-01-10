import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "../src/components/Product List/ProductList";
import ProductDetails from "./components/Product Deatils/ProductDetails";
import Cart from "../src/components/Cart/Cart";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [notfication, setNotification] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
    showNotfication(`${product.name} has been added to your card`);
  };
  useEffect(() => {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, [cart]);

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };
  const showNotfication = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  };
  return (
    <div className="app">
      <header className="header">
        <h1>E-Commerce Product Page</h1>
        <button className="view-cart-btn" onClick={toggleCart}>
          {showCart ? "Hide Cart" : "View Cart"}
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </header>
      {notfication && <div className="notification">{notfication}</div>}
      {showCart ? (
        <Cart cart={cart} removeFromCart={removeFromCart} setCart={setCart} />
      ) : selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          addToCart={addToCart}
          setSelectedProduct={setSelectedProduct}
        />
      ) : (
        <ProductList
          setSelectedProduct={setSelectedProduct}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;
