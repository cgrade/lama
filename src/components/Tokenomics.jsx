import React from "react";
import tokenomicWeb from "../images/tokenomicWeb.png";
import tokenomicMobile from "../images/tokenomicMobile.png";

const Tokenomics = () => {
  return (
    <>
      <div className="bg-dalai_red">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center my-10">
            <div className="text-4xl font-extrabold  text-[#ffff] font-cust1 mb-10">
              LAMANOMICS
            </div>
            <img src={tokenomicWeb} width={1000} alt="" />
            <img src="" alt="" />
          </div>
          <div></div>
          <div className=" flex flex-row flex-wrap bg-serene_blue bg-opacity-30 p-3 rounded-2xl justify-between text-[#ffff]">
            <div className="mx-10 px-10 my-5">
              <p className="font-bold">Total Supply</p>
              <p className="font-bold font-cust1">100,000,000</p>
            </div>
            <div className="mx-10 px-10 my-5">
              <p className="font-bold">Liquidity</p>
              <p className="font-bold font-cust1">Burned</p>
            </div>
            <div className="mx-10 px-10 my-5">
              <p className="font-bold">CA</p>
              <p className="font-bold font-cust1">TBA</p>
            </div>
          </div>
          <div>
            Join our pride and become a part of the Mufasa Journey to the moon.
            Whether you're here to hodl, create, or simply enjoy the memes,
            there's a place for you in our jungle.
          </div>
        </div>
        <div>
          <div className="text-3xl font-extrabold pt-10 pl-5 text-[#ffff] font-cust1">
            Lama Utilities
          </div>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
