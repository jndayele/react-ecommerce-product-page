import React, { useState } from "react";
import Loader from "../Loader/Loader";
import "./Checkout.css";

const Checkout = ({ totalAmount, setCart }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert(
        `Checkout and order successful! Thank You for your purchase. Your item will be shiiped to ${formData.address}`
      );
      setCart([]);
    }, 2000);
  };

  if (loading) return <Loader />;
  return (
    <div className="checkout">
      <h2>Checkout Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <p>Total Amount: ${totalAmount + 20} (includes shipping fee)</p>
        <button type="submit" className="checkout-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
