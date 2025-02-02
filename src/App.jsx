import React from "react";
import Navbar from "./components/NAvbar";
import Work from "./components/Work";
import StripesWrapper from "./components/StripesWrapper";
import ProductsWrapper from "./components/ProductsWrapper";

const App = () => {
  return (
    <div className='w-full font-["satoshi"] min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Work />
      <StripesWrapper />
      <ProductsWrapper />
    </div>
  );
};

export default App;
