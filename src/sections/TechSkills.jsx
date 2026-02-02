import React from "react";
import logo1 from "../../public/images/HTML5_badge.png";
import logo2 from "../../public/images/css3_badge.png";
import logo3 from "../../public/images/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png";
import logo4 from "../../public/images/1611079.png";
import logo5 from "../../public/images/Typescript_logo_2020.svg.png";
import logo6 from "../../public/images/next_js_logo_icon_145038.png";
import logo7 from "../../public/images/nodejs-logo-FBE122E377-seeklogo.com.png";
import logo8 from "../../public/images/MongoDB_logo_01.png";
import logo9 from "../../public/images/firebase-logo-png-firebase-logo-png-transparent-amp-svg-vector-pluspng-2400x3291.png";
import logo10 from "../../public/images/Logo_PostgreSQL.png";
import logo11 from "../../public/images/prisma-logo-png_seeklogo-349466.png";
import logo12 from "../../public/images/git-logo-png_seeklogo-297887.png";
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
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo2} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo3} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo5} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo4} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo6} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo7} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo8} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo9} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo10} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo11} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className="w-12" src={logo12} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TechSkill;
