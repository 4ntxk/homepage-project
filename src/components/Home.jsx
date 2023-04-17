import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#8f5121]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-black">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Anton Stanaszek
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          I'm brown.
        </h2>
        <p className="text-[#ccd6f6] py-4 max-w-[700px]">
          I’m self-taught novice in art of web development, mainly focused on
          front-end. Ready to learn and build upon my solid foundation.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-black">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
