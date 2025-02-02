import React from "react";

const Stripes = ({ stripe }) => {
  return (
    <div className="w-[16.66%] px-3 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center">
      <img src={stripe.url} alt="" />
      <span className="font-bold">{stripe.number}</span>
    </div>
  );
};

export default Stripes;
