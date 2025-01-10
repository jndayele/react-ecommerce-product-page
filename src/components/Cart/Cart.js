import React, { useState } from "react";
import Checkout from "../Checkout/Checkout";
import "./Cart.css";

const Cart = ({ cart, setCart, removeFromCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (showCheckout) {
    return <Checkout totalAmount={totalAmount} setCart={setCart} />;
  }
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${totalAmount}</h3>
          <button onClick={() => setShowCheckout(true)}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
