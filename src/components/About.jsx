import React from "react";
import sittingLama from "../images/siting_lama.png";
import zigzagPattern from "../images/zig.svg"; // Import the SVG

const About = () => {
  return (
    <>
      <div
        className="bg-dalai_red mt-20"
        style={{
          backgroundImage: `url(${zigzagPattern})`, // Apply the SVG as a background image
          backgroundSize: "auto 30px", // Control the size of the pattern
          backgroundRepeat: "repeat-x", // Repeat the pattern horizontally
        }}
      >
        <p className="text-3xl font-extrabold pt-10 pl-5 text-[#ffff] font-cust1">
          ABOUT UNCLE LAMA
        </p>
        <div className="flex flex-wrap justify-between md:flex-nowrap md:p-5">
          <div>
            <img src={sittingLama} width={800} alt="" />
          </div>
          <div className="text-2xl px-8 justify-center items-center md:px-20 pt-10 text-[#ffff]">
            The Uncle Lama meme project aims to build a strong, community-driven
            narrative with the help of strategic influencer collaborations,
            engaging content, and targeted promotions. By leveraging the gentle
            yet assertive nature of Uncle Lama, we will create a project that
            resonates with audiences worldwide.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
