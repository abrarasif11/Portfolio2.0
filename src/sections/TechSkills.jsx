import React from "react";
import TitleHeader from "../components/TitleHeader";
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
import logo11 from "../../public/images/prisma.png";
import logo12 from "../../public/images/git.png";

const skills = [
  logo1,
  logo2,
  logo3,
  logo5,
  logo4,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

const TechSkill = () => {
  return (
    <div
      id="skills"
      className="px-4 py-16 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      {/* Header */}
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
          <span className="relative inline-block font-montserrat">
            <TitleHeader
              title="My Key Skills"
              sub="🤝 What I Bring to the Table"
            />
          </span>
        </h2>
      </div>

      {/* 3D skill grid */}
      <div
        className="grid grid-cols-2 mt-20 gap-8 mb-10 sm:grid-cols-3 lg:grid-cols-6"
        style={{ perspective: "1200px" }}
      >
        {skills.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={{
              animation: `float3d 6s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Badge */}
            <div
              className="
                group
                relative
                w-20 h-20 sm:w-24 sm:h-24
                flex items-center justify-center
                bg-white/90
                shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                transition-all duration-500
                hover:scale-110
              "
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* light layer */}
              <div
                className="absolute inset-0 rounded-xl opacity-60"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.2))",
                }}
              />

              {/* logo */}
              <img
                src={logo}
                alt=""
                className="
                  relative
                  w-10 sm:w-12
                  transition-transform duration-500
                  group-hover:-translate-y-1
                "
                style={{
                  transform: "translateZ(28px)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Local animation */}
      <style>
        {`
          @keyframes float3d {
            0% {
              transform: translateY(0px) rotateX(0deg) rotateY(0deg);
            }
            50% {
              transform: translateY(-12px) rotateX(8deg) rotateY(10deg);
            }
            100% {
              transform: translateY(0px) rotateX(0deg) rotateY(0deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TechSkill;
