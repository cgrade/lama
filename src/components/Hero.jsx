import React from "react";
import lama from "../images/grass.png";
import "../style/style.css";

const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${lama})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="background-image px-0"
      >
        <div className="flex justify-center mt-28">
          <p className="text-3xl md:text-7xl font-extrabold font-cust1 text-dalai_red m-8">
            UNCLE LAMA
          </p>
        </div>
        <div className="flex">
          <p className=" justify-center text-center px-2 md:px-40">
            Uncle Lama is a unique and captivating character inspired by the
            revered Dalai Lama, blending the serene wisdom of Buddhism with the
            approachable charm of a llama. The project uses a Lama animal
            character to personify the gentle, calm, peaceful, and loving
            qualities of the Dalai Lama.
          </p>
        </div>
        <div className="flex justify-center mt-5 md:mt-10">
          <button className="border-4 px-2 md:px-10 py-2 m-5 border-dalai_red">
            Join Lama
          </button>
          <button className="border-4 px-6 md:px-14 py-2 md:py-4 m-5 border-dalai_red">
            Chart
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
