import React from "react";
import Logo from "../images/crop.png";

const Nav = () => {
  return (
    <>
      <nav className=" fixed top-0 flex w-[95%] justify-between p-5 bg-white/20 shadow-xl rounded mr-5">
        <div>
          {" "}
          <img src={Logo} width={50} height={10} alt="" className="flex z-40" />
        </div>
        <div className="hidden md:flex justify-around space-x-20 font-bold text-xl text-serene_blue pt-10">
          <p>Tokenomics</p>
          <p>Community</p>
          <p>How to buy</p>
        </div>
        <div className="flex justify-end w-full md:w-auto">
          <button className="border-2 border-solid rounded-lg px-3 border-serene_blue font-bold text-xl text-serene_blue">
            BUY $LAMA
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
