import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader"></div>
      <div className="loader-text">
        <p>Loading........</p>
      </div>
    </div>
  );
};

export default Loader;
