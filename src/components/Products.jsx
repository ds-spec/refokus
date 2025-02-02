import React from "react";
import Button from "./Button";

const Products = () => {
  return (
    <div className="w-full py-5 text-white">
      <div className="max-w-screen-xl mx-auto">
        <h1>Arqitel</h1>
        <div className="product-details">
          <p>
            With a continuous 3D animation, we showcase Arqitel approach and
            show how migration data translates into real estate.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Products;
