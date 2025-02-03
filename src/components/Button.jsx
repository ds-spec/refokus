import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title}) => {
  return (
    <div className="w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between cursor-pointer">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
