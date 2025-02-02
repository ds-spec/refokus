import React from "react";
import Navbar from "./components/NAvbar";
import Work from "./components/Work";

const App = () => {
  return (
    <div className='w-full font-["satoshi"] h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Work />
    </div>
  );
};

export default App;
