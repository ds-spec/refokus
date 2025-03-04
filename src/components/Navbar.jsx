import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 bg-zinc-900 flex items-center justify-between border-b-[1.8px] border-zinc-700">
      <div className="left flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a href="#" className="text-sm flex items-center gap-1.5">
              {elem?.length === 0 ? (
                <span className="w-[0.5px] h-8 bg-zinc-500"></span>
              ) : (
                <a href="#" className="text-sm flex items-center gap-2">
                  {index === 1 && (
                    <span
                      style={{ boxShadow: "rgb(0, 255, 25) 0px 0px 0.55em" }}
                      className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"
                    ></span>
                  )}
                  {elem}
                </a>
              )}
            </a>
          ))}
        </div>
      </div>
      <Button title="Get Started" />
    </div>
  );
};

export default Navbar;
