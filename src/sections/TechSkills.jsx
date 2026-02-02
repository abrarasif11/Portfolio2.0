import React from "react";
import logo1 from "../../public/images/HTML5_badge.png";
import TitleHeader from "../components/TitleHeader";

const TechSkill = () => {
  return (
    <div className="px-4 py-16 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative  font-montserrat">
              <TitleHeader
                title="My Key Skills"
                sub="🤝 What I Bring to the Table"
              />
            </span>
          </span>{" "}
        </h2>
      </div>
      <div className="grid grid-cols-2 mt-20 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img
            className="w-12 hover:scale-105 transition-all duration-900"
            src={logo1}
            alt=""
          />
        </div>
        {/* <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo2} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo3} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-16" src={logo4} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo5} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo6} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo7} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo8} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo9} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo10} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default TechSkill;
