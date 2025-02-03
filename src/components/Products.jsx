import React from "react";
import Button from "./Button";

const Products = () => {
  return (
    <div className="w-full py-5 text-white mt-36">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-semibold">Arqitel</h1>
        <div className="product-details w-1/3">
          <p className="mb-10">
            With a continuous 3D animation, we showcase Arqitel approach and
            show how migration data translates into real estate.
          </p>
          <Button title="Live Project" />
        </div>
      </div>
    </div>
  );
};

export default Products;
