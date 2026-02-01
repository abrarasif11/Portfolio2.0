import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import BallCanvas from "../canvas/Ball";

const Tech = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="My Key Skills" sub="🤝 What I Bring to the Table" />
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
